
import react, {Fragment,useContext,useState,useEffect,useRef} from 'react'
import CartContext from '../../store/CartContext'

const Header = (props) =>{

    const cartCtx = useContext(CartContext) 
    const [styleBtn,setStyleBtn] = useState("green")

    const items = cartCtx.items

    useEffect(()=>{
        
              setStyleBtn("green");

              const timer = setTimeout(() => {
                        setStyleBtn("gray");
              }, "500")

              return () => {
                clearTimeout(timer);
              };

    },[items])
    
    const onClickCart =  () =>{

         props.showCartFlagHandler( true )
    }

    console.log(cartCtx)

    return <Fragment>

              <div>
                <span>ReactMeals</span>
                <button style={{backgroundColor: `${styleBtn}`}} onClick={onClickCart}>Your Cart  ({cartCtx.totalAmount} item)</button>
              </div>

           </Fragment>

}

export default Header