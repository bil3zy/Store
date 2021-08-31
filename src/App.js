import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import {FiMenu} from "react-icons/fi";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";
import data from "./data";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 550);
  // const [quantity, setQuantity] = useState(1);

  const products = data.products;

  const updateViewport = () => {
    setDesktop(window.innerWidth > 550);
  };
  const addedWithState = (obj, setState, state) => {
    obj.quantity++;
    console.log(obj.quantity);
    setState(state + 1);
  };
  const added = (obj) => {
    obj.quantity++;
    console.log(obj.quantity);
  };

  const removed = (obj, setState, state) => {
    if (obj.quantity > 0) {
      obj.quantity--;
      console.log(obj.quantity);
      setState(state + 1);
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
          <Link className="brand" to="/">
            Aleef Store
          </Link>
          {isDesktop ? <HeaderNav products={products} /> : <FiMenu />}
        </header>
        <main>
          <Route exact path="/">
            <HomeScreen added={added} />
          </Route>
          <Route path="/cart">
            <ShoppingScreen
              products={products}
              addedWithState={addedWithState}
              removed={removed}
            />
          </Route>
        </main>
        <footer className="flex-row align-center">
          <small>All rights reserved</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
