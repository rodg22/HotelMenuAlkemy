import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMenu } from "../context/MenuContext";
import MealDetail from "./MealDetail";

const MealDetailContainer = () => {
  const [meal, setMeal] = useState({});
  const { menu } = useMenu();

  const { id } = useParams();

  useEffect(() => {
    setMeal(menu.find((el) => el.id === parseInt(id)));
  }, [id, menu]);

  return (
    <MealDetail
      id={meal.id}
      title={meal.title}
      readyInMinutes={meal.readyInMinutes}
      pricePerServing={meal.pricePerServing}
      healthScore={meal.healthScore}
      image={meal.image}
    >
      <span dangerouslySetInnerHTML={{ __html: `${meal.summary}` }}></span>
    </MealDetail>
  );
};
export default MealDetailContainer;
