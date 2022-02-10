import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import {Navigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Products(props) {

    return (
        <div>
            <Navbar></Navbar>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    )
}


export default Products;