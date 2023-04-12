import { PrismaClient } from '@prisma/client';

declare global {
  var client: PrismaClient | undefined;
}

const client = global.client || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.client = client;

export default client;
