import axios from "axios";

export default async function AllVeganData() {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f70067f78248078e71a58983a18e5f&number=2&diet=vegan&addRecipeInformation=true`
  );
  const apiInfo = await apiUrl.data.results.map((el) => {
    return {
      id: el.id,
      name: el.title,
      summary: el.summary,
      diets: el.diets.map((d) => {
        return { name: d };
      }),
      healthScore: el.healthScore,
      price: el.pricePerServing,
      image: el.image,
    };
  });
  console.log(apiInfo);
  return apiInfo;
}
