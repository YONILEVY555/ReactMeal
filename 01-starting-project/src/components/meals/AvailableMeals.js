import react, {useState} from 'react'
import MealItem from "./mealItem/MealItem"

const MealsList = [
    {id: 'Sushi',
    price: 40},
    {id: 'Salmon',
    price: 20},
    {id: 'potato chips',
    price: 10},
    {id: 'Soup of the Day',
    price: 15},
    {id: 'green salad',
    price: 35},
    {id: 'Rice',
    price: 50},
    {id: 'Baked sweet potato',
    price: 18},
    {id: 'Sea bass',
    price: 150},
]

const AvailableMeals = () => {

    const [meals,setMeals] = useState(MealsList)

    return <ul>
                {meals.map(meal=>(<MealItem key={meal.id} id={meal.id} price={meal.price} /> ))}
          </ul>

}

export default AvailableMeals