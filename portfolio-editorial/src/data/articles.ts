import type { CategorySlug } from "./categories";

type Article = {
  slug: string;
  category: CategorySlug;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: "historias-detras-de-escena",
    category: "cultura",
    title: "Historias que nacen detrás de escena",
    excerpt:
      "Una mirada sobre las historias y experiencias que atraviesan la creación artística.",
    date: "10 de agosto de 2026",
    image: "/articles-photo/candombe.jpeg",
  },
  {
    slug: "produccion-musical",
    category: "cultura",
    title: "Patrimonio internacional",
    date: "8 de agosto de 2026",
    image: "/articles-photo/cultura.jpeg",
  },
  {
    slug: "conversaciones-artistas",
    category: "entrevistas",
    title: "Tradición",
    date: "5 de agosto de 2026",
    image: "/articles-photo/mate.jpg",
  },
];