import React from "react";
import './Hero.css'

export default function(props) {
    return (
        <div class="hero">
            <div className="hero-image">
                <img src={props.heroImage} />
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