export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const add_to_cart_action = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const remove_from_cart_action = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
