import React from "react";
import "./cards.css"

export default function cards({title, description, image}){
    return(
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}