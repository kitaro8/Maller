import React from 'react'
import Products from '../pages/Products';
import Navbar from './Navbar';
import img from './shoes.png'

function Card(props) {
    return (
        <div>
         
                <div class="card">
                    <img className='cardimg' src={props.object.image} alt="shoes"/>
                    <p className='titlep'>{props.object.title}</p>
                    <p class="price">${props.object.price}</p>
                    <p><button className='cbutton' onClick={()=>props.addToCart(props.object)} >Add to Cart</button></p>
                </div>
            
        </div>
    )
}

export default Card;
