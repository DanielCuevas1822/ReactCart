import React from "react";
import Cart from "../components/Cart";
import Shipping from "../components/Shipping";
import ShirtList from "../components/ShirtsList";

const Main = () => {
  return (
    <main className="page__main">
      <ShirtList />
      <Cart />
      <Shipping />
    </main>
  );
};

export default Main;
