import React from "react";
import dogimg from '../../asets/dog-xs.png';
export default function YellowSection(){
    return(
        <div className="amarilla">
      <div className="container reveal ">  
      <div className="paraboton">
        <div className="boxs">
          <div className="nohay">
            <h2>No hay mejor<br></br> momento <br></br>que el de la comida</h2>
          </div>
        </div>
        <button className="nuevob">Descubre nuestra gama
        </button>
        </div>
        <div className="contenedor">
        <img src={dogimg} alt="Perro" className="imagen-per" data-final-position="0"></img>
      </div>
      </div>
      </div>
    )
}