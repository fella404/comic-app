import ReaderImage from "@/app/components/reader_image";

export default function ReaderPage({
  params,
}: {
  params: { chapterId: string };
}) {
  const { chapterId } = params;

  const images = [
    "/demo/chapter1-1.jpg",
    "/demo/chapter1-2.jpg",
    "/demo/chapter1-3.jpg",
  ];

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      {images.map((src, index) => (
        <ReaderImage key={index} src={src} />
      ))}
    </div>
  );
}
