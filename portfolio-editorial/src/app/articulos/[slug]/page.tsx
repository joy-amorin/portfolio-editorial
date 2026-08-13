import CategoryBadge from "@/components/articles/CategoryBadge";
import ArticleGallery from "@/components/articles/ArticleGallery";

export default function ArticlePage() {
  const category = "Cultura";

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <CategoryBadge name={category} />
        <h1 className="mt-2 font-heading text-5xl leading-[1.00] text-foreground md:text-6xl">
          Título del artículo
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text">
          Una breve introducción al artículo que resume su contenido y anticipa la
          historia que se desarrolla a continuación.
        </p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden">
          <img
            src="/articles-photo/candombe.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-text">
          <p>
            Este es el contenido principal del artículo. Aquí comenzará el desarrollo
            de la historia, con los distintos elementos narrativos y periodísticos.
          </p>

          <p>
            Podemos incorporar diferentes párrafos manteniendo una medida de lectura
            cómoda y una jerarquía visual consistente con el resto del sitio.
          </p>

          <p>
            Más adelante este contenido será reemplazado por el contenido enriquecido
            proveniente del CMS.
          </p>
        </div>
        <ArticleGallery 
        images={[
          "/articles-photo/cultura.jpeg",
          "/articles-photo/candombe.jpeg",
          "/articles-photo/mate.jpg",
          
        ]} />
    </main>
  );
}