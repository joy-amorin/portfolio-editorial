type CategoryBadgeProps = {
  name: string;
  color?: string;
};

export default function CategoryBadge({
  name,
  color,
}: CategoryBadgeProps) {
  return (
    <span
      className="text-sm uppercase tracking-wider"
      style={color ? { color } : undefined}
    >
      {name}
    </span>
  );
}