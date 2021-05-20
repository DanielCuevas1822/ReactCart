import React from "react";

const Shirt = (props) => {
  const { data } = props;
  return (
    <div className="list__product">
      <div className="product__image">
        <img src={data.imageUrl} alt="product" />
      </div>
      <div className="product__content">
        <p className="product__name">{data.name}</p>
        <p className="product__price">{data.price}</p>
        <button className="btn btn--add">Añadir</button>
      </div>
    </div>
  );
};

export default Shirt;
