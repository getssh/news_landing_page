import React from "react";
import './Articles.css';


export default function(props) {
    return (
        <div className="all-articles">
            <div className="image">
                <img src={props.sideImage} alt="article news image" />
            </div>
            <div className="article-number">
                {props.articleNumber}
            </div>
            <div className="article-title">
                {props.articleTitle}
            </div>
            <div className="article-detail">
                {props.artDetail}
            </div>
        </div>
    )
}