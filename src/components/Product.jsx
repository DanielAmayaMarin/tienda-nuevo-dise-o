import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../state";

const Product = ({item}) => {

  const { title, price, description, category, image, } = item

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <section className="w-full md:w-[260px] h-[420px] p-2 py-3 bg-bgscondary text-center items-center justify-center flex flex-col transform duration-500 hover:-translate-y-2 cursor-pointer">
      <div className="w-full h-1/2 flex justify-center items-center rounded-lg bg-primary">
        <img
          src={image}
          alt=""
          className=" w-full h-full"
        />
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-between  py-5">
        <h1 className="text-sm text-text-100 font-sans">{title}</h1>
        <h2 className="font-semibold text-text-100 font-sans">$ {price}</h2>
        <button
        onClick={() => {
          dispatch(addToCart({ item: { ...item, count } }));
          dispatch(add(item));

        }}
                type="submit"
                className="text-white bg-botton-100 hover:bg-botton-200 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center"
              >
                Add To Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
