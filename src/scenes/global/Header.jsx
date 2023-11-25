import { LuUser2 } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../state";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);

  return (
    <header className="w-full h-[108px] flex justify-center items-center">
      <div className="h-full w-full lg:w-[84%] flex justify-between">
        <div className="h-full w-1/2 lg:w-[20%] font-bold text-[20px] md:text-[32px] flex items-center justify-center">
          <h1 className="uppercase font-sans text-text-300">ecommerce</h1>
        </div>
        <nav className="hidden lg:block h-full w-[65%]">
          <ul className="h-full w-full flex items-center font-sans justify-center text-text-100 text-base font-normal gap-6 cursor-pointer">
            <NavLink to={"/"}>Inicio</NavLink>
            <NavLink to={"/nosotros"}>Quiénes somos</NavLink>
            <NavLink to={"/store"}>Tienda</NavLink>
          </ul>
        </nav>
        <div className="h-full w-1/2 lg:w-[15%] flex pr-[5%] lg:pr-0 justify-end items-center gap-3">
          <button onClick={() => dispatch(setIsCartOpen({}))}>
            <FaShoppingCart
              className="cursor-pointer"
              size={21}
              color="#2E266F"
            />
          </button>
          {login ? (
            <>
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden bg-white rounded-full">
                <LuUser2 className="absolute w-12 h-8 text-text-100 -left-1" />
              </div>
              <div className="flex items-center justify-end gap-1 ">
                <span className="text-base font-normal text-text-100 ">
                  User
                </span>
                <IoMdArrowDropdown className="w-[10px] h-[10px] text-text-100" />
              </div>
            </>
          ):
          (
            <Link to={"/auth"}
                type="submit"
                className="text-white bg-botton-100 hover:bg-botton-200 font-medium rounded-lg text-sm sm:w-auto p-1.5 text-center"
              >
                Login
              </Link>
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
