import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scheduleQueue } from '@/lib/queue';

export async function POST(req: Request) {
  const body = await req.json();
  const { threadId, to, channel, body: text, sendAt, senderId } = body;
  // validate perms (editor/admin) - check session

  const scheduled = await prisma.scheduledMessage.create({
    data: { threadId, senderId, body: text, channel, sendAt: new Date(sendAt), status: 'scheduled' }
  });

  // enqueue a delayed job to the scheduleQueue so a worker will run at sendAt
  await scheduleQueue.add('send-scheduled', { scheduledId: scheduled.id }, { delay: Math.max(0, new Date(sendAt).getTime() - Date.now()) });

  return NextResponse.json({ success: true, scheduled });
}
