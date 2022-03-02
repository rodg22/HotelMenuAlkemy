import { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./MealList";
import Menu from "./Menu";

function MealListContainer() {
  const [mealInfo, setMealInfo] = useState([]);

  const getMealData = () => {
    let endpoints = [
      "https://api.spoonacular.com/mealplanner/generate?timeFrame=day&diet=vegan&apiKey=c42f8612fdc949fdbaab1dfffee48ed7",
      "https://api.spoonacular.com/mealplanner/generate?timeFrame=day&vegan=false&apiKey=c42f8612fdc949fdbaab1dfffee48ed7",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...mealData) => {
        let vegan = mealData[0].data.meals;
        vegan.length = 2;
        let notvegan = mealData[1].data.meals;
        notvegan.length = 2;
        let mealArray = vegan.concat(notvegan);
        setMealInfo(mealArray);
      })
    );
  };

  useEffect(() => {
    getMealData();
  }, []);

  return (
    <main>
      {mealInfo && (
        <>
          <MealList mealInfo={mealInfo} />
          <Menu />
        </>
      )}
    </main>
  );
}

export default MealListContainer;
