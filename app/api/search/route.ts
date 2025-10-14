import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.trim() === '') {
      return NextResponse.json({ wines: [] });
    }

    // Búsqueda en múltiples campos
    const wines = await db.wine.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { winery: { contains: query, mode: 'insensitive' } },
          { grape: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } }
        ]
      },
      orderBy: { name: 'asc' },
      take: 12 // Limitar a 12 resultados para mejor performance
    });

    return NextResponse.json({ wines });
  } catch (error) {
    console.error('Error en búsqueda:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
