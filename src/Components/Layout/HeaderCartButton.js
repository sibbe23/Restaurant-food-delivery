import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);
  console.log(cartCtx);
  let numberOfCartItems=0;

  cartCtx.items.forEach((item)=>{
    numberOfCartItems+=+item.quantity
  })
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};
export default HeaderCartButton;
