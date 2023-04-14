import React from 'react'
import cat3 from "./dollar-sign.png";
export default function Contact({ props }) {

    const [counter, setCounter] = React.useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };
    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };
    //reset counter 
    const addCart = () => {
        console.log(props.name , " has been added to cart " , counter , " times")
    }
    return (

        <div className="contact-card" >
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="info-group" id='inf'>
                <p>{props.discreption}</p>
            </div>
            <div className="info-group">
                <img src={cat3} />
                <p>{props.price} SAR </p>
            </div>
            <div >
                <button className='contact-card-btn' onClick={increase} style={{marginRight: '10px'}}>+</button>
                <p style={{ display: 'inline-flex' ,marginRight: '10px'}}>{counter}</p>
                <button className="contact-card-btn" style={{marginRight: '10px'}} onClick={decrease}>-</button>
                <button className="contact-card-btn" style={{marginRight: '10px'}} onClick={addCart}><img style={{width: '10px'}} src='data:image/png;base64,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' /></button>
            </div>
            {/* <h1 style={{display: props.num ? 'block' : 'none'}}>{1 + props.num}</h1> */}
        </div>

    )
}
{/* <img src={cat2} /> */ }
