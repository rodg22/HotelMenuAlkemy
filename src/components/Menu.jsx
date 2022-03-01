import { useEffect, useState } from "react";
import { useMenu } from "../context/MenuContext";
import Button from "react-bootstrap/Button";
import "./Menu.css";

export default function Menu() {
  const { menu, setMenu } = useMenu();
  const [totalPrice, setTotalPrice] = useState([]);
  const [preparationTime, setPreparationTime] = useState([]);
  const [healthScore, setHealthScore] = useState([]);

  useEffect(() => {
    setTotalPrice(
      menu.reduce((acc, el) => acc + el.pricePerServing, 0).toFixed(2)
    );
  }, [menu]);

  useEffect(() => {
    setPreparationTime(
      Math.round(
        menu.reduce((acc, el) => acc + el.readyInMinutes / menu.length, 0)
      )
    );
  }, [menu]);

  useEffect(() => {
    setHealthScore(
      Math.ceil(menu.reduce((acc, el) => acc + el.healthScore / menu.length, 0))
    );
  }, [menu]);

  return (
    <>
      {menu.length === 5 ? (
        <Button
          variant="success"
          onClick={() => setMenu([...menu].slice(1, [...menu].length))}
        >
          See totals
        </Button>
      ) : null}

      {menu.length >= 1 && menu.length <= 4 ? (
        <div className="div-resultados">
          <div>
            Total Price: <span className="bold">$ {totalPrice}</span>
          </div>
          <div>
            Average preparation time:
            <span className="bold"> {preparationTime} minutes</span>.
          </div>
          <div>
            Average health score:
            <span className="bold"> {healthScore} points</span>.
          </div>
        </div>
      ) : null}
    </>
  );
}
