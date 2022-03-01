import {
  AddIngredientPage,
  HomePage,
  RecipeSearchPage,
  ShoppingListPage,
} from "./componentIndex";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";

const routes = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
  },
  {
    path: "/add-ingredients",
    Component: AddIngredientPage,
    exact: true,
  },
  {
    path: "/recipe-search",
    Component: RecipeSearchPage,
    exact: true,
  },
  {
    path: "/shopping-list",
    Component: ShoppingListPage,
    exact: true,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
