import React, { useEffect, useState } from "react";
import appFirebase from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Home = ({ correoUsuario }) => {
  const valorInicial = {
    nombre: "",
    personas: "",
    telefono: "",
  };

  //variables de estado
  const [user, setUser] = useState(valorInicial);
  const [lista, setLista] = useState([]);
  //capturar los inputs
  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      await addDoc(collection(db, "reservaciones"), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }
    setUser({ ...valorInicial });
  };

  // funcion para renderizar lista de usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reservaciones"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);
  //funcion eliminar usuario
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "reservaciones", id));
  };

  return (
    <div className="container">
      <p>
        Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesion
      </p>
      <button className="btn btn-primary" onClick={() => signOut(auth)}>
        Cerrar Sesion
      </button>
      <hr />
      <div className="row">
        {/* esta seccion sera del formulario */}
        <div className="col-md-4">
          <h3 className="text-center mb-3">Reservación</h3>
          <form onSubmit={guardarDatos}>
            <div className="card card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control mb-3"
                  placeholder="Nombre"
                  onChange={capturarInputs}
                  value={user.nombre}
                />
                <input
                  type="number"
                  name="personas"
                  className="form-control mb-3"
                  placeholder="ingresar número de personas"
                  onChange={capturarInputs}
                  value={user.personas}
                />
                <input
                  type="text"
                  name="telefono"
                  className="form-control mb-3"
                  placeholder="ingresar telefono"
                  onChange={capturarInputs}
                  value={user.telefono}
                />
              </div>
              <button className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
        {/* esta seccion sera la lista de usuarios */}
        <div className="col-md-8">
          <h2 className="text-center mb-5">Lista de Reservaciones</h2>
          <div className="container card">
            <div className="card-body">
              {lista.map((list) => (
                <div key={list.id}>
                  <p>Nombre: {list.nombre}</p>
                  <p>personas: {list.personas}</p>
                  <p>telefono: {list.telefono}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(list.id)}
                  >
                    Eliminar
                  </button>
                  <button className="btn btn-success m-1">Actualizar</button>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
