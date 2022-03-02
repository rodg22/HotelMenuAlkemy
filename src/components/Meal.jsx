import { useState, useEffect } from "react";
import { useMenu } from "../context/MenuContext";
import { Link } from "react-router-dom";
import "./Meal.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function Meal({ id, readyInMinutes, title }) {
  const [mealDetail, setMealDetail] = useState([]);

  const { addItem } = useMenu();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=c42f8612fdc949fdbaab1dfffee48ed7&includeNutrition=false`
      )
      .then((response) => {
        if (response.data !== []) {
          setMealDetail(response.data);
        }
      });
  }, [id]);

  useEffect(() => {
    addItem(mealDetail);
  }, [mealDetail]);

  return (
    <>
      <Col>
        <Card>
          {mealDetail.vegan ? <Badge bg="success">veggie</Badge> : null}
          <Card.Img variant="top" src={mealDetail.image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>id: {id}</Card.Text>
            <Button variant="danger">Delete</Button>{" "}
            <Button variant="primary">
              <Link className="link" to={`/meal/${id}`}>
                See more
              </Link>
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
