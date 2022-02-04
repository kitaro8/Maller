import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import {Navigate} from 'react-router-dom'
import axios from 'axios'

function Products(props) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/maller/product/all')
        .then((res)=> {
            setProducts([...res.data])
        })
        .catch((err)=> console.log(err))
    },[])


    return (
        <div>
            {products.map((item,index)=>{
                return <Cards key={index} object={item} />
            })}
        </div>
    )
}

export default Products;