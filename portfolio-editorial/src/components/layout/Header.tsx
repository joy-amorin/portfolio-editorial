import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-6">
        <span className="font-heading text-2xl text-foreground">
          Portfolio Editorial
        </span>

        <Navigation />
      </div>
    </header>
  );
}