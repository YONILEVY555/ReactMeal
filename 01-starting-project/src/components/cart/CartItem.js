import react,{Fragment,useContext} from 'react'
import CartContext from '../../store/CartContext.js'

const CartItem = (props) =>{

    const cartCtx = useContext(CartContext)

    const  item = {
        id: props.id,
        amount: 1,
        price: props.price
    }
    
    const onClickAddItem = () =>{

        cartCtx.addItemHandler(item);

    }

    const onClickSubItem = () =>{

        cartCtx.subItemHandler(item);

    }

    return <Fragment>
                 <li> 
                    <div>{props.id}</div>
                    <div>x {props.amount}</div>
                    <div>{props.price}</div>
                    <button onClick={onClickAddItem}>+</button>
                    <button onClick={onClickSubItem}>-</button>
                </li> 
            </Fragment>

}

export default CartItem