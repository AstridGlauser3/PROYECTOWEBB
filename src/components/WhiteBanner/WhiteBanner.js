import React from "react";
import dry from '../../asets/dry.png'
import Perro1 from "../../asets/8410136003448_1676970521036.png"
import Perro2 from "../../asets/5998749139912_1676971194989.png"
export default function WhiteBanner(){
    return (
        <div className="seccion-blanca">
      <div className="container reveal">
        <h3>Nutrición PEDIGREE®</h3>
        <div className="imagenes-container">
          <div className="box">
            <img src={dry} alt="Perro" className="imagen-personalizada" data-final-position="0"></img>
            <div className="textbox">
              <b><p>Alimento seco para perros PEDIGREE®</p></b>
              <button className="gama-btn">Ver la gama </button>
            </div>
          </div>
          <div className="box">
            <img src={Perro1} alt="Perro" className="imagen-personalizada" data-final-position="0"></img>
            <div className="textbox">
              <p>Alimento húmedo para perros PEDIGREE®</p>
              <button className="gama-btn">Ver la gama </button>
            </div>
          </div>
          <div className="box">
            <img src={Perro2} alt="Perro" className="imagen-personalizada" data-final-position="0"></img>
            <div className="textbox">
              <p>Premios PEDIGREE®<br></br><br></br></p>
              <button className="gama-btn">Ver la gama </button>
          </div>
        </div>
    
        
      </div>
      <div className="underlin">
          <p>Ver todos los productos</p>
        </div>
    </div>
    </div>

    )
}
