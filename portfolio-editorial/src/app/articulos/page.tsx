import ArticleListCard from "@/components/articles/ArticleListCard";

const articles = [
  {
    category: "Cultura",
    title: "Historias que nacen detrás de escena",
    date: "10 de agosto de 2026",
    image:"/articles-photo/cultura.jpeg",
    href: "/articulos/historias-detras-de-escena",
  },
  {
    category: "Cultura",
    title: "El trabajo detrás de una producción musical",
    date: "8 de agosto de 2026",
    image:"/articles-photo/candombe.jpeg",
    href: "/articulos/produccion-musical",
  },
  {
    category: "Entrevistas",
    title: "Conversaciones con artistas",
    date: "5 de agosto de 2026",
    image:"/articles-photo/mate.jpg",
    href: "/articulos/conversaciones-artistas",
  },
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="font-heading text-5xl leading-none text-foreground">
        Artículos
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleListCard key={article.href} {...article} />
        ))}
      </div>
    </main>
  );
}