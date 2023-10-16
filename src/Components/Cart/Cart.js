import React,{useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} id={item.id} item={item} />
      ))}
    </ul>
  );
        let totalAmount=0;
        cartCtx.items.forEach((item)=>{
          totalAmount+=(item.price*item.quantity)
        })
        const hasItems=cartCtx.items.length>0;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button} onClick={cartCtx.onOrder}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
