export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        <div>
          <h3 className="font-serif text-xl font-medium text-foreground">Omah Solo</h3>
          <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} Omah Solo Homestay. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
