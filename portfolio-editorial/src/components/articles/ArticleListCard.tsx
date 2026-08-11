import CategoryBadge from "./CategoryBadge";

type ArticleListCardProps = {
  category: string;
  title: string;
  date: string;
  image: string;
  href: string;
};

export default function ArticleListCard({
  category,
  title,
  date,
  image,
  href,
}: ArticleListCardProps) {
  return (
    <article>
      <a href={href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <CategoryBadge name={category} />

          <h2 className="mt-2 font-heading text-2xl leading-[1.05] text-foreground">
            {title}
          </h2>

          <time className="mt-2 block text-sm text-text">{date}</time>
        </div>
      </a>
    </article>
  );
}