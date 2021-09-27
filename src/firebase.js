// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPXvEXofVzkltdp_1-KsedQ3pv_WkBVE",
  authDomain: "aleef-store-8d270.firebaseapp.com",
  projectId: "aleef-store-8d270",
  storageBucket: "aleef-store-8d270.appspot.com",
  messagingSenderId: "330079760334",
  appId: "1:330079760334:web:5d01a6e99ced748759859f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
