import React from 'react';

const Footer = () => {
    return (
        <footer className="App-footer">
            <div className="container d-flex flex-column">
                <div className="row">
                    <div className="col-md-12">
                        <div >
                            <p className='App-footerBrand'>🚍🚏</p>
                        </div>
                        <div className='App-footerSeparator'></div>
                        <div className='App-footerContact'>
                            <p className='App-footerContact-label'>Información de contacto</p>
                            <p className='App-footerContact-info'><b>Teléfono:</b> (+52) 664-555-5555</p>
                            <p className='App-footerContact-info'><b>Correo electrónico:</b> contact.support@teautobus.com</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <p className='App-footerCopyright'>TE - AUTOBUS. Copyright © 2023. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
