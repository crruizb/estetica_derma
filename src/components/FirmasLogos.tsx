import SliderNumber from "./Slider"

const images = [
  {
    "src": "images/ballancer-platinum-logo-2.png",
    "alt": "Logo de Ballancer"
  },
  {
    "src": "images/nyxpert-logo.png",
    "alt": "Logo de nyxpert"
  },
  {
    "src": "images/logo-rollaction-nuevo.png",
    "alt": "Logo de System Roll Action"
  },
  {
    "src": "images/lucanni-logo.png",
    "alt": "Logo de Lucanni"
  },
  {
    "src": "images/thuya-logo.jfif",
    "alt": "Logo de Thuya"
  }
]

interface Props {
  title: string
}

const Component = ({title}: Props) => {
    return (
      <>
      <h2 className="my-8 sm:m-16 lg:mb-16 text-4xl sm:text-5xl font-thin tracking-tight leading-tight text-center">{title}</h2>
      <SliderNumber images={images} />
      
      </>
    )
}              
                   
export default Component

