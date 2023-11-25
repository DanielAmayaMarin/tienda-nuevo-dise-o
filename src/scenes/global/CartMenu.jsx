import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../state";
import ItemCart from "../../components/ItemCart";

const CartMenu = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce((total, item) => {
    let newTotal = total + item.count * item.price;
    return newTotal;
  }, 0);

  return (
    <section
      className={`bg-[#00000066] fixed z-10 w-full h-[100vh] top-0 left-0 overflow-auto ${
        isCartOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed right-0 top-0 w-full md:w-[50%] lg:w-[30%] h-full bg-white">
        <div className="px-[30px] overflow-auto h-full">
          <div className="flex items-center justify-between h-[8%]">
            <h3 className="font-sans font-medium text-text-100 select-none">
              SHOPPING BAG ({cart.length})
            </h3>
            <button onClick={() => dispatch(setIsCartOpen({}))}>
              <IoMdClose size={21} color="#2E266F" />
            </button>
          </div>
          <div className="flex flex-col gap-y-2 h-[75%] md:h-[70%] lg:h-[70%] overflow-x-hidden border-b border-border/90">
            {cart.map((item) => (
              <ItemCart item={item} key={item.id} />
            ))}
          </div>
          <div className="my-5 mx-0 md:h-[15%] lg:h-[15%]">
            <div className="flex items-center justify-between my-4 mx-0">
              <h2 className="select-none">Subtotal</h2>
              <span className="select-none">$ {totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="bg-botton-100 text-white py-4 px-10 mt-5 hover:bg-botton-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto text-center"
              type="button"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartMenu;
