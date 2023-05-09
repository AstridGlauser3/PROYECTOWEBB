import React from "react";
import logo from '../../asets/logo.png';
import Navbar from '../navbar/navbar';
import coverDog from '../../asets/dogo_transparent.png';
function HeroSection(){
    return (
        <section className="hero-section">
      <Navbar></Navbar>
      <div className="hero-container">
        <h2>Todos los perros merecen un hogar donde se les quiera para siempre.</h2>
        <div className="hero-image"></div>
        <img src={coverDog} alt="Perro" className="hero-dog-image"></img>
      </div>
      <div className="recuadro-texto">
      <div className="primer">
      <p>Somos defensores de que todos los perros, grandes y pequeños, nos hacen mejores personas y merecen un alimento de calidad en hogares donde se les quiera para siempre.</p>
    </div>
    <button className="botonrojo primer">Descubre nuestra gama</button>
    </div>
    </section>
    )
}
export default HeroSection;