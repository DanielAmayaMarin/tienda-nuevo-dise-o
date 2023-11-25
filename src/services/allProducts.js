import {ajax} from '../tools/ajax';

export const getAllProducts = async () => {
    const opiopns ={
        method:"GET",
        url:"https://fakestoreapi.com/products"
      };
    return await ajax(opiopns);
};