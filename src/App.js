import "./App.css";
import Login from "./components/Login";
import MealListContainer from "./components/MealListContainer";

function App() {
  const alkemyToken = localStorage.getItem("alkemyToken");
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
