import Card from './Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios'




function Cards(props) {

    const addToCart = (product)=> {
        let items = JSON.parse(localStorage.getItem('items')) ?? []
        let updated_product 
        let qty

        if(items.length==0)
        {
            updated_product=product

        } else {
            updated_product = items.find((item)=> item.id==product.id) ?? product
        }
        qty = updated_product.qty ??  0
        updated_product.qty = qty+1
        items = items.filter((item)=>{
            return item.id!=product.id
        })
        items.push(updated_product)
        localStorage.setItem("items",JSON.stringify(items))
        
    }
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> {
            setProducts([...res.data])
        })
        .catch((err)=> console.log(err))
    },[])


    return (
        <div>
            <div className='cards'>
                {products.map((item,index)=>{
                    return <Card key={index} object={item} addToCart= {addToCart} />
                })}
            </div>
        </div>
    )
}



export default Cards;