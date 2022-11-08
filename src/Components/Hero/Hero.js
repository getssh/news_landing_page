import React from "react";
import './Hero.css'

export default function(props) {
    return (
        <div class="hero">
            <div className="hero-image">
                <picture>
                    <source media="(max-width: 500px)" srcset={props.heroMobile}/>
                    <source media="(min-width: 600px)" srcset={props.heroImage}/>
                    <img src={props.heroImage} />
                </picture>
            </div>
            <div className="hero-title">
                <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="details">
                <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
                </p>
                <button className="read-btn">Read more</button>
            </div>
        </div>
    )
}