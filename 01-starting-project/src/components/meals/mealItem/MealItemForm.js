import react, {useRef,useContext} from 'react'
import Input from '../../ui/Input.js'
import CartContext from '../../../store/CartContext.js';

const MealItemForm = (props) =>{

    const inputElement = useRef();
    const cartCtx = useContext(CartContext);

    const onSubmitHandler = (event) =>{

        event.preventDefault();

        const item = { id: props.id,
                       amount: Number(inputElement.current.value),
                       price: props.price }

        cartCtx.addItemHandler(item)

        inputElement.current.value = 0;

    }

    return (

        <form onSubmit={onSubmitHandler}>
        
            <Input  input={{id: props.id,
                                 type: 'number',
                                 ref: inputElement}}
                    label='Amount'>

            </Input>
            
            < button type='submit' >+ADD </button>

        </form>

    );


}

export default MealItemForm