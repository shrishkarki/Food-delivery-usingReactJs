import { useReducer } from "react"
import CartContext from "./Cart-context"


const defaultCartState={
    items:[],
    totalAmount:0

}

const cartReducer=(prevState,action)=>{
    if(action.type ==='ADD'){
       
        const updateTotalAmounts=prevState.totalAmount+action.item.price*action.item.amount;
        
    //  logic for changing in amount only
        const existingCartItemIndex=prevState.items.findIndex(item=>item.id===action.item.id);

        const existingCartItem=prevState.items[existingCartItemIndex];
        
        let updateItems;

        if(existingCartItem){
           const  updateItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            };
            updateItems=[...prevState.items];
            updateItems[existingCartItemIndex]=updateItem;
        }
        else{
           
            updateItems=prevState.items.concat(action.item);
        }

        return{
            items:updateItems,
            totalAmount:updateTotalAmounts
        }
    }




    if(action.type==='REMOVE'){
   

    const existingCartItemIndex = prevState.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = prevState.items[existingCartItemIndex];
      const updatedTotalAmount = prevState.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = prevState.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...prevState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };

    }
    return defaultCartState;
}


const CartProvider=props=>{
   
    
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=item=>{
     dispatchCartAction({
            type:'ADD',
            item:item
        })
    }

    const removeItemFromCartHandler=id=>{
        dispatchCartAction({
            type:'REMOVE',
            id:id
        })
 
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;