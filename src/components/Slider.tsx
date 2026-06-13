interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

export default function Slider({ images }: Props) {
  const duplicated = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-warm-white">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-warm-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-warm-white to-transparent" />

      <div className="flex w-max animate-slide-logos hover:[animation-play-state:paused]">
        {duplicated.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="flex h-16 w-40 flex-shrink-0 items-center justify-center px-6"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="max-h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
