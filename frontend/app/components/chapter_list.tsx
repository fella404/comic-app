import Link from "next/link";

type ChapterListProps = {
  comicId: string | number;
};

export default function ChapterList({ comicId }: ChapterListProps) {
  const chapters = [
    { id: 1, title: "Chapter 1 — Awakening" },
    { id: 2, title: "Chapter 2 — First Trial" },
    { id: 3, title: "Chapter 3 — Shadows Rise" },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Chapters</h2>

      <div className="flex flex-col gap-4">
        {chapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/comic/${comicId}/reader/${ch.id}`}
            className="p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            {ch.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
