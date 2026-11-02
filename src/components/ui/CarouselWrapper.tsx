import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
interface Image {
  path: string;
  alt: string;
  width: number;
  height: number;
}

interface Images {
  images: Image[];
  className?: string;
  priority?: boolean;
  autoplay?: boolean;
}

export function CarouselWrapper({ images, className = "h-96 xl:h-[48rem]", priority = false, autoplay = false }: Images) {
  return (
    <Carousel
      className={className}
      opts={{ loop: autoplay }}
      plugins={autoplay ? [Autoplay({ delay: 6000, stopOnInteraction: false })] : undefined}
    >
      <CarouselContent className={className}>
        {
          images.map((image) => (
            <CarouselItem key={image.path} className={className}>
              <div className="h-full">
                <img
                  className="w-full h-full object-cover"
                  src={image.path}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading={priority ? "eager" : "lazy"}
                  decoding={priority ? "auto" : "async"}
                />
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}
