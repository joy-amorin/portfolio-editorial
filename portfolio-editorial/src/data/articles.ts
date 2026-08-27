type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  instagramUrl?: string;
  pdfUrl?: string;
};

export const articles: Article[] = [
  {
    slug: "historias-detras-de-escena",
    title: "Historias que nacen detrás de escena",
    excerpt:
      "Una mirada a las personas, los espacios y los procesos que hacen posible cada producción cultural.",
    date: "2026-08-10",
    image: "/articles-photo/candombe.jpeg",
    instagramUrl: "https://www.instagram.com/",
    pdfUrl: "https://example.com/articulo-historias-detras-de-escena.pdf",
  },

  {
    slug: "produccion-musical",
    title: "Patrimonio internacional",
    excerpt:
      "Un recorrido por una expresión cultural que trasciende fronteras y mantiene viva su identidad.",
    date: "2026-08-08",
    image: "/articles-photo/cultura.jpeg",
    instagramUrl: "https://www.instagram.com/",
    pdfUrl: "https://example.com/articulo-patrimonio-internacional.pdf",
  },

  {
    slug: "conversaciones-artistas",
    title: "Tradición",
    excerpt:
      "Historias y voces que recuperan prácticas, recuerdos y formas de entender nuestra cultura.",
    date: "2026-08-05",
    image: "/articles-photo/mate.jpg",
  },
];