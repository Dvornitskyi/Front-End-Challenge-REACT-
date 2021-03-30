import React from 'react';
import './section.css';


export default function section() {
    return (
            <div className="section">
                 <div className="section__section">
                     <div className="section__section-image">
                        <img className="section__watch" src="../image/section-watch.png" />
                        <img className="section__image" src="../image/section-requirements-image.png" />
                        <div className="section__card">
                              <div className="section__card-header">
                              <img className="section__card-icon" src="../image/section-Icon.png" />
                                 <h3 className="section__card-title">Notice</h3>
                              </div>
                              <p className="section__card-text">Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est.</p>
                        </div>  
                     </div>
                 <div className="section__components">
                    <h2 className="section__title">Temporibus autem quibusdam et aut officiis debitis</h2>
                    <p className="section__text">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    <button className="section__btn">Try for free </button>
                   </div> 
                 </div>

            </div>
     );
  }