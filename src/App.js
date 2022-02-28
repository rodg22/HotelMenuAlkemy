import "./App.css";
import AllVeganData from "./Services/AllVeganData";
import AllNotVeganData from "./Services/AllNotVeganData";
import Login from "./components/Login";
import MealListContainer from "./components/MealListContainer";

function App() {
  const alkemyToken = localStorage.getItem("alkemyToken");
  AllVeganData();
  AllNotVeganData();
  return (
    <div className="App">
      <header>
        <nav>HOTEL MENU</nav>
      </header>
      {!alkemyToken ? <Login /> : <MealListContainer />}
    </div>
  );
}

export default App;
