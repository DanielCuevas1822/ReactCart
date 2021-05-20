import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart } = props;
  return (
    <section className="main__cart">
      <h2 className="cart__title">Cesta de la compra</h2>

      <table className="cart__items">
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Unidades</th>
            <th>Total</th>
          </tr>
        </tbody>
        <tbody>
          {cart
            ? cart.map((item, index) => <CartItem key={index} data={item} />)
            : null}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
