import React from "react";
import Cuatro from "../image/4.jpg";
import Cinco from "../image/5.jpg";
import Nueve from "../image/9.jpg";

const MenuComida = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-1">Menú</h2>
      <div className="row container p-5">
        {/* menu 1 */}
        <div className="col-md-4">
          <div className="card">
            <img src={Cuatro} class="card-img-top" alt="" />
            <div className="card-body">
              <p className="card-text">CHORIPAPA GRANDE $2.50</p>
            </div>
          </div>
        </div>
        {/* menu 2 */}
        <div className="col-md-4">
          <div className="card">
            <img src={Cinco} class="card-img-top" alt="" />
            <div className="card-body">
              <p className="card-text">CHORIPAN ORIGINAL $3.50</p>
            </div>
          </div>
        </div>
        {/* menu 3 */}
        <div className="col-md-4">
          <div className="card">
            <img src={Nueve} class="card-img-top" alt="" />
            <div className="card-body">
              <p className="card-text">HAMBURGUESA DOBLE $3.75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComida;
