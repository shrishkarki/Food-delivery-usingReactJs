import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';


const Cart=(props)=>{
    
    const cartCtx=useContext(CartContext);
    const toggle=cartCtx.items.length>0;

    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);

    }

    const cartItemAddHandler=item=>{
        cartCtx.addItem({...item,amount:1});

    }
    const CartItems=<ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=> <li>
            <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={()=>cartItemAddHandler(item)}/>
            </li> )}
        </ul>;

        const totalAmount=`$${cartCtx.totalAmount}`;
    return(
        <Modal onHide={props.onHideCart}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div  className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {toggle && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;