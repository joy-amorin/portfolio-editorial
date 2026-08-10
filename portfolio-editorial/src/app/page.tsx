import FeaturedArticle from "@/components/articles/FeaturedArticle";
import ArticleCard from "@/components/articles/ArticleCard";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
     <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <FeaturedArticle
          category="Cultura"
          title="Historias que nacen detrás de escena"
           excerpt="Una mirada sobre las historias y experiencias que atraviesan la creación artística."
          date="10 de agosto de 2026"
          image="/articles-photo/candombe.jpeg"
          href="/articulos/historias-detras-de-escena"
        />

        <div className="flex flex-col gap-10">
          <ArticleCard
            category="Cultura"
            title="El trabajo detrás de una producción musical"
            date="8 de agosto de 2026"
            image="/articles-photo/cultura.jpeg"
            href="/articulos/produccion-musical"
          />

          <ArticleCard
            category="Entrevistas"
            title="Conversaciones con artistas"
            date="5 de agosto de 2026"
            image="/articles-photo/mate.jpg"
            href="/articulos/conversaciones-artistas"
          />
        </div>
      </div>
    </div>
  );
}