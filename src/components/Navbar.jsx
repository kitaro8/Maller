import React, { useEffect, useState } from 'react';
import   '../style/styled.css'
import logo from './logo.png'
import account from './account.png'
import {Link, useNavigate } from 'react-router-dom'




const Navbar = () => {
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
        return <div class="grid-container">
        <header>

        <div class="brand">
            <a href="#"><img src={logo}/></a>
            <h3>MALLER</h3>
        </div>

        <div className='navitems'>
            <a href="/" className='home'>Home</a>
            <a href="/products" className='products'>Products</a>
            <a href="/stores" className='stores1'>Stores</a>
        </div>
        <div>
        <input type="text" placeholder="Search" className="search"/>

        </div>


        <div>
            <a href="/cart">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.36495 24.4577L0.0583607 24.3481L1.36495 24.4577ZM28.6351 24.4577L29.9417 24.3481L28.6351 24.4577ZM27.3018 12.1243L25.9951 12.234L27.3018 12.1243ZM2.69827 12.1243L4.00486 12.234L2.69827 12.1243ZM6.6875 13.9583C6.6875 14.5969 7.27513 15.1146 8 15.1146C8.72489 15.1146 9.3125 14.5969 9.3125 13.9583H6.6875ZM20.6875 13.9583C20.6875 14.5969 21.2752 15.1146 22 15.1146C22.7249 15.1146 23.3125 14.5969 23.3125 13.9583H20.6875ZM6.1825 10.4896H23.8176V8.17708H6.1825V10.4896ZM25.9951 12.234L27.3284 24.5673L29.9417 24.3481L28.6084 12.0147L25.9951 12.234ZM25.1509 26.6771H4.84918V28.9896H25.1509V26.6771ZM2.67153 24.5673L4.00486 12.234L1.39169 12.0147L0.0583607 24.3481L2.67153 24.5673ZM4.84918 26.6771C3.55911 26.6771 2.54922 25.6986 2.67153 24.5673L0.0583607 24.3481C-0.210719 26.8371 2.01105 28.9896 4.84918 28.9896V26.6771ZM27.3284 24.5673C27.4507 25.6986 26.4408 26.6771 25.1509 26.6771V28.9896C27.989 28.9896 30.2107 26.8371 29.9417 24.3481L27.3284 24.5673ZM23.8176 10.4896C24.9453 10.4896 25.8882 11.2449 25.9951 12.234L28.6084 12.0147C28.3732 9.83881 26.2985 8.17708 23.8176 8.17708V10.4896ZM6.1825 8.17708C3.70139 8.17708 1.62692 9.83881 1.39169 12.0147L4.00486 12.234C4.11178 11.2449 5.05473 10.4896 6.1825 10.4896V8.17708ZM9.3125 7.79167C9.3125 5.02448 11.8589 2.78125 15 2.78125V0.46875C10.4091 0.46875 6.6875 3.74734 6.6875 7.79167H9.3125ZM15 2.78125C18.1411 2.78125 20.6875 5.02448 20.6875 7.79167H23.3125C23.3125 3.74734 19.5908 0.46875 15 0.46875V2.78125ZM6.6875 7.79167V13.9583H9.3125V7.79167H6.6875ZM20.6875 7.79167V13.9583H23.3125V7.79167H20.6875Z" fill="#3B828B"/>
</svg>

            </a>
        </div>

        
        <div class="dropdown">

            <img className='account' src={account}></img>
            <div class="dropdown-content">
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </div>

        </header>

    </div>

    return (
    <div class="grid-container">
        <header>

        <div class="brand">
            <a href="#"><img src={logo}/></a>
            <h3>MALLER</h3>
        </div>

        <div className='navitems'>
            <a href="/" className='home'>Home</a>
            <a href="/products" className='products'>Products</a>
            <a href="/stores" className='stores1'>Stores</a>
        </div>
        <div>
        <input type="text" placeholder="Search" className="search"/>

        </div>


        <div>
            <a href="/cart">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.36495 24.4577L0.0583607 24.3481L1.36495 24.4577ZM28.6351 24.4577L29.9417 24.3481L28.6351 24.4577ZM27.3018 12.1243L25.9951 12.234L27.3018 12.1243ZM2.69827 12.1243L4.00486 12.234L2.69827 12.1243ZM6.6875 13.9583C6.6875 14.5969 7.27513 15.1146 8 15.1146C8.72489 15.1146 9.3125 14.5969 9.3125 13.9583H6.6875ZM20.6875 13.9583C20.6875 14.5969 21.2752 15.1146 22 15.1146C22.7249 15.1146 23.3125 14.5969 23.3125 13.9583H20.6875ZM6.1825 10.4896H23.8176V8.17708H6.1825V10.4896ZM25.9951 12.234L27.3284 24.5673L29.9417 24.3481L28.6084 12.0147L25.9951 12.234ZM25.1509 26.6771H4.84918V28.9896H25.1509V26.6771ZM2.67153 24.5673L4.00486 12.234L1.39169 12.0147L0.0583607 24.3481L2.67153 24.5673ZM4.84918 26.6771C3.55911 26.6771 2.54922 25.6986 2.67153 24.5673L0.0583607 24.3481C-0.210719 26.8371 2.01105 28.9896 4.84918 28.9896V26.6771ZM27.3284 24.5673C27.4507 25.6986 26.4408 26.6771 25.1509 26.6771V28.9896C27.989 28.9896 30.2107 26.8371 29.9417 24.3481L27.3284 24.5673ZM23.8176 10.4896C24.9453 10.4896 25.8882 11.2449 25.9951 12.234L28.6084 12.0147C28.3732 9.83881 26.2985 8.17708 23.8176 8.17708V10.4896ZM6.1825 8.17708C3.70139 8.17708 1.62692 9.83881 1.39169 12.0147L4.00486 12.234C4.11178 11.2449 5.05473 10.4896 6.1825 10.4896V8.17708ZM9.3125 7.79167C9.3125 5.02448 11.8589 2.78125 15 2.78125V0.46875C10.4091 0.46875 6.6875 3.74734 6.6875 7.79167H9.3125ZM15 2.78125C18.1411 2.78125 20.6875 5.02448 20.6875 7.79167H23.3125C23.3125 3.74734 19.5908 0.46875 15 0.46875V2.78125ZM6.6875 7.79167V13.9583H9.3125V7.79167H6.6875ZM20.6875 7.79167V13.9583H23.3125V7.79167H20.6875Z" fill="#3B828B"/>
</svg>

            </a>
        </div>

        
        <div class="dropdown">

            <img className='account' src={account}></img>
            <div class="dropdown-content">
                <a href="/profile">Profile</a>
                <a href="#">Logout</a>
            </div>
        </div>

        </header>

    </div>
    )
}

export default Navbar
