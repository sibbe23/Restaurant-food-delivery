import React,{useContext} from "react";
import classes from './CartItem.module.css';
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  
  const cartctx=useContext(CartContext);
  const addItemToCart=(e)=>{
    e.preventDefault();
    const quantity=document.getElementById( "amount_"+props.item.id).value;
    cartctx.addItem({...props.item,quantity:+quantity,id:props.item.id})
    
  }
  const removeItemHandler=(e)=>{
    e.preventDefault()
    cartctx.removeItem(props.id)
  }
 
  return (
    <li className={classes['cart-item']} id={props.id}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemToCart}>+</button>
      </div>
    </li>
  );
};

export default CartItem;