import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

interface Image {
  path: string;
  alt: string;
}

interface Images {
  images: Image[];
  className?: string;
}

export function CarouselWrapper({ images, className = "h-96 xl:h-[48rem]" }: Images) {
  return (
    <Carousel className={className}>
      <CarouselContent className={className}>
        {
          images.map((image) => (
            <CarouselItem key={image.path} className={className}>
              <div className="h-full">
                <img className="w-full h-full object-cover" src={image.path} alt={image.alt} />
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}
