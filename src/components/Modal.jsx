import React from "react";
import { connect } from "react-redux";
import { empty_cart } from "../redux/actions/cartActions";

const Modal = (props) => {

  const { isActive, shipping, cart, empty_cart, actionModal } = props;

  const handleClick = () => {
    empty_cart();
    actionModal();
  };
  
  return (    
    <React.Fragment>
      <div className={`capa ${!isActive ? "hidden" : null}`}></div>

      <section className={`modal ${!isActive ? "hidden" : null}`}>
        <div className="contenido-modal">
          <h1>Gracias por comprar con nosotros</h1>
          <h2>Resumen de su pedido</h2>
          <br />
          <p>Información de envío:</p>
          <ul className="modal__shipping">
            <li>Dirección: {shipping.addres}</li>
            <li>Ciudad: {shipping.city}</li>
            <li>Código postal: {shipping.zipcode}</li>
          </ul>
          <br />
          <p>Productos del pedido:</p>
          <ul className="modal__products">
            {cart
              ? cart.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                ))
              : null}
          </ul>
          <br />
          <h3 className="total">
            Total a pagar: $
            {cart
              ? cart.length > 0
                ? cart.reduce((total, currentValue) => {
                    return total + currentValue.quantity * currentValue.price;
                  }, 0)
                : null
              : null}
          </h3>
          <br />
          <button onClick={handleClick} className="btn btn--entendido">
            Entendido
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  empty_cart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
