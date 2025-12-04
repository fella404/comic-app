import Image from "next/image";

export default function ReaderImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="chapter"
      width={1000}
      height={1600}
      className="rounded-lg shadow"
    />
  );
}
