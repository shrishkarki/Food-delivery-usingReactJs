import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm=(props)=>{
    const [amountIsValid,setAmountIsInvalid]=useState(true);
    const amountInputRef=useRef();

    const submitHandler=e=>{
            e.preventDefault();
            const enteredAmount=amountInputRef.current.value;
            const enteredAmountNumber=+enteredAmount;
            if(enteredAmount.trim().length===0 || enteredAmountNumber<0|| enteredAmountNumber>5){
               setAmountIsInvalid(false);
            }
            else{
                props.onAddToCart(enteredAmountNumber);
                setAmountIsInvalid(true);
            }
            

    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
        
        <Input label="Amount" 
        ref={amountInputRef}
        input={
            {

            id:'amount',
            type:"number",
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'0'
            

            }
        }/>
        <button type="submit">+ Add</button>
        {!amountIsValid && <p>please enter a valid amount</p>}
        </form>
    )

}
export default MealItemForm;