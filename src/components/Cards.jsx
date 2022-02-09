import Card from './Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios'




function Cards(props) {

    const addToCart = (object)=>{

        var oldItems = JSON.parse(localStorage.getItem('pro'))
        if (oldItems==null){
            localStorage.setItem("pro", JSON.stringify([object]))
        }
        else{
            oldItems.push(object)
            localStorage.setItem('pro', JSON.stringify(oldItems));
        }
        
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