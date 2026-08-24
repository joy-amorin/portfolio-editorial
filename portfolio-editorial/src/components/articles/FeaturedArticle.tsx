import { formatDate } from "@/lib/FormatDate";

type FeaturedArticleProps = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
};

export default function FeaturedArticle({
  title,
  date,
  image,
  href,
}: FeaturedArticleProps) {
  return (
    <article>
      <a href={href} className="group block">
        <div>
          <h1 className="font-heading text-5xl leading-[1.00] text-foreground md:text-6xl">
            {title}
          </h1>

         
        </div>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />  
        </div>
         <time className="mt-3 block text-sm text-text">{formatDate(date)}</time>
      </a>
    </article>
  );
}