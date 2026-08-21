type ArticleCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export default function ArticleCard({
  title,
  date,
  image,
  href,
}: ArticleCardProps) {
  return (
    <article>
      <a href={href} className="group block">
        <h2 className="font-heading text-2xl leading-[1.05] text-foreground">
          {title}
        </h2>

        <div className="relative mt-4 aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <time className="mt-2 block text-sm text-text">{date}</time>
      </a>
    </article>
  );
}