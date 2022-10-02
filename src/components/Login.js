import React, { useState } from "react";

import Uno from "../image/1.jpg";
import Dos from "../image/2.jpg";
import Tres from "../image/3.jpg";
import appFirebase from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
  const [registro, setRegistro] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, password);
    } else {
      await signInWithEmailAndPassword(auth, correo, password);
    }
  };

  return (
    <div className="container" id="login-intro">
      <div className="row container p-5">
        <div className="col-md-8">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Uno} alt="" className="tamaño-imagen" />
              </div>
              <div className="carousel-item">
                <img src={Dos} alt="" className="tamaño-imagen" />
              </div>
              <div className="carousel-item">
                <img src={Tres} alt="" className="tamaño-imagen" />
              </div>
            </div>
          </div>
        </div>
        {/* en esta seccion sera el formulario */}
        <div className="col-md-4">
          <div className="mt-5 ms-4">
            <h1>{registro ? "registrate" : "Inicia sesion"}</h1>
            <form onSubmit={handlerSubmit}>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="mínimo 8 caracteres"
                  id="password"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {registro ? "registrate" : "inicia sesion"}
              </button>
            </form>

            <div className="form-group">
              <button
                className="btn btn-secondary mt-4 form-control"
                onClick={() => setRegistro(!registro)}
              >
                {registro ? "ya tienes cuenta" : "no tienes cuenta? Registrate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
