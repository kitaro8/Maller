// import '../App.css'
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

function Cart({onRemove, cartItems}) {

    const [isLogged, setIsLogged] = React.useState(true)
    useEffect(()=>{
        console.log('1')
        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        console.log('2')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
    },[])
    console.log('3')

    if(!isLogged)
        return <Navigate to="/login"/>

    return (
        <div>
            <Navbar></Navbar>
            
              <div>
                {
                    cartItems.map((product, index)=>(
                        <div key={index} className='cart'>
                          
                            <img className='cart_img' src={product.image} alt="" />
                            
                            <div className='cart_name'>
                                {product.title}
                            </div>
                            <div className='cart_price'>
                                $ {product.price}
                            </div>
                            <button className='cart_btn' onClick={()=>onRemove(index)}>X</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;