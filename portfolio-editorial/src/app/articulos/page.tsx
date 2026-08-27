"use client";

import { useState } from "react";
import ArticleListCard from "@/components/articles/ArticleListCard";
import { articles } from "@/data/articles";

const ARTICLES_PER_PAGE = 6;

export default function ArticlesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);

  const startIndex = currentPage * ARTICLES_PER_PAGE;
  const visibleArticles = sortedArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleListCard
            key={article.slug}
            title={article.title}
            date={article.date}
            image={article.image}
            href={`/articulos/${article.slug}`}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-end gap-4">
          {currentPage > 0 && (
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              aria-label="Ver artículos anteriores"
              className="text-2xl font-extra-bold text-accent transition-transform duration-300 hover:-translate-x-1"
            >
              ←
            </button>
          )}

          {currentPage < totalPages - 1 && (
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              aria-label="Ver más artículos"
              className="text-2xl font-extra-bold text-accent transition-transform duration-300 hover:translate-x-1"
            >
              →
            </button>
          )}
        </div>
      )}
    </main>
  );
}