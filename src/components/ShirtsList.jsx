import React from "react";
import { connect } from "react-redux";
import Shirt from "./Shirt";

const ShirtList = (props) => {
  const { items } = props;
  return (
    <section className="main__list">
      <h2 className="list__title">Listado de Camisetas</h2>
      <div className="list__content">
        {items
          ? items.map((item, index) => <Shirt key={index} data={item} />)
          : null}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(ShirtList);
