import {ajax} from '../tools/ajax';

export const getProductsFrecuentes = async () => {
    const opiopns ={
        method:"GET",
        url:"https://fakestoreapi.com/products?limit=10"
      };
    return await ajax(opiopns);
};