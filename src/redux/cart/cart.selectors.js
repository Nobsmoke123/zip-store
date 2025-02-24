import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    // To prevent calling reduce on an empty array.
    return cartItems.length
      ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
  }
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
