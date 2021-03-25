import React from 'react';
import './headers.css';


export default function headers() {
    return (
        <div className="headers">
            <div className="headers__section">
                <div className="headers__logo">
                    <a href="#">
                        <img src="../image/header-logo.svg" alt=""/>
                    </a>
                </div>
                <div className="headers__content">
                    <img src="../image/header-search-alt.svg" alt=""/>
                    <div className="headers__content-phone">
                        <a href="tel:+123456789" className="headers__content-phone-a"><img src="../image/header-phone-number.svg" alt=""/></a>
                    </div>
                    <div className="headers__menu">
                        <a href="#">About</a>
                        <a href="#">Product</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="headers__buttons">
                        <button className="headers__buttons-download">Download</button>
                        <button className="headers__buttons-singUp">Sing up</button>
                    </div>
                </div>
            </div>
        </div>
     );
  }
  