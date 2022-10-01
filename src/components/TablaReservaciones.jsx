import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const TablaReservaciones = () => {
  const [reservaciones, setReservaciones] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const obtenerReservaciones = async () => {
      const reservacionesCollection = collection(db, "reservaciones");
      //   console.log(reservacionesCollection);
      const reservacionesSnapshot = getDocs(reservacionesCollection);
      const reservacionesLista = (await reservacionesSnapshot).docs.map((doc) =>
        doc.data()
      );
      setReservaciones(reservacionesLista);
    };

    obtenerReservaciones(reservaciones);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Personas</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {reservaciones.map((reservacion, index) => (
            <tr key={index}>
              <td>{reservacion.nombre}</td>
              <td>{reservacion.personas}</td>
              <td>{reservacion.email}</td>
              <td>{reservacion.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaReservaciones;
