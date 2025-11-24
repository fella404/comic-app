export function ComicCard({ img, title, chapter }: any) {
  return (
    <div
      className="
      rounded-xl p-2 
      hover:scale-[1.02] transition cursor-pointer 
      shadow-md 
      bg-card 
      text-card-foreground
    "
    >
      <img
        src={img}
        className="rounded-lg w-full h-[220px] object-cover"
        alt={title}
      />

      <h3 className="mt-2 font-medium text-sm">{title}</h3>

      <p className="text-xs text-muted-foreground">Chapter {chapter}</p>
    </div>
  );
}
