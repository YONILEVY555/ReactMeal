

import react,{Fragment,useContext} from 'react'
import CartItem from './CartItem.js'
import CartContext from '../../store/CartContext.js'

const Cart = (props) =>{

    const cartCtx = useContext(CartContext)

    const onClickClose = () =>{
        props.showCartFlagHandler( false )
    }

    return <Fragment>
    
              <ul>

              {cartCtx.items.map(item => ( < CartItem 
                                                                    key={item.id}
                                                                    id = {item.id}
                                                                    amount = {item.amount} 
                                                                    price = {item.price}
                                                                    />
                                            ) )}
             </ul>



             <div>Total price: {cartCtx.totalPrice}</div>
                <div>
                    <button>order</button>
                    <button onClick={onClickClose} >close</button>
            </div>

         </Fragment>
}

export default Cart