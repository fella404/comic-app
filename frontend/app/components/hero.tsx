import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto mt-10 rounded-2xl overflow-hidden">
      <div
        className="h-[340px] bg-center p-10 flex flex-col justify-center items-center bg-cover"
        style={{ backgroundImage: "url('/banner.webp')" }}
      >
        <h1 className="text-4xl font-bold text-foreground drop-shadow-lg max-w-xl text-center">
          Baca Komik Digital Tanpa Ribet
        </h1>

        <p className="text-muted-foreground mt-2 max-w-lg text-center">
          Temukan dan baca ribuan judul komik populer dari berbagai genre di
          mana saja, kapan saja.
        </p>

        <div className="flex items-center gap-3 mt-6 max-w-md w-full bg-background/70 backdrop-blur-md p-2 rounded-xl border border-border">
          <Input
            placeholder="Cari judul komik..."
            className="bg-transparent border-none"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
