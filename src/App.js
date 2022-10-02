import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

import appFirebase from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Historia from "./components/Historia";
import MenuComida from "./components/MenuComida";
const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <>
      <Navbar />

      {/* usando  props */}
      <div className="">
        {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
      </div>
      <Historia />
      <MenuComida />
      <Footer />
    </>
  );
}

export default App;
