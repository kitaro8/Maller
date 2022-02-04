import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Index from "./pages/Index";
import Add from "./pages/AddProducts";
// import Card from './components/Card';
import Login from './pages/Login'
import Products from './pages/Products';
import Cart from './pages/Cart';
import {useEffect,useState} from 'react'
import SignUp from './pages/SignUp';

const App =() =>{

    let [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('pro')));
    const addToStorage = ((addPro)=>{
      let objects ={
               name : addPro.name,
               image : addPro.image,
               price : addPro.price,
          }
          cartItems.push(objects)
      localStorage.setItem("pro", JSON.stringify(cartItems))
      setCartItems(JSON.parse(localStorage.getItem('pro')))
    })
  
  
    const removeFromStorage = ((index)=>{
      cartItems.splice(index, 1)
      localStorage.setItem('pro', JSON.stringify(cartItems))
      setCartItems(JSON.parse(localStorage.getItem('pro')))
  })
    return (
        
        <BrowserRouter>
            <Routes>
        
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/add-products" element={<Add/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart setCartItems={setCartItems} addToStorage={addToStorage} cartItems={cartItems} onRemove={removeFromStorage}/>}/>
                

            </Routes>
        </BrowserRouter>
    
    )
}

export default App;