import { FaKitchenSet } from "react-icons/fa6";
import vector from "../assets/Vector.svg";

const Servicios = () => {
  return (
    <section className="h-full w-full flex flex-col">
      <div className="h-full md:h-[20vh] w-full mt-10 flex flex-col lg:flex-row">
        <div className="h-full w-full lg:w-[40%]">
          <div className="border-l-[1rem] border-[#FE043C] h-full w-full flex flex-col justify-center px-[10%]">
            <h2 className="font-sans text-text-100 text-4xl font-normal ">
              Nuestros servicios
            </h2>
          </div>
        </div>
        <div className="h-full w-full mt-4 md:mt-0 lg:w-[60%]">
          <div className="h-full w-full flex flex-col justify-center items-start px-[10%]">
            <h3 className="font-sans text-text-200 text-sm font-normal ">
              La cocina es un lenguaje mediante el cual se puede expresar
              armonía, felicidad, belleza, poesía, complejidad, magia, humor,
              provocación, cultura.
            </h3>
          </div>
        </div>
      </div>
      <div className="h-full lg:h-[64vh] w-full my-20 flex flex-col lg:flex-row">
        <div className="h-[427px] md:h-[527px] w-full lg:w-1/2 flex flex-col">
          <div className="w-full h-full md:h-1/2 flex">
            <div className="h-full bg-bgscondary w-1/2 flex justify-center items-center">
              <FaKitchenSet color="#FE043C" size={120} />
            </div>
            <div className="h-full w-1/2 flex flex-col p-3 gap-3 justify-center text-center items-center">
              <h2 className="font-medium font-sans text-xl capitalize text-text-100">
                advanced table booking
              </h2>
              <p className="font-medium text-text-200  font-sans text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-full md:h-1/2 flex">
            <div className="h-full w-1/2 flex flex-col p-3 gap-3 justify-center text-center items-center">
              <h2 className="font-medium font-sans text-xl capitalize text-text-100">
                advanced table booking
              </h2>
              <p className="font-medium text-text-200  font-sans text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <div className="h-full w-1/2 bg-bgscondary flex justify-center items-center">
              <FaKitchenSet color="#FE043C" size={120} />
            </div>
          </div>
        </div>
        <div className="h-[427px] md:h-[527px] mt-5 lg:mt-0  w-full lg:w-1/2 lg:pl-20">
          <div className="relative w-full h-full bg-bgscondary flex flex-col gap-4 md:gap-2 justify-center items-center">
            <img
              className="absolute h-1/2 z-0 rotate-45"
              src={vector}
              alt=""
              srcset=""
            />
            <FaKitchenSet
              className="z-10 h-1/3 md:h-[80%]"
              color="#FE043C"
              size={190}
            />
            <h2 className="z-10 font-medium font-sans text-xl capitalize text-text-100">
              advanced table booking
            </h2>
            <p className="z-10 font-medium text-center text-text-200 font-sans text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
