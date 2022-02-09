import React, { Component } from 'react'
import Card from '../components/Card';
import Cards from '../components/Cards';
// import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Category from "./Category";
import  Home  from "./Home";
import Products from './Products';



export class Index extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar></Navbar>
                    <Home></Home>
                    <Cards></Cards>
                    <Category></Category>
                </>
            </div>
        )
    }
}

export default Index

