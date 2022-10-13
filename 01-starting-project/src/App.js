import React ,{Fragment,useState} from "react"
import Cart from './components/cart/Cart.js'
import CartProvider from "./store/CartProvider.js";
import AvailableMeals from './components/meals/AvailableMeals.js'
import Header from './components/layout/Header'
function App() {

  const [showCartFlag,setshowCartFlag] = useState(false)

  const showCartFlagHandler = (val) =>{
        setshowCartFlag(val)
  }

  return (
    
    <CartProvider >
           <Header showCartFlagHandler = {showCartFlagHandler} />
           {showCartFlag && <Cart showCartFlagHandler = {showCartFlagHandler} />}
           <AvailableMeals/> 

    </CartProvider >
    

  );
}

export default App;
