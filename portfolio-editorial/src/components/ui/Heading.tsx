type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
};

export default function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {
  const styles = "font-heading text-foreground";

  if (level === 1) {
    return (
      <h1 className={`text-5xl leading-tight ${styles} ${className}`}>
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 className={`text-4xl leading-tight ${styles} ${className}`}>
        {children}
      </h2>
    );
  }

  return (
    <h3 className={`text-3xl leading-tight ${styles} ${className}`}>
      {children}
    </h3>
  );
}