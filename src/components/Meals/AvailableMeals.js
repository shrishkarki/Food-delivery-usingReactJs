import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS=[
    {
        id: 'm1',
        name: 'MOMO',
        description: 'Finest MOMO and veggies',
        price: 20,
      },
      {
        id: 'm2',
        name: 'PIZZA',
        description: 'A italian PIZZA!',
        price: 15,
      },
      {
        id: 'm3',
        name: 'Burger',
        description: 'American, raw, meaty',
        price: 30,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 10,
      },
]

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=><MealItem
     key={meal.id} 
     meal={meal}>
     </MealItem>)

    return(
        <section className={classes.meals}>
            <Card>
            <ul>{mealsList}</ul>
            </Card>
       
      </section>
    )

}
export default AvailableMeals;