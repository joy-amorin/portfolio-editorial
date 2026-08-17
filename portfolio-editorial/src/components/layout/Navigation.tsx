"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Artículos", href: "/articulos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                    isActive
                       ? "text-text border-b border-[var(--accent)] pb-1"
                      : "text-text hover:text-accent"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}