import React, {  useState } from 'react';




function Cards(props) {
    const [open, setOpen] = React.useState(false);

    const addToCart = (product)=> {
        setOpen(false)
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
        setOpen(true)
        
    }

    const removeFromCart = (product) => {
        let items = JSON.parse(localStorage.getItem('items'))
        if(!items)
            return
        
        items = items.filter((item,index)=>{
            return item.id!=product.id
        })

        props.setItems([...items])
        localStorage.setItem("items",JSON.stringify(items))
    }

    const handleClick = ()=> {
        if(props.type==='add')
        {
            return addToCart(props.product)
        }

        return removeFromCart(props.product)
    }

    const handleClose = (event) => {
        setOpen(false);
    }

    return (
        <div>
            <div className='cards'>
                <div class="card">
                    <img className='cardimg' src={props.object.image} alt="shoes"/>
                    <h1>{props.object.name}</h1>
                    <p class="price">${props.object.price}</p>
                    <p><button className='card button' onClick={()=>props.addTocart(props.object)} >Add to Cart</button></p>
                </div>
            </div>
        </div>
    )
}

export default Cards;