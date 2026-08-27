import { notFound } from "next/navigation";
import ArticleGallery from "@/components/articles/ArticleGallery";
import { articles } from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">

      <h1 className="mt-2 font-heading text-4xl leading-[1.00] text-foreground md:text-5xl">
        {article.title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text">
        {article.excerpt}
      </p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-text">
        <p>
          Este es el contenido principal del artículo. Aquí comenzará el
          desarrollo de la historia, con los distintos elementos narrativos y
          periodísticos.
        </p>

        <p>
          Podemos incorporar diferentes párrafos manteniendo una medida de
          lectura cómoda y una jerarquía visual consistente con el resto del
          sitio.
        </p>

        <p>
          Más adelante este contenido será reemplazado por el contenido
          enriquecido proveniente del CMS.
        </p>
      </div>

      <ArticleGallery
        images={[
          "/articles-photo/1.jpg",
          "/articles-photo/2.jpg",
          "/articles-photo/3.jpg",
          "/articles-photo/4.jpg",
          "/articles-photo/5.jpg",
          "/articles-photo/6.jpg",
        ]}
      />
    </main>
  );
}