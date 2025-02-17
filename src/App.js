import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Route, Routes } from "react-router-dom";

const HatsPage = () => (
  <>
    <h1>Welcome Hats Page</h1>
  </>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/hats" Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
