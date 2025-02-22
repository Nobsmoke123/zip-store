export const addItemToCart = (previousCartItems, newCartItem) => {
  const existingCartItem = previousCartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return previousCartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...previousCartItems, { ...newCartItem, quantity: 1 }];
};
