import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/coco.png";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const ProductoFrecuenteCarousel = () => {
  return (
    <Carousel
      width="100%"
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <GrCaretPrevious sx={{ fontSize: 40 }} />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <GrCaretNext sx={{ fontSize: 40 }} />
        </button>
      )}
    >
    
    </Carousel>
  );
};

export default ProductoFrecuenteCarousel;
