import classes from './MealItem.module.css';
import MealItemForm  from './MealItemForm';
import CartContext from '../../../store/Cart-context';
import { useContext } from 'react';

const MealItem=props=>{
    const cartCtx=useContext(CartContext);
    const AddToCartHandler=(amount)=>{
        cartCtx.addItem({
            id:props.meal.id,
            name:props.meal.name,
            amount:amount,
            price:props.meal.price

        })
    }

    const price=`$${props.meal.price}`;
    return(
        <li className={classes.meal}>
            <div >
                <h3> {props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            <MealItemForm onAddToCart={AddToCartHandler}/>
            </div>
        </li> 
    );
}
export default MealItem;