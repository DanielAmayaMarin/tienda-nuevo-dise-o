import Product from "../../components/Product";
import Carousel from "../../components/Carousel";
import { useEffect } from "react";
import { getAllProducts } from "../../services/allProducts";
import { useState } from "react";


const ProducList = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    (async () => {
      setProducts(await getAllProducts());
      
    })();
  }, []);

  return (
    <section className="h-full w-full flex justify-center">
      <section className="w-[84%] h-full mb-10">
        <Carousel products={products} />
        <section className="md:pl-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {
            products.map((producto) => {
              const {id} = producto
              return (
                <Product key={id} item={producto} />
              )
            })
          }
        </section>
      </section>
    </section>
  );
};

export default ProducList;
