import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImagesCarousel({ images }) {
  return (
    <Carousel
      emulateTouch
      useKeyboardArrows
      showStatus={false}
      showArrows={false}
      width='80%'
    >
      {images?.map((image, index) => (
        <img src={image?.url} alt="device" key={index} />
      ))}
    </Carousel>
  );
}
