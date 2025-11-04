// workers/send-and-scheduler.js
const { Worker } = require('bullmq');
const { connection } = require('../lib/queue');
const { PrismaClient } = require('@prisma/client');
const { send } = require('../lib/twilio'); // helper
const prisma = new PrismaClient();

const sendWorker = new Worker('send', async job => {
  const { messageId } = job.data;
  const msg = await prisma.message.findUnique({ where: { id: messageId } });
  if (!msg) throw new Error('message missing');

  // read to/from from metadata or contact
  const to = msg.metadata?.to || (await prisma.contact.findUnique({ where: { id: msg.thread.contactId } })).phone;
  const res = await send(msg.channel, to, msg.body);
  await prisma.message.update({ where: { id: msg.id }, data: { externalId: res.sid, metadata: { ...msg.metadata, sendStatus: res.status } } });
  await prisma.thread.update({ where: { id: msg.threadId }, data: { snippet: msg.body, lastAt: new Date() } });

  // publish event (optional)
});

const scheduleWorker = new Worker('schedule', async job => {
  const { scheduledId } = job.data;
  const s = await prisma.scheduledMessage.findUnique({ where: { id: scheduledId } });
  if (!s) throw new Error('scheduled not found');

  // create message row and enqueue to sendQueue
  const message = await prisma.message.create({
    data: {
      threadId: s.threadId, senderId: s.senderId, body: s.body,
      channel: s.channel, direction: 'OUTBOUND', metadata: {}
    }
  });
  // enqueue
  const { Queue } = require('bullmq');
  const q = new Queue('send', connection.connection);
  await q.add('send-message', { messageId: message.id });
  await prisma.scheduledMessage.update({ where: { id: scheduledId }, data: { status: 'sent' } });
});
