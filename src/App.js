import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import {useEffect, useState} from "react";
import HeaderNav from "./components/HeaderNav";
import CheckoutScreen from "./screens/CheckoutScreen";
import CatsScreen from "./screens/CatsScreen";
import DogsScreen from "./screens/DogsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import {addDoc, collection, doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "./firebase";
import NewProductDashboard from "./screens/NewProductDashboard";

function App() {
  const [changed, setChanged] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //   const added = async () => {
  //   const docRef = doc(db, "products", );
  //   const payload = {quantity: increment(1)};
  //   setChanged((changed) => changed + 1);
  //   await updateDoc(docRef, payload);
  // };
  const addCartItem = (product) => {
    setCart([...cart, product]);
    setChanged((changed) => changed + 1);
  };

  const removeCartItem = (el) => {
    let quantity = cart.filter((val) => val === el).length;
    const id = cart.indexOf(el);
    if (quantity > 1) {
      cart.splice(id, 1);
      setChanged((changed) => changed - 1);
    }
  };
  const deleteFromCart = (el) => {
    const id = cart.indexOf(el);
    cart.splice(id, 1);
    setChanged((changed) => changed - 1);
  };

  cart.sort((a, b) => {
    return a._id - b._id;
  });

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  }, []);
  console.log(products.map((product) => product.title));
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
            <HomeScreen
              addCartItem={addCartItem}
              changed={changed}
              products={products}
            />
          </Route>
          <Route path="/cart">
            <CartScreen
              addCartItem={addCartItem}
              products={products}
              changed={changed}
              removeCartItem={removeCartItem}
              deleteFromCart={deleteFromCart}
              cart={cart}
            />
          </Route>
          <Route path="/CheckoutScreen">
            <CheckoutScreen />
          </Route>
          <Route path="/cats">
            <CatsScreen
              addCartItem={addCartItem}
              changed={changed}
              products={products}
            />
          </Route>
          <Route path="/dogs">
            <DogsScreen
              addCartItem={addCartItem}
              changed={changed}
              products={products}
            />
          </Route>
          <Route
            path="/product-details/:id"
            render={(props) => (
              <ProductDetailsScreen
                {...props}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
                changed={changed}
                products={products}
              />
            )}
          ></Route>
          <Route path="/newproduct">
            <NewProductDashboard />
          </Route>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
