// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

declare global {
  // Prevent multiple instances of Prisma Client in development (hot reload)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    // Optionally enable query logging:
    // log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
