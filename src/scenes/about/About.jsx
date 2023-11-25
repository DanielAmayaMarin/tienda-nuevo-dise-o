import img from "../../assets/about.jpeg";
import historia from "../../assets/historia.avif";
import equipo from "../../assets/equipo.avif";
import filosofia from "../../assets/filosofia.jpeg";

const About = () => {
  return (
    <section className="h-full w-full mb-20 flex justify-center">
      <div className="w-[84%] h-full">
        <div className="h-[40vh] w-full flex">
          <div className="relative w-full h-full flex items-center justify-center flex-col">
            <img
              className="absolute w-full h-full object-cover z-0"
              src={img}
              alt=""
              srcset=""
            />
            <h1 className="z-10 uppercase font-sans font-bold text-[32px] text-white">
              Nosotros
            </h1>
            <p className="z-10 uppercase font-sans font-semibold text-xl text-white">
              Lo que somos
            </p>
          </div>
        </div>
        <div className="h-[10vh] w-full flex justify-start items-center bg-bgscondary">
          <nav className="w-full h-full">
            <ul className="w-full h-full flex ml-2 justify-start items-center gap-1">
              <li className="font-sans text-sm md:text-base cursor-pointer text-text-100 font-semibold hover:bg-primary p-2 md:p-4">
                Historia
              </li>
              <li className="font-sans text-sm md:text-base  cursor-pointer text-text-100 font-semibold hover:bg-primary p-2 md:p-4">
                Filosofia
              </li>
              <li className="font-sans text-sm md:text-base  cursor-pointer text-text-100 font-semibold hover:bg-primary p-2 md:p-4">
                Transformación
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[90vh] w-full flex flex-col">
          <div className="relative w-full h-[50%] flex items-center justify-center flex-col duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              className="absolute w-full h-full object-cover z-0"
              src={historia}
              alt=""
              srcset=""
            />
            <h2 className="z-10 uppercase font-sans font-bold text-[22px] md:text-[32px] text-white">
              Nosotros
            </h2>
          </div>
          <div className="w-full h-[50%] flex flex-col lg:flex-row ">
            <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center flex-col duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img
                className="absolute w-full h-full object-cover z-0"
                src={filosofia}
                alt=""
                srcset=""
              />
              <h2 className="z-10 uppercase font-sans font-bold text-[22px] md:text-[32px] text-white">
                Filosofia
              </h2>
            </div>
            <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center flex-col duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img
                className="absolute w-full h-full object-cover z-0"
                src={equipo}
                alt=""
                srcset=""
              />
              <h2 className="z-10 uppercase font-sans font-bold text-[22px] md:text-[32px] text-white">
                Transformación
              </h2>
            </div>
          </div>
        </div>
        <div className="h-[30vh] w-full flex justify-center items-center bg-bgscondary">
          <div className="h-full w-[90%] md:w-[70%] flex items-center text-center ">
          <h2 className="uppercase font-sans font-bold text-sm md:text-2xl text-text-100">
            Naturalmente trabajando, artesanalmente produciendo, saludablemente
            complaciendo.
          </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
