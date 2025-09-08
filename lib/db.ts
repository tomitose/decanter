// lib/db.ts
import { PrismaClient } from '@prisma/client';

// Declaramos 'prisma' en el scope global para evitar que se reinicie con el hot-reload de Next.js
declare global {
  var prisma: PrismaClient | undefined;
}

// Usamos la instancia global si existe, si no, creamos una nueva.
// En producción, 'globalThis.prisma' no existirá la primera vez, así que se crea una nueva.
// En desarrollo, 'globalThis.prisma' se preservará entre recargas.
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}