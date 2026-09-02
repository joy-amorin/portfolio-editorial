import { contentfulClient } from "./contentful";

export async function getArticles() {
  const response = await contentfulClient.getEntries({
    content_type: "article",
  });

  return response.items;
}