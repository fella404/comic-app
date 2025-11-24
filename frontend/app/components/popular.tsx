import { ComicCard } from "./comic_card";
import { SectionTitle } from "./section_title";

export function PopularComics() {
  const list = [
    { img: "/c1.webp", title: "One Punch Man", chapter: 198 },
    { img: "/c2.webp", title: "Solo Leveling", chapter: 179 },
    { img: "/c3.webp", title: "Jujutsu Kaisen", chapter: 221 },
    { img: "/c4.webp", title: "Attack on Titan", chapter: 139 },
    { img: "/c5.webp", title: "My Hero Academia", chapter: 388 },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <SectionTitle title="Popular Comics" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {list.map((item, i) => (
          <ComicCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
