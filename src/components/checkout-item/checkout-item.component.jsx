import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {
  addItem,
  reduceItemQuantityAction,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, removeItem, reduceItemQuantity, addItem }) => {
  const { name, quantity, price, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item-image" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItemQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  reduceItemQuantity: (item) => dispatch(reduceItemQuantityAction(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
