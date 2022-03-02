import "./App.css";
import Login from "./components/Login";
import MealListContainer from "./components/MealListContainer";
import { MenuProvider } from "./context/MenuContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealDetailContainer from "./components/MealDetailContainer";

function App() {
  const alkemyToken = localStorage.getItem("alkemyToken");

  return (
    <div className="App">
      <MenuProvider>
        <BrowserRouter>
          <header>
            <nav>HOTEL MENU</nav>
          </header>
          <Routes>
            <Route
              exact
              path="/"
              element={!alkemyToken ? <Login /> : <MealListContainer />}
            />
            <Route exact path="/meal/:id" element={<MealDetailContainer />} />
            {/* <Route exact path="/form" element={<Form />}/>*/}
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </div>
  );
}

export default App;
