export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-10 text-sm bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <span className="text-primary text-xl">★</span> IN-KOMIK
        </div>

        <div className="flex gap-6 mt-4 md:mt-0 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">
            About Us
          </a>
          <a href="#" className="hover:text-foreground transition">
            Contact
          </a>
          <a href="#" className="hover:text-foreground transition">
            Privacy Policy
          </a>
        </div>

        <p className="text-muted-foreground mt-4 md:mt-0">
          © 2024 IN-KOMIK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
