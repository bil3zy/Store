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
            <h3>Home</h3>
            <Link id="categories" to="/cats">
              <h3>Cats</h3>
            </Link>
            <Link id="categories" to="/dogs">
              <h3>Dogs</h3>
            </Link>
            <h3>Contact Us</h3>
          </div>
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
