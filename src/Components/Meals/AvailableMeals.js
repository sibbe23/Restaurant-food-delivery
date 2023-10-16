import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Parmigiana",
    description: "Finest chicken and Parmesian cheese",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Butter Chicken Masala",
    description: "An Indian delight!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Veg clear soup",
    description: "Green vegetables and Pepper",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Happy Meals special Falooda",
    description: "A chefs signature dessert!",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
