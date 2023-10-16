import { useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
const [cartIsShown,setcartIsShown]=useState(false);

const showCartHandler=()=>{
  setcartIsShown(true);
}
const hideCartHandler=()=>{
  setcartIsShown(false);
}


  return (
    <CartProvider>
      {cartIsShown && <Cart  onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
