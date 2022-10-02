import React from "react";
import Icon from "../image/icon.png";

const Historia = () => {
  return (
    <div className="container mt-5" id="texto-menu">
      <div className="media">
        <img src={Icon} class="align-self-start mr-3 mt-2" alt="..." />
        <div className="media-body">
          <h5 className="mt-2">Don Choripan</h5>
          <p>
            TODOS QUIEREN PROBAR SU SABOR....no te quedes con las ganas y
            disfruta el mejor sabor en ahumados de la ciudad...pídelo a
            domicilio o visítanos.
          </p>
          Estamos de aniversario y queremos festejarlo con nuestros clientes,
          amigos y familiares, quienes nos apoyaron y confiaron desde el
          principio y que gracias a su apoyo seguimos creciendo día a día para
          llevar el mejor sabor a su paladar.
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
