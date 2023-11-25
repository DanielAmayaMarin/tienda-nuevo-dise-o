import { IoMdClose, IoIosRemove, IoMdAdd } from "react-icons/io";
import { decreaseCount, increaseCount, removeFromCart } from "../state";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const ItemCart = ({ item }) => {
  const { title, price, description, category, image } = item;

  const dispatch = useDispatch();

  return (
    <section className=" bg-transparent">
      <div className="flex justify-between items-center p-4 h-[8rem] w-full">
        <div className="h-full w-1/3">
          <img className="w-[6rem] h-[6rem] select-none" src={image} alt="" />
        </div>
        <div className="h-full w-2/3 pl-3">
          <div className="w-full h-full">
            <div className="flex  items-start px-3 justify-between w-full h-[50%]">
              <p className="font-medium font-sans text-sm text-text-100 select-none">
                {title.substring(0, 21) + " ..."}
              </p>
              {/*<IoMdClose
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                className="pt-1.5 cursor-pointer"
                size={20}
                color="#2E266F"
  />*/}
            </div>
            <div className="flex items-center justify-between w-full h-[50%]">
              <div className="flex flex-1 pl-3 max-w-[100px] items-center h-full borde text-slate-900 font-medium">
                <p className="font-sans font-bold text-text-100 select-none">
                  $ {price}
                </p>
              </div>
              <div className="flex flex-1 max-w-[100px] items-center h-full borde text-slate-900 font-medium">
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  {item.count === 1 ? (
                    <MdDelete
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    />
                  ) : (
                    <IoIosRemove
                      onClick={() => dispatch(decreaseCount({ id: item.id }))}
                    />
                  )}
                </div>
                <div className="h-full flex justify-center items-center px-2 select-none">
                  {item.count}
                </div>
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  <IoMdAdd
                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCart;
