import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-[50vh] bg-bgscondary flex justify-center items-center">
      <section className="h-full w-[84%] flex justify-between flex-col">
        <div className="w-full h-[80%] flex justify-center items-center">
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-3">
            <h1 className="uppercase font-sans font-bold text-[20px] md:text-[32px] text-text-300">
              ecommerce
            </h1>
            <nav className="">
              <ul className="flex items-center font-sans justify-center text-text-100 text-sm md:text-base font-normal gap-6 cursor-pointer">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/nosotros"}>Quiénes somos</Link>
                <Link to={"/store"}>Tienda</Link>
              </ul>
            </nav>
            <p className="text-xs md:text-sm font-normal font-sans text-text-200 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repellat distinctio perferendis provident asperiores ut
              suscipit amet at necessitatibus labore, id iusto eos sit. Eius
              rerum enim ipsam error quis?
            </p>
          </div>
        </div>
        <div className="w-full h-[20%]">
          <div className="w-full h-full flex justify-end items-center gap-4 pr-4">
            <SlSocialGithub size={20} color="#2E266F" />
            <TiSocialLinkedin size={20} color="#2E266F" />
            <SlSocialFacebook size={20} color="#2E266F" />
            <SlSocialYoutube size={20} color="#2E266F" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
