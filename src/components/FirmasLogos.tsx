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
    <section className="w-full bg-warm-white py-14 pb-10 md:py-20 md:pb-12 lg:py-24 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-text text-center">
          {title}
        </h2>
        <div className="mt-8 md:mt-10">
          <Slider images={images} />
        </div>
      </div>
    </section>
  );
}
