// import '../App.css'
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


function Cart({onRemove, cartItems}) {
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState(true)
    const [inum, setInum] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [final, setFinal] = useState(0)
    const [qty, setQty] = useState(0)
    const [deli, setDeli] = useState(10)

    
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
        let tot=0,fin=0,dis=0,qt=0, de=10
        setInum(carts.length)
        setDiscount(0)
        carts.map((item)=> tot+=(item.price*item.qty) )
        carts.map((item)=> qt+=item.qty)
        fin = (tot + de)
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
                                <div className='cart_qty'>{product.qty}</div>
                                <button className='cart_btn' onClick={()=>onRemove(index)}>X</button>
                            </div>
                        </div>
                        
                    ))
                }
                <div className='cart-details'>
                    <p>Discount: %{discount}</p>
                    <p>Delivery: ${deli}</p>
                    <p>Subtotal: ${total}</p>
                    <p>Total: ${final}</p>
                    <p>Items number : {inum}</p>
                </div>
            </div>

            <button className='checkout'><a href='/Checkout'>Checkout</a></button>
            <Footer></Footer>
        </div>
    )
}

export default Cart;

// import React , {useState, useEffect} from 'react'
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Masonry from '@mui/lab/Masonry';
// import Cards from '../components/Cards';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// let Cart = (props)=> {
//     const [items, setItems] = useState([]);
//     const [empty, setEmpty] = useState(true)
//     const [inum, setInum] = useState(0)
//     const [discount, setDiscount] = useState(0)
//     const [total, setTotal] = useState(0)
//     const [final, setFinal] = useState(0)
//     const [qty, setQty] = useState(0)

    
//     useEffect(()=>{
//         let carts = JSON.parse(localStorage.getItem('items')) ?? []

//         if(carts.length!=0)
//         {
            
//             setEmpty(false)
//             setItems([...carts])
//         } 
            
//     },[])

//     useEffect(()=>{
//         let carts = JSON.parse(localStorage.getItem('items')) ?? []
//         setEmpty(carts.length==0? true : false)
//         let tot=0,fin=0,dis=99,qt=0
//         setInum(carts.length)
//         setDiscount(99)
//         carts.map((item)=> tot+=(item.price*item.qty) )
//         carts.map((item)=> qt+=item.qty)
//         fin = (tot - dis) 
//         fin = fin<0? 0 : fin
//         setTotal(tot.toFixed(2))
//         setFinal(fin.toFixed(2))
//         setQty(qt)

    

        
            
//     },[items])

//     return (
//             <Container fixed>
              
//                 {empty && <Typography variant="h4" gutterBottom component="div">Cart is Empty!</Typography>}
//                 <Box sx={{ flexGrow: 1  }}>
//                     <Grid container >
//                         <Grid item xs={6}>
//                             <Masonry columns={{ xs: 2}} >
//                                 {
//                                     items.map((item,index)=>{
//                                         return <Cards key={index} title={item.title} price={item.price} img={item.image} product={item}  btn='Remove' type='remove' setItems={setItems} />
//                                 })
//                                 }
//                             </Masonry>
//                         </Grid>

//                         <Grid item xs={6}>
//                                 <Paper sx={{p: 3}} elevation={3}>
//                                     <Typography variant="h2" gutterBottom component="div">Details :</Typography>
//                                     <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Items number : {inum}</Typography>
//                                     <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Qty number : {qty}</Typography>
//                                     <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Total Amount : {total}$</Typography>
//                                     <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Discount : {discount}$</Typography>
//                                     <Typography variant="h4" gutterBottom component="div" sx={{color: '#2e7d32'}}>Final Amount : {final}$</Typography>
//                                     <Button variant='contained' sx={{display: 'block'}}>Check Out</Button>
//                                 </Paper>
//                         </Grid>
//                     </Grid>
//                 </Box>      
//             </Container>
//     );
// }


// export default Cart;