import { formatDate } from "@/lib/FormatDate";

type ArticleListCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export default function ArticleListCard({
  title,
  date,
  image,
  href,
}: ArticleListCardProps) {
  return (
    <article>
      <a
        href={href}
        className="group block overflow-hidden rounded-sm border border-border bg-card transition-colors duration-300 hover:border-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="font-heading text-2xl leading-[1.05] text-foreground">
            {title}
          </h2>

          <div className="mt-5 flex items-center justify-between">
            <time className="text-sm text-text">{formatDate(date)}</time>

            <span
              className="text-xl text-accent transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}