import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBSBxuM6TwfnH4ShnZMRX0vIfiReFbaA",
  authDomain: "donchoripan-choripan.firebaseapp.com",
  projectId: "donchoripan-choripan",
  storageBucket: "donchoripan-choripan.appspot.com",
  messagingSenderId: "507269926446",
  appId: "1:507269926446:web:9f69d445cc466ff88d19bf",
};

const app = initializeApp(firebaseConfig);

//exportamos toda la config. a una constante
export const db = getFirestore(app);
