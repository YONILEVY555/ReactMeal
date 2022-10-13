import MealItemForm from "./MealItemForm"


const MealItem = (props) =>{

    return <li>
              <div>
                <span>
                    <div>{props.id}</div>
                    <div>{props.price}</div>
                </span>
                <span><MealItemForm id={props.id} price={props.price}/></span>
              </div>
           </li>
}

export default MealItem