import { ComicCard } from "./comic_card";
import { SectionTitle } from "./section_title";

export function NewUpdates() {
  const list = [
    { img: "/n1.webp", title: "Naruto", chapter: 501 },
    { img: "/n2.webp", title: "Bleach", chapter: 687 },
    { img: "/n3.webp", title: "One Piece", chapter: 1080 },
    { img: "/n4.webp", title: "Dragon Ball Super", chapter: 93 },
    { img: "/n5.webp", title: "Demon Slayer", chapter: 205 },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <SectionTitle title="New Updates" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {list.map((item, i) => (
          <ComicCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
