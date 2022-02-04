import React from 'react'
import img from './shoes.png'

function Card(props) {
    return (

    <div>
        <h2 className='pp'>Popular Products</h2>

        <div className='cards'>
            <div class="card">
                <img className='cardimg' src={props.object.image} alt="shoes"/>
                <h1>{props.object.title}</h1>
                <p class="price">${props.object.price}</p>
                <p><button className='card button' onClick={()=>props.addTocart(props.object)} >Add to Cart</button></p>
            </div>
        </div>
    </div>
    )
}

export default Card;
