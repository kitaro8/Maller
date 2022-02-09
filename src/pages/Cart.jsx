// import '../App.css'
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import Navbar from '../components/Navbar'


function Cart({onRemove, cartItems}) {
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState(true)
    const [inum, setInum] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [final, setFinal] = useState(0)
    const [qty, setQty] = useState(0)

    
    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem('items')) ?? []

        if(carts.length!==0)
        {
            
            setEmpty(false)
            setItems([...carts])
        } 
            
    },[])

    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem('items')) ?? []
        setEmpty(carts.length===0? true : false)
        let tot=0,fin=0,dis=0,qt=0
        setInum(carts.length)
        setDiscount(99)
        carts.map((item)=> tot+=(item.price*item.qty) )
        carts.map((item)=> qt+=item.qty)
        fin = (tot - dis) 
        fin = fin<0? 0 : fin
        setTotal(tot.toFixed(2))
        setFinal(fin.toFixed(2))
        setQty(qt)

    

        
            
    },[items])

    return (
        <div>
            <Navbar></Navbar>
            
              <div>
                {
                    cartItems.map((product, index)=>(
                        <div key={index} setItems={setItems} className='cart'>

                            <div className='cart2'>
                                <img className='cart_img' src={product.image} alt="" />
                                
                                <div className='cart_name'>
                                    {product.title}
                                </div>

                                <div className='cart_price'>
                                    $ {product.price}
                                </div>

                                <button className='cart_btn' onClick={()=>onRemove(index)}>X</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
            <div className='cart-details'>
                <p>Discount: {discount}</p>
                <p>Delivery: {total}</p>
                <p>Subtotal: {total}</p>
                <p>Total: {total}</p>
            </div>
            <button className='checkout'><a href='/Checkout'>Checkout</a></button>
        </div>
    )
}

export default Cart;