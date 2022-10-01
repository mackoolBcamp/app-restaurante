import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArK1IBr5J4X3DHbt5_3XrKPQE8oljYU50",
  authDomain: "restaurante-e45b4.firebaseapp.com",
  projectId: "restaurante-e45b4",
  storageBucket: "restaurante-e45b4.appspot.com",
  messagingSenderId: "446136510629",
  appId: "1:446136510629:web:a7a2d3c1e2cc7dbb05854c",
};

const appFirebase = initializeApp(firebaseConfig);

//exportamos toda la config. a una constante
// export const db = getFirestore(app);
export default appFirebase;
