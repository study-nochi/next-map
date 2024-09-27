// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // 원한다면 쿼리 로그를 추가
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
