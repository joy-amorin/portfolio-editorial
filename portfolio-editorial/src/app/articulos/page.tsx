import ArticleListCard from "@/components/articles/ArticleListCard";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleListCard
            key={article.slug}
            category={article.category}
            title={article.title}
            date={article.date}
            image={article.image}
            href={`/articulos/${article.slug}`}
          />
        ))}
      </div>
    </main>
  );
}