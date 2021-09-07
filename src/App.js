import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import {FiMenu} from "react-icons/fi";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";
import CheckoutScreen from "./screens/CheckoutScreen";
import CatsScreen from "./screens/CatsScreen";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 550);
  const [changed, setChanged] = useState(0);
  const added = (obj) => {
    obj.quantity++;
    setChanged((changed) => changed + 1);
  };
  console.log(changed);
  const updateViewport = () => {
    setDesktop(window.innerWidth > 550);
  };
  const addedWithState = (i, setState) => {
    i.quantity++;
    setState((state) => state + 1);
    setChanged((changed) => changed + 1);
  };
  const removed = (i, setState) => {
    if (i.quantity > 0) {
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
          <Link className="brand" to="/">
            Aleef Store
          </Link>
          {isDesktop ? <HeaderNav changed={changed} /> : <FiMenu />}
        </header>
        <main>
          <Route exact path="/">
            <HomeScreen added={added} />
          </Route>
          <Route path="/cart">
            <ShoppingScreen
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
        </main>
        <footer className="flex-row align-center">
          <small>All rights reserved</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
