import ChapterList from "@/app/components/chapter_list";
import Image from "next/image";

export default function ComicDetailPage({
  params,
}: {
  params: { comicId: string };
}) {
  const { comicId } = params;

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        <Image
          src="/demo/comic_cover.jpg"
          alt="cover"
          width={500}
          height={700}
          className="rounded-xl shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">Comic Title</h1>
          <p className="text-gray-500 mt-2">Author Name — Action • Fantasy</p>

          <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg">
            Start Reading
          </button>
        </div>
      </div>

      <ChapterList comicId={comicId} />
    </div>
  );
}
