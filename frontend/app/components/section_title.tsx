export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-lg font-semibold mt-14 mb-4 px-1 text-foreground">
      {title}
    </h2>
  );
}
