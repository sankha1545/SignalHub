import { Queue } from 'bullmq';
export const connection = { connection: { url: process.env.REDIS_URL } };
export const sendQueue = new Queue('send', { connection: connection.connection });
export const scheduleQueue = new Queue('schedule', { connection: connection.connection });