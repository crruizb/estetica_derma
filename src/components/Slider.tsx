import { motion } from 'framer-motion';

// Define the array of slides with numbers
const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
];

interface Image {
  src: string
  alt: string
}

interface Props {
  images: Image[]
}

const SliderDesign2 = ({images}: Props) => {
  const duplicatedSlides = [...images, ...images, ];

  return (
      <div className="relative h-full overflow-hidden py-12 bg-white mx-auto w-[100%] lg:w-[60%]">
          <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

          <motion.div
              className="flex gap-16"
              animate={{
                  x: ['0%', '-175%'],
                  transition: {
                      ease: 'linear',
                      duration: 15,
                      repeat: Infinity,
                  }
              }}
          >
              {duplicatedSlides.map((img, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                      <div className="flex items-center justify-center h-full">
                          <img src={img.src} alt={img.alt} />
                      </div>
                  </div>
              ))}
          </motion.div>
      </div>
  );
};

export default SliderDesign2;