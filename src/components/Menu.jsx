import { useMenu } from "../context/MenuContext";
import Button from "react-bootstrap/Button";

export default function Menu() {
  const { menu, setMenu } = useMenu();

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
        <>
          <div>
            Total Price: $
            {menu.reduce((acc, el) => acc + el.pricePerServing, 0).toFixed(2)}
          </div>
          <div>
            Average preparation time:{" "}
            {Math.round(
              menu.reduce((acc, el) => acc + el.readyInMinutes / menu.length, 0)
            )}{" "}
            minutes.
          </div>
          <div>
            Average health score:{" "}
            {Math.ceil(
              menu.reduce((acc, el) => acc + el.healthScore / menu.length, 0)
            )}{" "}
            points.
          </div>
        </>
      ) : null}
    </>
  );
}
