import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const found = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (found) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.name === action.payload.name) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              name: action.payload.name,
              price: action.payload.price,
              quantity: 1,
            },
          ],
        };
      }
    }
    case REMOVE_FROM_CART: {
      return state;
    }
    default:
      return state;
  }
};
export default cartReducer;
