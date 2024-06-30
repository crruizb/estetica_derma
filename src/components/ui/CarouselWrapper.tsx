import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

interface Image {
  path: string;
  alt: string;
}

interface Images {
  images: Image[];
}

export function CarouselWrapper({images} : Images) {
  return (
    <Carousel 
      opts={{
        align: "start",
        loop: true,
      }} 
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}>
      <CarouselContent>
        {
          images.map((image) => (
            <CarouselItem key={image.path}>
              <div className="h-[48rem]">
                <img className="bg-blue-600 w-full h-full" src={image.path} alt={image.alt} />
              </div>
              
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}