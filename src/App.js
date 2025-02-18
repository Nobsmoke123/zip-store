import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { Route, Switch } from "react-router-dom";

import { ShopPage } from "./pages/shop/shop.component";

// const HatsPage = () => (
//   <>
//     <h1>Welcome Hats Page</h1>
//   </>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
