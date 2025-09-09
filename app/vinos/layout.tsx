
export default function VinosLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {/* Este div crea el fondo fijo que estará detrás de todo */}
        <div
          className="fixed top-0 left-0 w-screen h-screen -z-10"
          style={{
            backgroundImage: `url('/images/bg-image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* "children" será nuestra página de detalle (page.tsx) */}
        {children}
      </div>
    );
  }
  