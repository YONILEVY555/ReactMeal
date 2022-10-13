

import CartContext from "./CartContext"
import {findIdexInArrayObject} from '../helpers/ArrayHelpers'
import react,{useReducer} from 'react'

const dummy = {     

    totalPrice: 120,

    items: [{
        id: 'Sushi',
        amount: 3,
        price: 40,
    }],

    totalAmount: 3

    }
    
    const cartReducer = (prevState, action) =>{
    
    if(action.type=='ADD_ITEM')
      return addItem(prevState.items,action.item,prevState.totalPrice)
    
    if(action.type=='SUB_ITEM')
      return subItem(prevState.items,action.item,prevState.totalPrice)  
    
    }
    
    const addItem = (items,item,totalPrice) =>{
    
    const indexItem = findIdexInArrayObject(items,item)
    
    let updatedItems = [...items]; 
    
    if(isItemExists(indexItem)){
        updatedItems[indexItem].amount += item.amount;
    }else{
        updatedItems = [...updatedItems,item]
    }
    
    const updatedTotalPrice = totalPrice + (item.amount*item.price)
    
    const countItem = updatedItems.reduce( (count, current) =>  count + current.amount , 0)

    return { items: updatedItems, totalPrice: updatedTotalPrice, totalAmount: countItem  };
    
    }
    
    const subItem = (items,item,totalPrice) =>{
    
    
    const indexItem = findIdexInArrayObject(items,item)
    
    let updatedItems = [...items]; 
    
    if(islessOneLeft(items,item,indexItem)){
        updatedItems = updatedItems.filter(i => i.id != item.id) ;
    }else{
        updatedItems[indexItem].amount -= item.amount; 
    }
    
    const updatedTotalPrice = totalPrice - (item.amount*item.price) 

    const countItem = updatedItems.reduce( (count, current) =>  count + current.amount , 0)
    
    return { items: updatedItems, totalPrice: updatedTotalPrice, totalAmount: countItem };
    
    }
    
    const isItemExists = (indexItem) =>{
    
    if ( indexItem === -1){
      return false
    }
    
    return true;
    
    }
    
    const islessOneLeft = (items,item,indexItem) =>{
    
    const updatedAmount = items[indexItem].amount - item.amount; 
    
    if ( updatedAmount < 1 ){
        return true
      }
  
      return false;
  
    }


const CartProvider = (props) =>{

    const [cartState, dispatchCartAct] = useReducer(cartReducer,dummy);

    const addItemHandler = (item)=>{


        const action = {type: 'ADD_ITEM',
                        item: item
                       }

        dispatchCartAct(action)
    }

    const subItemHandler = (item) => {

        const action = {type: 'SUB_ITEM',
                        item: item
                       }

        dispatchCartAct(action)

    }

    return <CartContext.Provider value={{items: cartState.items,
                                        totalPrice: cartState.totalPrice,
                                        totalAmount: cartState.totalAmount,
                                        addItemHandler: addItemHandler,
                                        subItemHandler: subItemHandler   }}>

                {props.children}       

           </CartContext.Provider>

}

export default CartProvider