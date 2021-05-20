import React from "react";
import { connect } from "react-redux";
import { add_to_cart_action } from "../redux/actions/cartActions";

const Shirt = (props) => {
  const { data, add_to_cart_action } = props;

  const handleClick = (dataProduct) => {
    add_to_cart_action(dataProduct);
  };

  return (
    <div className="list__product">
      <div className="product__image">
        <img src={data.imageUrl} alt="product" />
      </div>
      <div className="product__content">
        <p className="product__name">{data.name}</p>
        <p className="product__price">{data.price}</p>
        <button onClick={() => handleClick(data)} className="btn btn--add">
          Añadir
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  add_to_cart_action,
};

export default connect(null, mapDispatchToProps)(Shirt);
