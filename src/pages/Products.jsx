import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import {Navigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar';

function Products(props) {

    return (
        <div>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    )
}


export default Products;