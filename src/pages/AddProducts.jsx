import Card from "../components/Card";
import React, { Component } from "react";
import axios from 'axios';
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


class Add extends Component {
    constructor() {
        super();
        this.state = {
        
        title: "",
        price: "",
        description: "qwe",
        image: "https://i.pravatar.cc",
        category: "asda"
        };
    
    
        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.descChange = this.descChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
    }
    
    
    nameChange(e) {
        this.setState({
        title: e.target.value,
        });
    }
    priceChange(e) {
        this.setState({
        price: e.target.value,
        });
    }

    descChange(e){
        this.setState({
            description: e.target.value,
            });
    }

    imageChange(e){
        this.setState({
            image: e.target.value
        })
    }

    categoryChange(e){
        this.setState({
            category: e.target.value
        })
    }
    
    addProduct(e) {
        
        const products = {
            title: this.state.title,
            price: this.state.price,
            description: this.state.description,
            image: this.state.image,
            category: this.state.category
        };
        


        axios.post('https://fakestoreapi.com/products', products)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({title:'', price:'',
     description:'qwe', image:'https://i.pravatar.cc', category:'asda'})
        }

  

    render() {
        return (

        <div>
            <Navbar></Navbar>
            <div className="add_pro">
                    <div className="titlepro">Title:</div>
                    <input className="add_pro_input"/>
                    <div className="pricepro">Price:</div>
                    <input className="add_pro_input"/>
                    <div className="descpro">Description:</div>
                    <input className="add_pro_input"/>
                    <div className="imgpro">Image:</div>
                    <input className="fileimage" type='file'/>
            </div>
            <button className="add_prob">Add Product</button>
            <Footer></Footer>
        </div>

        );
    }
    }
    
    export default Add;