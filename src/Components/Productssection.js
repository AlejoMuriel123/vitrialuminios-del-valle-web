import './styles/Products.css';
import React from 'react';
import Puertacorrediza from '../Images/Puertacorrediza.jpg';
import cabinasparabaño from '../Images/cabinasparabaño.jpg';
import pasamanosconbarandilla from '../Images/pasamanosconbarandilla.jpg';
import puertaentamborada from '../Images/puertaentamborada.jpg';
import puertaventana from '../Images/puertaventana.jpg';
import puertastipopersiana from '../Images/puertastipopersiana.jpg';
import puertasyventanas from '../Images/puertasyventanas.jpg';
import techosenpolicarbonato from '../Images/techosenpolicarbonato.jpg';
import divisionparabañovidriotemplado from '../Images/divisionparabañovidriotemplado.jpg';

function Productssection() {

    return (
        <div className="products-section">
            <h1>Vitrialuminios Del Valle</h1>
            <p className='products-section-paragraph'>
                Vitrialuminios del Valle se especializa principalmente en aluminio arquitectónico, 
                acero y vidrio para construcción en todas sus presentaciones colores y calibres.</p>
            <div className='products-images-section'>
                <div className='images-section-line1'>
                    <img src={Puertacorrediza} className="img-size" alt='logo'></img>
                    <img src={cabinasparabaño} className="img-size" alt='logo'></img>
                    <img src={pasamanosconbarandilla} className="img-size" alt='logo'></img>
                </div>
                <div className='images-section-line2'>
                    <img src={puertaentamborada} className="img-size" alt='logo'></img>
                    <img src={puertaventana} className="img-size" alt='logo'></img>
                    <img src={puertastipopersiana} className="img-size" alt='logo'></img>
                </div>
                <div className='images-section-line3'>
                    <img src={puertasyventanas} className="img-size" alt='logo'></img>
                    <img src={techosenpolicarbonato} className="img-size" alt='logo'></img>
                    <img src={divisionparabañovidriotemplado} className="img-size" alt='logo'></img>
                </div>
            </div>
        </div>
    );
}

export default Productssection;