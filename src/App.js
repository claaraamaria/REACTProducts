import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/products">
          <ProductsPage />
        </Route>

        <Route>This is 404 page!!</Route>
      </Switch>
    </div>
  );
}

export default App;
