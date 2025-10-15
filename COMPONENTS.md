# 📦 Documentación de Componentes - Decanter

Esta documentación detalla todos los componentes creados en el proyecto Decanter.

---

## 📚 Índice

1. [Componentes UI](#componentes-ui)
2. [Componentes de Página](#componentes-de-página)
3. [Componentes de Home](#componentes-de-home)
4. [Componentes Compartidos](#componentes-compartidos)
5. [Hooks Personalizados](#hooks-personalizados)

---

## 🎨 Componentes UI

### Loading
**Ruta**: `components/shared/ui/Loading.tsx`

**Descripción**: Spinner reutilizable con diferentes tamaños y opciones.

**Props**:
```typescript
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';        // Tamaño del spinner
  text?: string;                     // Texto opcional
  fullScreen?: boolean;              // Modo pantalla completa
}
```

**Uso**:
```tsx
<Loading size="md" text="Cargando vinos..." />
<Loading size="lg" fullScreen />
```

**Características**:
- ✅ 3 tamaños diferentes
- ✅ Texto opcional
- ✅ Modo pantalla completa
- ✅ Animación suave
- ✅ Accesible (aria-label)

---

### ErrorMessage
**Ruta**: `components/shared/ui/ErrorMessage.tsx`

**Descripción**: Mensajes de error elegantes con variantes y botón de reintentar.

**Props**:
```typescript
interface ErrorMessageProps {
  title?: string;                    // Título del error
  message: string;                   // Mensaje principal
  onRetry?: () => void;             // Función de reintentar
  variant?: 'error' | 'warning' | 'info';
}
```

**Uso**:
```tsx
<ErrorMessage 
  title="Error al cargar vinos"
  message="No se pudo conectar con la base de datos"
  onRetry={() => refetch()}
  variant="error"
/>
```

**Características**:
- ✅ 3 variantes (error, warning, info)
- ✅ Botón de reintentar opcional
- ✅ Íconos diferentes según tipo
- ✅ Animación de entrada
- ✅ Diseño consistente

---

### EmptyState
**Ruta**: `components/shared/ui/EmptyState.tsx`

**Descripción**: Estados vacíos con iconos y acciones opcionales.

**Props**:
```typescript
interface EmptyStateProps {
  icon?: React.ReactNode;           // Ícono personalizado
  title: string;                     // Título
  description?: string;              // Descripción
  action?: React.ReactNode;         // Botón o acción
}
```

**Uso**:
```tsx
<EmptyState
  title="No se encontraron vinos"
  description="Intenta con otros términos de búsqueda"
  action={<button>Buscar de nuevo</button>}
/>
```

**Características**:
- ✅ Ícono personalizable
- ✅ Título y descripción
- ✅ Acción opcional
- ✅ Diseño centrado

---

### ErrorBoundary
**Ruta**: `components/shared/ui/ErrorBoundary.tsx`

**Descripción**: Captura errores de React y muestra UI de error.

**Props**:
```typescript
interface Props {
  children: ReactNode;
  fallback?: ReactNode;             // UI de error personalizada
}
```

**Uso**:
```tsx
<ErrorBoundary>
  <TuComponente />
</ErrorBoundary>
```

**Características**:
- ✅ Captura errores de React
- ✅ Logs automáticos
- ✅ UI de error elegante
- ✅ Botón de recargar
- ✅ Fallback personalizable

---

## 📄 Componentes de Página

### HomePage
**Ruta**: `app/page.tsx`

**Descripción**: Página principal con header, búsqueda y secciones.

**Componentes Incluidos**:
- SearchBar
- FeaturedWines
- SommelierPicks
- MonthlyPromo

**Características**:
- ✅ Header con título y subtítulo
- ✅ Barra de búsqueda
- ✅ Secciones de contenido
- ✅ Diseño responsive

---

### SearchPage
**Ruta**: `app/buscar/page.tsx`

**Descripción**: Página de resultados de búsqueda.

**Props**:
```typescript
interface SearchPageProps {
  searchParams: { q?: string };
}
```

**Características**:
- ✅ Búsqueda en múltiples campos
- ✅ Grid de resultados
- ✅ Estado sin resultados
- ✅ Contador de resultados
- ✅ Navegación de vuelta

---

### WineDetailPage
**Ruta**: `app/vinos/[id]/page.tsx`

**Descripción**: Página de detalle de un vino específico.

**Props**:
```typescript
interface Props {
  params: { id: string };
}
```

**Características**:
- ✅ Imagen flotante del vino
- ✅ Información completa
- ✅ Botón de regreso
- ✅ Diseño premium
- ✅ Animaciones

---

## 🏠 Componentes de Home

### FeaturedWines
**Ruta**: `components/home/FeaturedWines.tsx`

**Descripción**: Muestra vinos destacados como botones de navegación.

**Características**:
- ✅ Carga asíncrona con Suspense
- ✅ Loading spinner
- ✅ Máximo 5 vinos
- ✅ Botones clickeables
- ✅ Estado vacío

**Uso**:
```tsx
<FeaturedWines />
```

---

### SommelierPicks
**Ruta**: `components/home/SommelierPicks.tsx`

**Descripción**: Recomendaciones del sommelier con imágenes.

**Características**:
- ✅ Carga asíncrona con Suspense
- ✅ Loading spinner
- ✅ Máximo 2 vinos
- ✅ Imágenes de botellas
- ✅ Tarjetas elegantes

**Uso**:
```tsx
<SommelierPicks />
```

---

### MonthlyPromo
**Ruta**: `components/home/MonthlyPromo.tsx`

**Descripción**: Promoción del mes con diseño especial.

**Características**:
- ✅ Carga asíncrona con Suspense
- ✅ Loading spinner
- ✅ Un solo vino en promoción
- ✅ Cinta de "OFERTA"
- ✅ Diseño destacado

**Uso**:
```tsx
<MonthlyPromo />
```

---

## 🔧 Componentes Compartidos

### WineCard
**Ruta**: `components/shared/WineCard/WineCard.tsx`

**Descripción**: Tarjeta reutilizable para mostrar información de un vino.

**Props**:
```typescript
interface WineProps {
  wine: {
    id: string;
    name: string;
    winery: string;
    year: number;
    imageUrl: string;
    price: number;
  };
}
```

**Uso**:
```tsx
<WineCard wine={wineData} />
```

**Características**:
- ✅ Imagen optimizada
- ✅ Nombre y bodega
- ✅ Precio formateado
- ✅ Diseño consistente
- ✅ Tests incluidos

---

### SearchBar
**Ruta**: `components/shared/SearchBar/SearchBar.tsx`

**Descripción**: Barra de búsqueda con input y botón.

**Características**:
- ✅ Input con placeholder
- ✅ Botón de búsqueda
- ✅ Navegación a `/buscar`
- ✅ Diseño elegante
- ✅ Efectos de hover

**Uso**:
```tsx
<SearchBar />
```

---

## 🪝 Hooks Personalizados

### useAsync
**Ruta**: `lib/hooks/useAsync.ts`

**Descripción**: Hook para manejar operaciones asíncronas.

**Parámetros**:
```typescript
useAsync<T>(
  asyncFunction: (...args: unknown[]) => Promise<T>,
  immediate = false
)
```

**Retorna**:
```typescript
{
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: unknown[]) => Promise<void>;
  reset: () => void;
}
```

**Uso**:
```tsx
const { data, loading, error, execute } = useAsync(fetchWines);

useEffect(() => {
  execute();
}, []);
```

**Características**:
- ✅ Maneja loading, data y error
- ✅ Función execute para ejecutar
- ✅ Función reset para limpiar
- ✅ TypeScript con generics
- ✅ Ejecución inmediata opcional

---

## 📊 Resumen de Componentes

### Por Categoría
- **Componentes UI**: 4
- **Componentes de Página**: 3
- **Componentes de Home**: 3
- **Componentes Compartidos**: 2
- **Hooks**: 1

### Por Tipo
- **Client Components**: 3
- **Server Components**: 8
- **Shared Components**: 4

### Con Tests
- ✅ WineCard
- ⏳ Pendiente: Loading, ErrorMessage, EmptyState

---

## 🎯 Patrones de Diseño Utilizados

### 1. Component Composition
```tsx
<FeaturedWines>
  <Suspense fallback={<Loading />}>
    <FeaturedWinesList />
  </Suspense>
</FeaturedWines>
```

### 2. Controlled Components
```tsx
const [searchTerm, setSearchTerm] = useState('');
<input value={searchTerm} onChange={...} />
```

### 3. Error Boundaries
```tsx
<ErrorBoundary>
  <ComponenteQuePuedeFallar />
</ErrorBoundary>
```

### 4. Custom Hooks
```tsx
const { data, loading, error } = useAsync(fetchData);
```

---

## 📝 Convenciones de Nombres

### Componentes
- **PascalCase**: `WineCard`, `FeaturedWines`
- **Descriptivos**: Nombres que indican su propósito
- **Consistentes**: Mismo patrón en todo el proyecto

### Props
- **camelCase**: `imageUrl`, `isFeatured`
- **Booleanos**: Prefijo `is`, `has`, `should`
- **Eventos**: Prefijo `on` (`onClick`, `onChange`)

### Archivos
- **Componentes**: `PascalCase.tsx`
- **Hooks**: `camelCase.ts` con prefijo `use`
- **Utilidades**: `camelCase.ts`

---

## 🔄 Flujo de Datos

### Server Components → Client Components
```
app/page.tsx (Server)
  ↓
FeaturedWines.tsx (Server)
  ↓
Suspense (Client)
  ↓
Loading.tsx (Client)
```

### Client Components → API
```
SearchBar.tsx (Client)
  ↓
useRouter (Next.js)
  ↓
/buscar?q=term (Server)
  ↓
SearchPage.tsx (Server)
```

---

## 🎨 Estilos

### Tailwind CSS
- **Utility-first**: Clases de utilidad
- **Responsive**: Prefijos `md:`, `lg:`, `xl:`
- **Custom colors**: Paleta personalizada
- **Animations**: Transiciones suaves

### CSS Variables
```css
--color-primary-950: #1c261a;
--color-gold-400: #fcd34d;
--color-wine-700: #8c0032;
```

---

## 🧪 Testing

### Componentes con Tests
- ✅ WineCard

### Tests Pendientes
- ⏳ Loading
- ⏳ ErrorMessage
- ⏳ EmptyState
- ⏳ SearchBar
- ⏳ FeaturedWines
- ⏳ SommelierPicks

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://www.prisma.io/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

*Última actualización: Enero 2025*
