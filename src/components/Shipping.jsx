import React from "react";

const Shipping = () => {
  return (
    <section className="main__shipping">
      <h2>¿Dónde te lo enviamos?</h2>
      <form action="">
        <div>
          <label htmlFor="addres">Dirección</label>
          <input type="text" name="addres" id="addres" />
        </div>
        <div>
          <label htmlFor="city">Ciudad</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="zipcode">Código postal</label>
          <input type="text" name="zipcode" id="zipcode" />
        </div>
        <div>
          <input className="btn btn--submit" type="submit" value="Enviar" />
        </div>
      </form>
    </section>
  );
};

export default Shipping;
