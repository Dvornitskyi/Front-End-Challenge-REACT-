import React from 'react';
import './reviews.css';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';


export default function reviews() {
    return (
            <div className="reviews">
                 <div className="reviews__section">
                 {/* <Glide height={500} width={380} autoPlay={true} autoPlaySpeed={2000}>
                    <h1>11111111</h1>
                    <h1>2222222</h1>
                    <h1>3333333</h1>
                </Glide> */}
                <div className="reviews__carusel">
                    <div className="reviews__carusel-header">
                        <img className="reviews__carusel-header-image" src=""/>
                        <div className="reviews__carusel-header-area"><span></span><img  src="" /></div>
                    </div>
                        <p className="reviews__carusel-text">Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.</p>
                        <div className="reviews__carusel-footer">
                            <div>
                                <img className="reviews__carusel-header-image" src=""/> 
                                <span></span>
                            </div>
                            <div>
                                <a></a><span>|</span><a></a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
     );
  }