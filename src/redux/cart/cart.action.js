import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/**
 * Add item redux action
 * @param {} item
 * @returns
 */
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item, // the item you want to add
});
