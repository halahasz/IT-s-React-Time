import React, { Component } from "react";
import Recipe from "./Recipe";
import "./RecipesList.css";

class RecipeList extends Component {
  render() {
    return (
      <div className="recipeList">
        {this.props.recipes.map(recipe => (
          <Recipe key={recipe.href} {...recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;