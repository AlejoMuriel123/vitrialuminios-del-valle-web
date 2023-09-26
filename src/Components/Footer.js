import './styles/Footer.css';
import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    {/* Column1 */}
                    <div className='col'>
                        <h4>VITRIALUMINIOS ASOCIADOS S.A.S.</h4>
                        <ul className='list-unstyled'></ul>
                            <li>3188372089</li>
                            <li>Cali, Valle del Cauca</li>
                            <li>Calle 2 oeste # 70 - 37</li>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <h4>STUFF</h4>
                        <ul className='list-unstyled'>
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GOOD STUFF</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className='col'>
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ul className='list-unstyled'>
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>VITRIALUMINIOS DEL VALLE</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear} VITRIALUMINIOS ASOCIADOS S.A.S. | All rights reserved | Terms of service | Privacy
                    </p>
                </div>
            </div>
            <h1>Footer Hours</h1>
        </div>
    );
};

export default Footer;