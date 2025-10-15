# 🍷 Decanter - Vinoteca App

Una aplicación web moderna para la gestión y visualización de un catálogo de vinos, desarrollada con Next.js 15, TypeScript y PostgreSQL.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38bdf8)

## 📋 Descripción

**Decanter** es una aplicación full-stack que permite explorar, buscar y gestionar un catálogo de vinos argentinos. Cuenta con una interfaz pública elegante y un sistema de búsqueda avanzado, preparada para futuras funcionalidades de administración y e-commerce.

## ✨ Características

### 🎯 Funcionalidades Implementadas

- ✅ **Catálogo de Vinos** - Visualización de vinos con información detallada
- ✅ **Búsqueda Avanzada** - Búsqueda por nombre, bodega, cepa y descripción
- ✅ **Secciones Destacadas** - Vinos destacados, recomendaciones del sommelier y promociones
- ✅ **Páginas de Detalle** - Información completa de cada vino con diseño premium
- ✅ **Estados de Carga** - Loading spinners y manejo de errores profesional
- ✅ **Diseño Responsive** - Adaptado para móvil, tablet y desktop
- ✅ **Optimización de Imágenes** - Uso de Next.js Image para mejor performance

### 🎨 Diseño

- **Paleta de Colores Personalizada**: Verde oscuro, dorado y vino
- **Tipografías**: Inter (sans-serif) y Playfair Display (serif)
- **Animaciones**: Transiciones suaves y efectos de hover
- **Dark Mode**: Diseño oscuro por defecto

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 15.5.2 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.1.13
- **UI Components**: shadcn/ui
- **Testing**: Jest + React Testing Library

### Backend
- **Base de Datos**: PostgreSQL
- **ORM**: Prisma 6.15.0
- **Autenticación**: Preparado para NextAuth.js

### Desarrollo
- **Linter**: ESLint
- **Package Manager**: npm
- **Versionado**: Git

## 📁 Estructura del Proyecto

```
decanter/
├── app/                          # App Router de Next.js
│   ├── page.tsx                  # Página principal
│   ├── layout.tsx                # Layout raíz
│   ├── globals.css               # Estilos globales
│   ├── buscar/                   # Página de búsqueda
│   │   └── page.tsx
│   └── vinos/                    # Páginas de vinos
│       ├── layout.tsx
│       └── [id]/
│           └── page.tsx          # Detalle del vino
│
├── components/                   # Componentes React
│   ├── home/                     # Componentes del home
│   │   ├── FeaturedWines.tsx
│   │   ├── SommelierPicks.tsx
│   │   └── MonthlyPromo.tsx
│   └── shared/                   # Componentes reutilizables
│       ├── ui/                   # Componentes UI
│       │   ├── Loading.tsx
│       │   ├── ErrorMessage.tsx
│       │   ├── EmptyState.tsx
│       │   └── ErrorBoundary.tsx
│       ├── WineCard/
│       │   ├── WineCard.tsx
│       │   └── WineCard.test.tsx
│       └── SearchBar/
│           └── SearchBar.tsx
│
├── lib/                          # Utilidades
│   ├── db.ts                     # Cliente de Prisma
│   ├── utils.ts                  # Funciones auxiliares
│   └── hooks/
│       └── useAsync.ts           # Hook personalizado
│
├── prisma/                       # Prisma ORM
│   ├── schema.prisma             # Esquema de base de datos
│   ├── seed.ts                   # Datos de prueba
│   └── migrations/               # Migraciones de BD
│
└── public/                       # Archivos estáticos
    └── images/
        └── wines/                # Imágenes de botellas

```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- PostgreSQL 15+
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd decanter
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local
DATABASE_URL="postgresql://usuario:password@localhost:5432/decanter"
```

4. **Configurar la base de datos**
```bash
# Ejecutar migraciones
npx prisma migrate dev

# Poblar con datos de prueba
npm run db:seed
```

5. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm start            # Inicia servidor de producción

# Base de datos
npm run db:seed      # Pobla la BD con datos de prueba

# Testing
npm test             # Ejecuta tests en modo watch

# Linting
npm run lint         # Ejecuta ESLint
```

## 🗄️ Modelo de Datos

### Wine
```prisma
model Wine {
  id              String   @id @default(cuid())
  name            String
  winery          String
  year            Int
  grape           String
  price           Float
  description     String
  imageUrl        String
  isFeatured      Boolean  @default(false)
  isSommelierPick Boolean  @default(false)
  isOnPromo       Boolean  @default(false)
  promoPrice      Float?
  createdAt       DateTime @default(now())
}
```

### User (Preparado para autenticación)
```prisma
model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  password  String
  role      UserRole @default(USER)
  createdAt DateTime @default(now())
}
```

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con cobertura
npm test -- --coverage
```

## 📦 Componentes Principales

### UI Components
- **Loading**: Spinner reutilizable con diferentes tamaños
- **ErrorMessage**: Mensajes de error elegantes con variantes
- **EmptyState**: Estados vacíos con iconos y acciones
- **ErrorBoundary**: Captura errores de React

### Page Components
- **FeaturedWines**: Vinos destacados
- **SommelierPicks**: Recomendaciones del sommelier
- **MonthlyPromo**: Promoción del mes
- **SearchBar**: Barra de búsqueda
- **WineCard**: Tarjeta de vino reutilizable

## 🎯 Roadmap

### ✅ Completado
- [x] Configuración inicial del proyecto
- [x] Diseño y paleta de colores
- [x] Modelo de base de datos
- [x] Páginas principales (Home, Detalle, Búsqueda)
- [x] Sistema de búsqueda
- [x] Estados de carga y errores
- [x] Componentes reutilizables

### 🚧 En Progreso
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] CRUD de vinos

### 📋 Próximos Pasos
- [ ] Carrito de compras
- [ ] Sistema de reviews
- [ ] Wishlist
- [ ] Funcionalidad QR
- [ ] Despliegue en producción

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como proyecto de portfolio para demostrar habilidades en desarrollo full-stack moderno.

## 🙏 Agradecimientos

- Next.js por el increíble framework
- Prisma por el ORM type-safe
- Tailwind CSS por el sistema de diseño
- shadcn/ui por los componentes

---

**Decanter** - Descubre tu próximo vino favorito 🍷