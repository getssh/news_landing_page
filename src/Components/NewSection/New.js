import React from "react";
import './New.css'


export default function(props) {
    return (
        <div className="new-container">
            <h1 className="new-titile">New</h1>
            <div className="new-news">
                <h3 className="news-title">Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className="new-news">
                <h3 className="news-title">The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr />
            <div className="new-news">
                <h3 className="news-title">Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}