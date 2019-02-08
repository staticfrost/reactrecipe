import React, { Component } from "react";

import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: [],
    url:
      "https://www.food2fork.com/api/search?key=1af908314527e129a0a5951522ab31c0"
  };

  render() {
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
