type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: "historias-detras-de-escena",
    title: "Historias que nacen detrás de escena",
    date: "2026-08-10",
    image: "/articles-photo/candombe.jpeg",
  },
  {
    slug: "produccion-musical",
    title: "Patrimonio internacional",
    date: "2026-08-08",
    image: "/articles-photo/cultura.jpeg",
  },
  {
    slug: "conversaciones-artistas",
    title: "Tradición",
    date: "2026-08-05",
    image: "/articles-photo/mate.jpg",
  },
];