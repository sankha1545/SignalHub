import Twilio from 'twilio'
const sandbox = process.env.TWILIO_SANDBOX === 'true'
const client = sandbox ? null : new Twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)


export async function sendViaTwilio({ from, to, body }: { from: string; to: string; body: string }) {
if (sandbox) {
// simulate
console.log('[twilio sandbox] send', { from, to, body })
return { sid: 'sandbox-' + Math.random().toString(36).slice(2, 9), status: 'sent' }
}


const msg = await client.messages.create({ from, to, body })
return { sid: msg.sid, status: msg.status }
}