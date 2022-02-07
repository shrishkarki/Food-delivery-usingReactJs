import React, { useContext,useEffect,useState} from 'react';
import CartIcon  from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';
const HeaderCartButton=props=>{
    const cartCtx=useContext(CartContext);
    const [buttonIsHighLight,setButtonIsHighLight]= useState(false);

    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    const btnClasses=`${classes.button} ${buttonIsHighLight? classes.bump:''}`;
const { items }=cartCtx;
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setButtonIsHighLight(true);
        const timer=setTimeout(()=>{
            setButtonIsHighLight(false);
        },300 );

        return()=>{
            clearTimeout(timer)
        }

    },[items]);

    return(
       <button className={btnClasses} onClick={props.onShow}>
           <span className={classes.icon}><CartIcon/></span>
           <span>Cart</span>
           <span className={classes.badge}>{numberOfCartItems}</span>
       </button>
    );
}
export default HeaderCartButton;