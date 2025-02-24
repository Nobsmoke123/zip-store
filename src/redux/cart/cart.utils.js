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

export const reduceItemQuantity = (previousCartItem, targetCartItem) => {
  const existingCartItem = previousCartItem.find(
    (cartItem) => cartItem.id === targetCartItem.id
  );

  if (existingCartItem.quantity === 1) {
    return previousCartItem.filter(
      (cartItem) => cartItem.id !== targetCartItem.id
    );
  }

  return previousCartItem.map((cartItem) => {
    return cartItem.id === targetCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
