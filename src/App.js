import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import {FiMenu} from "react-icons/fi";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";
import CheckoutScreen from "./screens/CheckoutScreen";
import CatsScreen from "./screens/CatsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

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

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  });

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="flex-row align-center space-between fixed">
          <div>
            <Link className="brand" to="/">
              Aleef Store
            </Link>
          </div>

          {/* {isDesktop ? <HeaderNav changed={changed} /> : <FiMenu />} */}
          <HeaderNav changed={changed} />
          <div className="categories flex-row align-center space-evenly">
            <h3>Cats</h3>
            <h3>Dogs</h3>
          </div>
        </header>
        <main>
          <Route exact path="/">
            <HomeScreen added={added} />
          </Route>
          <Route path="/cart">
            <CartScreen
              addedWithState={addedWithState}
              removed={removed}
              changed={changed}
            />
          </Route>
          <Route path="/CheckoutScreen">
            <CheckoutScreen />
          </Route>
          <Route path="/cats">
            <CatsScreen added={added} />
          </Route>
          <Route
            path="/product-details/:id"
            component={ProductDetailsScreen}
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
