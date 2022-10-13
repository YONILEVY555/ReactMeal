import React ,{Fragment,useState} from "react"
import Cart from './components/cart/Cart.js'
import CartProvider from "./store/CartProvider.js";
import AvailableMeals from './components/meals/AvailableMeals.js'
import Header from './components/layout/Header'
import reactDom from 'react-dom'
function App() {

  const [showCartFlag,setshowCartFlag] = useState(false)

  const showCartFlagHandler = (val) =>{
        setshowCartFlag(val)
  }

  return (
    
    <CartProvider >

           {reactDom.createPortal(<Header showCartFlagHandler = {showCartFlagHandler} />,document.getElementById("header"))}
           {showCartFlag && reactDom.createPortal(<Cart showCartFlagHandler = {showCartFlagHandler}/>,document.getElementById("cart"))}
           <AvailableMeals/> 

    </CartProvider >
    

  );
}

export default App;
