import Image from "next/image";

type DetailMoodImageProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function DetailMoodImage({
  imageSrc,
  imageAlt = "",
}: DetailMoodImageProps) {
  if (!imageSrc) {
    return null;
  }

  return (
    <div className="detail-mood-image">
      <Image
        alt={imageAlt}
        className="object-cover"
        fill
        sizes="(max-width: 1024px) 100vw, 88rem"
        src={imageSrc}
      />
    </div>
  );
}
