import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container mb-4">
        <div className="row">
          {/* column 1 */}
          <div className="col-md-3 col-sm-6 mt-4">
            <h5>Haz tu Reservación</h5>
            <ul className="list-unstyled">
              <li>1. Registrate</li>
              <li>2. Ingresa con tu usuario</li>
              <li>3. Llena los datos</li>
              <li>4. Disfruta</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col-md-3 col-sm-6 mt-4">
            <h5>Dirección</h5>
            <ul className="list-unstyled">
              <li>Ambato-Ecuador</li>
              <li>Rocafuerte y Quito</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col-md-3 col-sm-6 mt-4">
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>Entregas a domicilio</li>
              <li>0987032630</li>
            </ul>
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Todos los derechos Reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
