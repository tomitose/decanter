// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Antes de sembrar, borramos los vinos existentes para evitar duplicados
  await prisma.wine.deleteMany();
  console.log('Deleted existing wines.');

  const wines = [
    {
      name: 'Catena Zapata Malbec Argentino',
      winery: 'Catena Zapata',
      year: 2021,
      grape: 'Malbec',
      price: 95.5,
      description: 'An iconic Malbec that represents the high-end of Argentina. Complex, with notes of black fruits, violets, and a touch of mocha.',
      imageUrl: '/images/wines/catena-malbec.png',
      isFeatured: true,
    },
    {
      name: 'El Enemigo Chardonnay',
      winery: 'Aleanna',
      year: 2022,
      grape: 'Chardonnay',
      price: 35.0,
      description: 'A Chardonnay fermented under a veil of flor, Jura style. Salty, complex, and with vibrant acidity. Unforgettable.',
      imageUrl: '/images/wines/enemigo-chardonnay.png',
      isSommelierPick: true,
    },
    {
      name: 'Rutini Cabernet Sauvignon',
      winery: 'Rutini Wines',
      year: 2020,
      grape: 'Cabernet Sauvignon',
      price: 45.0,
      description: 'Elegant and structured, with aromas of red pepper, cassis, and a vanilla background from its time in oak.',
      imageUrl: '/images/wines/rutini-cabernet.png',
    },
    {
      name: 'Zuccardi Finca Piedra Infinita',
      winery: 'Zuccardi Valle de Uco',
      year: 2019,
      grape: 'Malbec',
      price: 120.0,
      description: 'A terroir-driven wine that seeks to express the calcareous soil of Paraje Altamira. Mineral, austere, and of great depth.',
      imageUrl: '/images/wines/zuccardi-finca.png',
      isFeatured: true,
    },
    {
      name: 'Bressia Lágrima Canela',
      winery: 'Bodega Bressia',
      year: 2022,
      grape: 'Chardonnay - Semillón',
      price: 28.0,
      description: 'A creamy and elegant white blend, with notes of honey, tropical fruits, and a subtle touch of cinnamon from its barrel aging.',
      imageUrl: '/images/wines/bressia-lagrima.png',
      isOnPromo: true,
      promoPrice: 22.5,
    },
    {
      name: 'Coquena Corte',
      winery: 'San Pedro de Yacochuya',
      year: 2022,
      grape: 'Malbec - Cabernet Sauvignon',
      price: 18.0,
      description: 'A powerful yet fresh blend from Salta\'s high-altitude vineyards. Spicy notes with ripe red fruit and silky tannins.',
      imageUrl: '/images/wines/coquena-corte.png',
    },
    {
      name: 'Saint Felicien Malbec',
      winery: 'Catena Zapata',
      year: 2021,
      grape: 'Malbec',
      price: 22.0,
      description: 'A classic from Catena Zapata. Rich and full-bodied with flavors of black cherry, dark chocolate, and a hint of spice.',
      imageUrl: '/images/wines/saint-felicien.png',
      isFeatured: true,
    },
    {
      name: 'Coquena Malbec',
      winery: 'San Pedro de Yacochuya',
      year: 2023,
      grape: 'Malbec',
      price: 17.5,
      description: 'Expressive and juicy, this Malbec from Salta shows the region\'s character with floral notes and a refreshing finish.',
      imageUrl: '/images/wines/coquena-malbec.png',
    },
    {
      name: 'Numina Malbec',
      winery: 'Bodegas Salentein',
      year: 2020,
      grape: 'Malbec',
      price: 30.0,
      description: 'A complex and concentrated Malbec from the Uco Valley, offering layers of fruit, violet, and a touch of vanilla.',
      imageUrl: '/images/wines/numina-malbec.png',
      isSommelierPick: true,
    },
  ];

  for (const wine of wines) {
    await prisma.wine.create({
      data: wine,
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });