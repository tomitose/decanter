import FeaturedWines from "@/components/home/FeaturedWines";
import MonthlyPromo from "@/components/home/MonthlyPromo";
import SommelierPicks from "@/components/home/SommelierPicks";

export default async function HomePage() {
  return (
    <div
      className="min-h-screen p-6 flex flex-col items-center"
      suppressHydrationWarning
    >
      <header className="text-center pt-10 pb-8 w-full">
        <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 mb-2 ">
          Bienvenidos a Decanter
        </h1>
        <p className="text-gray-400 font-sans">
          Descubre tu próximo vino favorito
        </p>
      </header>

      <FeaturedWines />
      <SommelierPicks />
      <MonthlyPromo />

    </div>
  );
}
