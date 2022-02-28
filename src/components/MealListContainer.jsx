import { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./MealList";

function MealListContainer() {
  const [mealInfo, setMealInfo] = useState([]);

  const getMealData = () => {
    let endpoints = [
      "https://api.spoonacular.com/mealplanner/generate?timeFrame=day&diet=vegan&apiKey=cb1c464d94f142c08b156c5beddade8b",
      "https://api.spoonacular.com/mealplanner/generate?timeFrame=day&vegan=false&apiKey=cb1c464d94f142c08b156c5beddade8b",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...mealData) => {
        let vegan = mealData[0].data.meals;
        vegan.length = 2;
        let notvegan = mealData[1].data.meals;
        notvegan.length = 2;
        let mealArray = vegan.concat(notvegan);
        console.log(mealArray);
        setMealInfo(mealArray);
      })
    );
  };

  useEffect(() => {
    getMealData();
  }, []);

  return <main>{mealInfo && <MealList mealInfo={mealInfo} />}</main>;
}

export default MealListContainer;
