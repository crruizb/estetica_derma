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
  height: string;
}

export function CarouselWrapper({images, height} : Images) {
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
                <img className={`w-full ${height}`} src={image.path} alt={image.alt} />
              </div>
              
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}