import SliderNumber from "./Slider"

interface Image {
  src: string
  alt: string
}

interface Props {
  title: string
  images: Image[]
}

const Component = ({title, images}: Props) => {
    return (
      <>
      <h2 className="my-8 sm:m-16 lg:mb-16 text-4xl sm:text-5xl font-thin tracking-tight leading-tight text-center">{title}</h2>
      <SliderNumber images={images} />
      
      </>
    )
}              
                   
export default Component

