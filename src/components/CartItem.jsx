import React from "react";
import { connect } from "react-redux";
import {
  add_to_cart_action,
  remove_from_cart_action,
} from "../redux/actions/cartActions";

const CartItem = (props) => {
  const { name, price, quantity } = props.data;
  const { add_to_cart_action, remove_from_cart_action } = props;

  const handleIncrementClick = (data) => {
    add_to_cart_action(data);
  };

  const handleDecrementClick = (data) => {
    remove_from_cart_action(data);
  };

  return (
    <tr className="item">
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleIncrementClick(props.data)}
          className="btn btn--product"
        >
          +
        </button>
        {quantity}
        <button
          onClick={() => handleDecrementClick(props.data)}
          className="btn btn--product"
        >
          -
        </button>
      </td>
      <td>{quantity * price}</td>
    </tr>
  );
};

const mapDispatchToProps = {
  add_to_cart_action,
  remove_from_cart_action,
};

export default connect(null, mapDispatchToProps)(CartItem);
