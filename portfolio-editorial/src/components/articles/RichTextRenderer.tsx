import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

type RichTextRendererProps = {
  content: Document;
};

export default function RichTextRenderer({
  content,
}: RichTextRendererProps) {
  return (
    <div className="max-w-2xl space-y-6 text-base leading-relaxed text-text">
      {documentToReactComponents(content)}
    </div>
  );
}