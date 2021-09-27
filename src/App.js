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
import {collection, doc, getDoc, onSnapshot} from "firebase/firestore";
// import db from "./firebase";
import NewProductDashboard from "./screens/NewProductDashboard";
import RegisterForm from "./screens/RegisterForm";
import {db} from "./firebase.js";
import SignInForm from "./screens/SignInForm";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import LogisticsDashboard from "./screens/LogisticsDashboard";
import RegisterLocationForm from "./screens/RegisterLocationForm";
import {getStorage, ref} from "firebase/storage";

function App() {
  const [changed, setChanged] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [authenticationUser, setAuthenticationUser] = useState([]);
  const [databaseUser, setDatabaseUser] = useState({});

  const storage = getStorage();
  const storageRef = ref(storage);
  const imagesRef = ref(storage, "productImages");
  console.log(imagesRef);
  //   const added = async () => {
  //   const docRef = doc(db, "products", );
  //   const payload = {quantity: increment(1)};
  //   setChanged((changed) => changed + 1);
  //   await updateDoc(docRef, payload);
  // };
  // console.log(authenticationUser.uid);
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
        setAuthenticationUser(user);
        const docSnap = getDoc(doc(db, "users", user.uid));
        docSnap.then((doc) => {
          setDatabaseUser(doc.data());
          console.log("fetched");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        setError(`Error: ${errorCode}`);
      });
  };
  // console.log(`cart ${cart}`);
  // console.log(`products ${products}`);
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

  const deleteFromCart = (el, quantity) => {
    const id = cart.indexOf(el);
    cart.splice(id, quantity);
    setChanged((changed) => changed - quantity);
  };

  cart.sort((a, b) => {
    return a._id - b._id;
  });

  const fetchDatabaseUser = () => {
    if (Object.keys(authenticationUser).length > 0) {
      getDoc(doc(db, "users", authenticationUser.uid)).then((doc) => {
        setDatabaseUser(doc.data());
        console.log("fetched");
      });
    }
  };

  const newDocFirebaseDatabaseUser = (docRef, payload, setDoc) => {
    if (Object.keys(authenticationUser).length > 0) {
      setDoc(docRef, payload);
      fetchDatabaseUser();
      // console.log("added");
    }
  };
  console.log(databaseUser);
  console.log(authenticationUser);

  // console.log(Object.keys(databaseUser).length === undefined);
  // console.log(Object.keys(databaseUser).length);
  // console.log(
  //   `authenticationUser: ${authenticationUser} condition: ${
  //     Object.keys(authenticationUser).length > 0
  //   }`
  // );

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  }, []);
  console.log();

  // console.log(products.map((product) => product.category));

  // console.log(authenticationUser);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="flex-row align-center space-between">
          {/* {isDesktop ? <HeaderNav changed={changed} /> : <FiMenu />} */}
          <HeaderNav
            changed={changed}
            authenticationUser={authenticationUser}
          />
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
              authenticationUser={authenticationUser}
              cart={cart}
              returnToInitialState={returnToInitialState}
              databaseUser={databaseUser}
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
            <RegisterForm
              handleSignIn={handleSignIn}
              authenticationUser={authenticationUser}
            />
          </Route>
          <Route path="/register-location">
            <RegisterLocationForm
              newDocFirebaseDatabaseUser={newDocFirebaseDatabaseUser}
              authenticationUser={authenticationUser}
              cart={cart}
              returnToInitialState={returnToInitialState}
            />
          </Route>
          <Route path="/signin">
            <SignInForm
              handleSignIn={handleSignIn}
              setDatabaseUser={setDatabaseUser}
              authenticationUser={authenticationUser}
              fetchDatabaseUser={fetchDatabaseUser}
            />
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
