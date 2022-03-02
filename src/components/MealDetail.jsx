import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MealDetail = ({
  id,
  title,
  readyInMinutes,
  pricePerServing,
  healthScore,
  image,
  children,
}) => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>ID: {id}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img
            style={{ width: "18rem", textAlign: "center", margin: "auto" }}
            variant="top"
            src={image}
          />
          <Card.Text>{children}</Card.Text>
          <Card.Text>Prepare time: {readyInMinutes} minutes</Card.Text>
          <Card.Text>Price: $ {pricePerServing}</Card.Text>
          <Card.Text>Health Score: {healthScore}</Card.Text>
          <Button variant="primary">
            <Link className="link" to={"/"}>
              Go back to the menu
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MealDetail;
