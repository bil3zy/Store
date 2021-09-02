import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import {FiMenu} from "react-icons/fi";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 550);

  const updateViewport = () => {
    setDesktop(window.innerWidth > 550);
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
          {isDesktop ? <HeaderNav /> : <FiMenu />}
        </header>
        <main>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/cart">
            <ShoppingScreen />
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
