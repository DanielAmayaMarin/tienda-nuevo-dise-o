import img from "../assets/home.png";
import vector from "../assets/Vector.svg";
import { IoLocationOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative h-[47vh] lg:h-[70vh] w-full flex ">
          <div className="h-full lg:w-1/2">
            <div className="relative h-full w-full md:pl-4 lg:pl-0 md:text-left flex flex-col gap-6 items-center md:justify-center">
              <h1 className="z-10 text-5xl md:text-7xl font-black text-text-100 font-sans opacity-[10%]">
                Alimentación Colombiana
              </h1>
              <p className="z-10 text-2xl md:text-4xl font-bold text-text-100 font-sans">
                Descubre tus antojos con nuestros dulces deliciosos
              </p>
            </div>
          </div>
          <div className="h-full hidden lg:block w-1/2">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                className="absolute h-1/2 z-0 rotate-45"
                src={vector}
                alt=""
                srcset=""
              />
              <img className="z-10 h-[80%]" src={img} alt="" srcset="" />
            </div>
          </div>
          <button
            className="py-3 px-6 bg-botton-100 text-white text-xl absolute bottom-[20%] lg:bottom-[10%]  md:bottom-[9%] -left-[1.8rem] md:-left-[3.5rem] lg:-left-[6.8rem] rounded-r-xl flex gap-3 items-center"
            type="button"
          >
            <IoLocationOutline />
            Colombia
          </button>
        </div>
  )
}

export default Banner
