import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../actions/cartActions";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let new_state = state;

      const found = state.cart.find(
        (item) => item.name === action.payload.name
      );

      if (found) {
        new_state = {
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
        new_state = {
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
      localStorage.setItem("cart", JSON.stringify(new_state.cart));
      return new_state;
    }

    case REMOVE_FROM_CART: {
      let new_state = state;

      const found = state.cart.find(
        (item) => item.name === action.payload.name
      );

      if (found && found.quantity > 1) {
        new_state = {
          ...state,
          cart: state.cart.map((item) => {
            if (item.name === action.payload.name) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          }),
        };
      } else {
        new_state = {
          ...state,
          cart: state.cart.filter((item) => item.name !== action.payload.name),
        };
      }
      localStorage.setItem("cart", JSON.stringify(new_state.cart));
      return new_state;
    }

    case EMPTY_CART: {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
