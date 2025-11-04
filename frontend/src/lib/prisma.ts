

import { PrismaClient, type Prisma } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

// Use the global object available in this runtime (node, edge, etc.)
const _global = globalThis as GlobalWithPrisma;

// Decide whether we want query logging enabled.
// This is intentionally opt-in via DEV_LOG_QUERIES to avoid noisy logs in normal dev.
const enableQueryLogging =
  process.env.DEV_LOG_QUERIES === "true" && process.env.NODE_ENV !== "production";

const prismaOptions: Prisma.PrismaClientOptions = enableQueryLogging
  ? { log: ["query"] }
  : {};

// Create or reuse the PrismaClient instance
const client = _global.prisma ?? new PrismaClient(prismaOptions);

// In non-production environments, attach to global to avoid new clients on HMR
if (process.env.NODE_ENV !== "production") {
  _global.prisma = client;
}

/**
 * Export named and default to be compatible with both import styles.
 */
export const prisma = client;
export default prisma;
