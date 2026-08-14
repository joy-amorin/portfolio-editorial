import { categories } from "@/data/categories";

type CategoryBadgeProps = {
  category: keyof typeof categories;
};

export default function CategoryBadge({
  category,
}: CategoryBadgeProps) {
  const { name, color } = categories[category];

  return (
    <span
      className="text-sm uppercase tracking-wider"
      style={{ color }}
    >
      {name}
    </span>
  );
}