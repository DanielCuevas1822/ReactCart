import React from "react";

const Modal = () => {
  return (
    <React.Fragment>
      <div className="capa hidden"></div>

      <section className="modal hidden" data-id="ismodal">
        <div className="contenido-modal">
          <h1>Gracias por comprar con nosotros</h1>
          <h2>Resumen de su pedido</h2>
          <br />
          <p>Información de envío:</p>
          <ul className="modal__shipping"></ul>
          <br />
          <p>Productos del pedido:</p>
          <ul className="modal__products"></ul>
          <br />
          <h3 className="total">Total a pagar: $</h3>
          <br />
          <button className="btn btn--entendido">Entendido</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Modal;
