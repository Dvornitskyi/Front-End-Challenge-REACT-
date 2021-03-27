import React from 'react';
import './promo.css';


export default function promo() {
    return (
            <div className="promo">
                 <div className="promo__section">
                 <div className="promo__components">
                    <h2 className="promo__title">At vero eos et accusamus et iusto odio dignissimos ducimus</h2>
                    <p className="promo__text">Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. </p>
                    <button className="promo__btn">Try for free </button>
                   </div> 
                 </div>
                 <div className="promo__section-image">
                    <img className="promo__iMac" src="../image/promo-iMac.png" />
                    <img className="promo__image" src="../image/promo-image.png" />
                  </div>
            </div>
     );
  }