import Meal from "./Meal";
import Row from "react-bootstrap/Row";

export default function MealList({ mealInfo }) {
  return (
    <section>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {mealInfo.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </Row>
    </section>
  );
}
