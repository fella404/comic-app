import Image from "next/image";
import { Hero } from "./components/hero";
import { PopularComics } from "./components/popular";
import { NewUpdates } from "./components/new_update";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="bg-muted/30 text-white min-h-screen pb-20">
      <Hero />
      <PopularComics />
      <NewUpdates />
      <div className="max-w-7xl mx-auto mt-16 h-40 bg-white rounded-xl flex items-center justify-center text-white/40">
        Advertisement Banner
      </div>
      <Footer />
    </main>
  );
}
