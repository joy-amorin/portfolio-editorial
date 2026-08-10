import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  return (
    <nav aria-label="Navegación principal">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-text transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}