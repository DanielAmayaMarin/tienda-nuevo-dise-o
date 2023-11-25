import img from "../assets/coco.png";
import CarouselProductos from "./CarouselProductos";
import Product from "./Product";
import ProductoFrecuenteCarousel from "./ProductoFrecuenteCarousel";

const ProductosFrecuentes = () => {
  return (
    <section className="h-full lg:h-[70vh] w-full mt-16 flex">
      <div className="h-full w-full flex flex-col">
        <div className="w-full h-[20%]">
          <div className="w-full h-full flex justify-center gap-3 flex-col items-center">
            <h1 className="uppercase font-sans font-bold text-[32px] text-text-100">
              Productos frecuentes
            </h1>
            <p className="text-sm font-normal font-sans text-text-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-full w-full">
            <CarouselProductos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosFrecuentes;
