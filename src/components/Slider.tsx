interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  images: Image[];
}

export default function Slider({ images }: Props) {
  const duplicated = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden border-y border-brand-border bg-warm-white py-6 md:py-8">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-warm-white via-warm-white/80 to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-warm-white via-warm-white/80 to-transparent md:w-28" />

      <div className="flex w-max animate-slide-logos hover:[animation-play-state:paused]">
        {duplicated.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="flex h-20 w-44 flex-shrink-0 items-center justify-center px-8 md:h-24 md:w-52 md:px-10"
          >
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              className="max-h-10 w-auto object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:max-h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
