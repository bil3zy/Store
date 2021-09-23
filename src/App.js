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
// import db from "./firebase";
import NewProductDashboard from "./screens/NewProductDashboard";
import RegisterForm from "./screens/RegisterForm";
import db from "./firebase";
import SignInForm from "./screens/SignInForm";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import LogisticsDashboard from "./screens/LogisticsDashboard";

function App() {
  const [changed, setChanged] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  //   const added = async () => {
  //   const docRef = doc(db, "products", );
  //   const payload = {quantity: increment(1)};
  //   setChanged((changed) => changed + 1);
  //   await updateDoc(docRef, payload);
  // };

  const returnToInitialState = () => {
    setCart([]);
    setChanged(0);
  };

  const handleSignIn = (email, password, setError) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError(`Error: ${errorCode}`);
      });
  };
  console.log(`cart ${cart}`);
  console.log(`products ${products}`);

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

  // console.log(products.map((product) => product.category));

  console.log(user);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="flex-row align-center space-between">
          {/* {isDesktop ? <HeaderNav changed={changed} /> : <FiMenu />} */}
          <HeaderNav changed={changed} user={user} />
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
            <CheckoutScreen
              user={user}
              cart={cart}
              returnToInitialState={returnToInitialState}
            />
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
          <Route path="/new-product">
            <NewProductDashboard />
          </Route>
          <Route path="/logistics-dashboard">
            <LogisticsDashboard />
          </Route>
          <Route path="/register">
            <RegisterForm handleSignIn={handleSignIn} user={user} />
          </Route>
          <Route path="/signin">
            <SignInForm handleSignIn={handleSignIn} />
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
