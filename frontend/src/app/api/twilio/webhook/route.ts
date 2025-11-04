import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function POST(req: Request) {
const form = await req.formData()
// Twilio posts 'From', 'To', 'Body', 'MessageSid', 'SmsStatus' etc.
const from = form.get('From')?.toString() || ''
const to = form.get('To')?.toString() || ''
const body = form.get('Body')?.toString() || ''
const sid = form.get('MessageSid')?.toString() || ''


// create contact + thread + message
let contact = await prisma.contact.findUnique({ where: { phone: from } })
if (!contact) contact = await prisma.contact.create({ data: { phone: from } })


// find or create thread
let thread = await prisma.thread.findFirst({ where: { contactId: contact.id } })
if (!thread) thread = await prisma.thread.create({ data: { contactId: contact.id, snippet: body } })


const message = await prisma.message.create({ data: { threadId: thread.id, channel: 'SMS', from, to, body, direction: 'inbound', providerId: sid, provider: 'twilio', status: 'received' } })


// update thread
await prisma.thread.update({ where: { id: thread.id }, data: { snippet: body, lastAt: new Date() } })


// persist webhook raw
await prisma.webhookEvent.create({ data: { source: 'twilio', payload: { from, to, body, sid } } })


// optionally publish to WS or Redis pubsub for realtime UI
// publishEvent({ type: 'thread:new', threadId: thread.id })


return NextResponse.text('<Response></Response>', { headers: { 'Content-Type': 'text/xml' } })
}