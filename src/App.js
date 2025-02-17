import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <>
    <h1>Welcome Hats Page</h1>
  </>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
