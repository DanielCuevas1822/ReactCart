import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";

const Shipping = (props) => {
  const { cart } = props;

  const [activeModal, setActiveModal] = useState(false);

  const [shipping, setShipping] = useState({
    addres: "",
    city: "",
    zipcode: "",
  });

  const actionModal = () => {
    setActiveModal(!activeModal);
    if (activeModal) {
      setShipping({
        addres: "",
        city: "",
        zipcode: "",
      });
    }
  };

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    actionModal();
  };

  return (
    <React.Fragment>
      {cart ? (
        cart.length > 0 ? (
          <section className="main__shipping">
            <h2>¿Dónde te lo enviamos?</h2>
            <form>
              <div>
                <label htmlFor="addres">Dirección</label>
                <input
                  type="text"
                  name="addres"
                  id="addres"
                  value={shipping.addres}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={shipping.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="zipcode">Código postal</label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  value={shipping.zipcode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="btn btn--submit"
                  type="submit"
                  value="Enviar"
                  onClick={handleClick}
                />
              </div>
            </form>
          </section>
        ) : null
      ) : null}
      <Modal
        isActive={activeModal}
        shipping={shipping}
        actionModal={actionModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Shipping);
