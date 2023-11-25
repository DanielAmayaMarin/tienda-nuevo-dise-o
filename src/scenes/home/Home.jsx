import React from "react";
import Banner from "../../components/Banner";
import Informativo from "../../components/Informativo";
import ProductosFrecuentes from "../../components/ProductosFrecuentes";
import Servicios from "../../components/Servicios";



const Home = () => {

  return (
    <section className="h-full w-full flex justify-center">
      <div className="w-[84%] h-full">
        <Banner />
        <Informativo />
        <ProductosFrecuentes />
        <Servicios />
      </div>
    </section>
  );
};

export default Home;
