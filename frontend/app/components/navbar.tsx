import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          <span className="text-blue-500 text-xl">★</span> IN-KOMIK
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/browse" className="hover:text-blue-500 transition">
            Browse
          </Link>
          <Link href="/genres" className="hover:text-blue-500 transition">
            Genres
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="secondary" className="px-5">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="px-5 bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
