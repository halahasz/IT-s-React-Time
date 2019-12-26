import React from "react";
import RecipeList from "./RecipesList";
import SearchBar from "./SearchBar";
import recipes from "../API/recipepuppy";
import "./App.css";

class App extends React.Component {
  state = {
    recipes: [],
    ingredients: "",
    title: "",
    numberOfPages: 1
  };

  componentDidMount() {
    this.fetchRecipes();
  }
  fetchRecipes = async (ingredients, title) => {
    const response = await recipes.get("/", {
      params: {
        i: ingredients,
        q: title
      }
    });
    console.log(response);
    this.setState({
      recipes: response.data.results,
      ingredients,
      title
    });
    if (this.state.recipes.length < 10) {
      document.querySelector(".more").style.display = "none";
    } else {
      document.querySelector(".more").style.display = "block";
    }
  };

  fetchMoreRecipes = async numberOfPages => {
    numberOfPages = this.state.numberOfPages + 1;
    try {
      const response = await recipes.get("/", {
        params: {
          i: this.state.ingredients,
          q: this.state.title,
          p: numberOfPages
        }
      });
      this.setState({
        recipes: [...this.state.recipes, ...response.data.results],
        numberOfPages
      });
      if (this.state.recipes.length % 10 !== 0 || response.data.results === 0) {
        document.querySelector(".more").style.display = "none";
      } else {
        document.querySelector(".more").style.display = "block";
      }
      console.log(response);
    } catch {
      document.querySelector(".more").style.display = "none";
    }
  };

  render() {
    return (
      <div className="app">
        <header>
          <div className="header-container">
            <SearchBar
              labels={["titles:", "ingredients:"]}
              onFormSubmit={this.fetchRecipes}
            />
            <div className="results">
              <p>
                Results for title: <span>{this.state.title}</span> ingredients:
                <span>{this.state.ingredients}</span>
              </p>
              <p className="results__found">
                Found {this.state.recipes.length} recipes
              </p>
            </div>
          </div>
        </header>
        <main>
          <RecipeList recipes={this.state.recipes} />
          <button
            className="form__button more"
            type="button"
            onClick={this.fetchMoreRecipes}
          >
            See more
          </button>
        </main>
      </div>
    );
  }
}

export default App;