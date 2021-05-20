import axios from "axios";
import { useEffect, useState } from "react";

export const useInitialState = () => {
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    axios
      .get("https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json")
      .then((response) => {
        setInitialState({ items: response.data.cart.items, cart: [] });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return initialState;
};

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
