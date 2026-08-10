type FeaturedArticleProps = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
};

export default function FeaturedArticle({
  category,
  title,
  excerpt,
  date,
  image,
  href,
}: FeaturedArticleProps) {
  return (
    <article>
      <a href={href} className="group block">
        <div>
          <span className="text-sm uppercase tracking-wider text-accent">
            {category}
          </span>

          <h1 className="mt-2 font-heading text-5xl leading-[1.00] text-foreground md:text-6xl">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-text">
            {excerpt}
          </p>

          <time className="mt-3 block text-sm text-text">{date}</time>
        </div>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
    </article>
  );
}