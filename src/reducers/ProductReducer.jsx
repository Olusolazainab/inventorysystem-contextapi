import { v4 as uuidv4 } from 'uuid';

export const ProductReducer = (state, action) => {
  switch(action.type){
      case 'ADD_PRODUCT':
          return [...state, {
              name: action.product.name,
              quantity: action.product.quantity,
              id: uuidv4()
          }]
          case 'REMOVE_PRODUCT':
              return state.filter(product => product.id !== action.id);
              default:
                  return state
  }
}

