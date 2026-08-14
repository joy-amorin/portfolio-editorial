import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-heading text-2xl text-foreground">
        LOGO
        </span>

        <Navigation />
      </div>
    </header>
  );
}