import React from "react";
import logolast from '../../asets/logo.png';
export default function LastSection(){
    return(
        <div className="ultimaseccion">
           <div className="alimentopara">
            <h4>Alimento para perros PEDIGREE®</h4>
            <div className="contenedorlista">
            <ul className="mi-nueva-clase">
              <li>Alimento Húmedo</li>
              <li>Alimento Seco</li>
              <li>Premios</li>
              <li>Tarrinas</li>
              <li>Latas</li>
            </ul>
          </div>
          </div>
          
          
          <div className="elemento">
          <nav>
            <ul className="nuevo-ul">
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Política de cookies</a></li>
              <li><a href="#">Términos del servicio</a></li>
              <li><a href="#">Contáctanos</a></li>
              <li><a href="#">Accesibilidad</a></li>
            </ul>
          </nav>
        </div>
      
       

        <div className="derec">
          <p>Copyright © Mars 2023 (Pedigree)®, Propiedad de Mars Incorporated y sus Filiales.</p>
        </div>
        <div className="icono">
         <img src={logolast} className="izquierda" alt="imagen Izquierda"></img>
          </div> 
                 

        <button className="descubre">Configuración de cookies</button>
        <div className="contenedoriconos">

          <div className="circulo">
            <div className="imagen f"></div>
          </div>
          <div className="circulo">
            <div className="imagen t"></div>
          </div>
        <div className="circulo">
          <div className="imagen i"></div>
        </div>

      

       

      </div>

      </div>
    )
}