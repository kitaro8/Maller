import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Index from "./pages/Index";
import Add from "./pages/AddProducts";
// import Card from './components/Card';
import Login from './pages/Login'
import Products from './pages/Products';
import Cart from './pages/Cart';
import {useEffect,useState} from 'react'
import SignUp from './pages/SignUp';
import Stores from './pages/Stores';
import CheckoutPage from './pages/CheckoutPage';

const App =() =>{

    let [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('items')));
    const addToStorage = ((addPro)=>{
      let objects ={
               name : addPro.name,
               image : addPro.image,
               price : addPro.price,
          }
          cartItems.push(objects)
      localStorage.setItem("items", JSON.stringify(cartItems))
      setCartItems(JSON.parse(localStorage.getItem('items')))
    })
  
  
    const removeFromStorage = ((index)=>{
      cartItems.splice(index, 1)
      localStorage.setItem('items', JSON.stringify(cartItems))
      setCartItems(JSON.parse(localStorage.getItem('items')))
  })
    return (
        
        <BrowserRouter>
            <Routes>
        
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/add-products" element={<Add/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/stores" element={<Stores/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="/cart" element={<Cart setCartItems={setCartItems} addToStorage={addToStorage} cartItems={cartItems} onRemove={removeFromStorage}/>}/>
                

            </Routes>
        </BrowserRouter>
    
    )
}

export default App;