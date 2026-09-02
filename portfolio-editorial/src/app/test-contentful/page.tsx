import { getArticles } from "@/lib/getArticles";

export default async function TestContentfulPage() {
  const articles = await getArticles();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Prueba Contentful</h1>

      <p className="mt-4">
        Artículos encontrados: {articles.length}
      </p>

      <pre className="mt-8 overflow-auto">
        {JSON.stringify(articles, null, 2)}
      </pre>
    </main>
  );
}