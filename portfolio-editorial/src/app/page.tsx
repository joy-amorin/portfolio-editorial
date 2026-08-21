import FeaturedArticle from "@/components/articles/FeaturedArticle";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

export default function Home() {
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <FeaturedArticle
          title={featuredArticle.title}
          excerpt={featuredArticle.excerpt ?? ""}
          date={featuredArticle.date}
          image={featuredArticle.image}
          href={`/articulos/${featuredArticle.slug}`}
        />

        <div className="flex flex-col gap-10">
          {secondaryArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              date={article.date}
              image={article.image}
              href={`/articulos/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}