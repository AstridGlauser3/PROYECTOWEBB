import React from "react";
import pedigree from '../../asets/pedigree.jpg';
export default function DogSection(){
    return(
        <section className="seccion-perro">
        <div className="zoom container">
               <img src={pedigree} alt="Perro" className="hero-image2" data-final-position="0"></img>
             </div>
        
             <div className="container reveal">
               <div className="conteb">
               <div className="textoseg">
                 <h3>Alimenta lo bueno.™</h3>
               </div>
     
               <div className="nuevo">
                 <p>Los perros sacan lo mejor de nosotros.<br></br>
                   Pedigree saca lo mejor de ellos.™</p>
            
                  
                 </div>
               
                 <button className="estilob">Más información
                 </button>
           
               </div>
     
             </div>
     
        
     
     
             </section>
    )
}