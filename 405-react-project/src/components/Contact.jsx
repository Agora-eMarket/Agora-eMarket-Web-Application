import React from 'react'
import cat3 from "./dollar-sign.png";
export default function Contact({props}){
    return(

        <div className="contact-card" >
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>            
            <div className="info-group" id='inf'>
                <p>{props.discreption}</p>
            </div>
            <div className="info-group">
                <img src= {cat3}/>
                <p>{props.price} SAR</p>
            </div>
            {/* <h1 style={{display: props.num ? 'block' : 'none'}}>{1 + props.num}</h1> */}
        </div>

    )
}
    {/* <img src={cat2} /> */}
