import { useState, useEffect } from "react";
import { useMenu } from "../context/MenuContext";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function Meal({ meal }) {
  const [mealDetail, setMealDetail] = useState([]);

  // const { addItem, menu } = useMenu();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d1f70067f78248078e71a58983a18e5f&includeNutrition=false`
      )
      .then((response) => {
        console.log(response.data);
        setMealDetail(response.data);
      });
  }, [meal.id]);

  return (
    <>
      <Col>
        <Card>
          {mealDetail.vegan ? <Badge bg="success">veggie</Badge> : null}
          <Card.Img variant="top" src={mealDetail.image} />
          <Card.Body>
            <Card.Title>{meal.title}</Card.Title>
            {/* <Card.Text>{mealDetail.summary}</Card.Text> */}
            <Card.Text>Prepare time: {meal.readyInMinutes} minutes</Card.Text>
            <Card.Text>Price: $ {mealDetail.pricePerServing}</Card.Text>
            <Card.Text>Health Score: {mealDetail.healthScore}</Card.Text>
            <Card.Text>id: {meal.id}</Card.Text>
            <Button variant="danger">Delete</Button>{" "}
            <Button variant="primary">See more</Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
