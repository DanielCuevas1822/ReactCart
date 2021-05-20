import Header from "./components/Header";
import Main from "./views/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeEnhancers, useInitialState } from "./hooks/useInitialState";
import cartReducer from "./redux/reducers/cartReducers";

function App() {
  const initialState = useInitialState();
  const store = createStore(cartReducer, initialState, composeEnhancers);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
