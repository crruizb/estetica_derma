import Slider from "./Slider";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  title: string;
  images: Image[];
}

export default function FirmasLogos({ title, images }: Props) {
  return (
    <section className="w-full bg-warm-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-text text-center">
          {title}
        </h2>
        <div className="mt-10">
          <Slider images={images} />
        </div>
      </div>
    </section>
  );
}
