import "./App.css";
import Login from "./components/Login";
import MealListContainer from "./components/MealListContainer";
import { MenuProvider } from "./context/MenuContext";

function App() {
  const alkemyToken = localStorage.getItem("alkemyToken");

  return (
    <div className="App">
      <MenuProvider>
        <header>
          <nav>HOTEL MENU</nav>
        </header>
        {!alkemyToken ? <Login /> : <MealListContainer />}
      </MenuProvider>
    </div>
  );
}

export default App;
