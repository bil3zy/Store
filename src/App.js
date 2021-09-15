import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";
import CheckoutScreen from "./screens/CheckoutScreen";
import CatsScreen from "./screens/CatsScreen";
import DogsScreen from "./screens/DogsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 550);
  const [changed, setChanged] = useState(0);
  const added = (obj) => {
    obj.quantity++;
    setChanged((changed) => changed + 1);
  };
  const updateViewport = () => {
    setDesktop(window.innerWidth > 550);
  };
  const addedWithState = (i, setState) => {
    i.quantity++;
    setState((state) => state + 1);
    setChanged((changed) => changed + 1);
  };
  const removed = (i, setState) => {
    if (i.quantity > 1) {
      i.quantity--;
      setState((state) => state - 1);
      setChanged((changed) => changed - 1);
    }
  };
  const removedWithoutState = (i, setState) => {
    if (i.quantity > 1) {
      i.quantity--;
      setChanged((changed) => changed - 1);
    }
  };

  const removeFromCart = (i, setState, state) => {
    setState(state - i.quantity);
    setChanged((changed) => changed - state);
    console.log(i.quantity);
    if (changed - state === 0) {
      setChanged(0);
    }
    i.quantity = 0;
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  });

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="flex-row align-center space-between">
          {/* {isDesktop ? <HeaderNav changed={changed} /> : <FiMenu />} */}
          <HeaderNav changed={changed} />
        </header>
        <main>
          <ScrollToTop />
          <Route exact path="/">
            <HomeScreen added={added} />
          </Route>
          <Route path="/cart">
            <CartScreen
              addedWithState={addedWithState}
              removed={removed}
              changed={changed}
              removeFromCart={removeFromCart}
            />
          </Route>
          <Route path="/CheckoutScreen">
            <CheckoutScreen />
          </Route>
          <Route path="/cats">
            <CatsScreen added={added} />
          </Route>
          <Route path="/dogs">
            <DogsScreen added={added} />
          </Route>
          <Route
            path="/product-details/:id"
            render={(props) => (
              <ProductDetailsScreen
                {...props}
                added={added}
                removedWithoutState={removedWithoutState}
                changed={changed}
              />
            )}
          ></Route>
        </main>
        <footer className="flex-column align-center">
          <small>All rights reserved</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
