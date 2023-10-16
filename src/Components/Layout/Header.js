import { Fragment } from "react"
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Happy Meals</h1>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Delicious Food !!!!'/>
        </div>
    </Fragment>
}

export default Header;