import { GET_PRODUCTS } from '../types';

const products = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        result: action.payload
      }   
    
    default:
      return state
  }
}

export default products;