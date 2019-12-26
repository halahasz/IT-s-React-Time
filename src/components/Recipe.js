import React, { Component } from "react";
import "./Recipe.css";
import icon from "../assets/tab-icon.png";

class Recipe extends Component {
  state = {
    title: this.props.title,
    href: this.props.href,
    thumbnail: this.props.thumbnail,
    ingredients: this.props.ingredients,
    saved: true
  };

  saveRecipe = e => {
    this.props.onSaveRecipe(this.state);
    this.setState({
      saved: !this.state.saved
    });
    this.state.saved
      ? (e.target.parentNode.className = "recipe__clicked")
      : (e.target.parentNode.className = "recipe__save");
  };
  render() {
    const { title, href, thumbnail, ingredients } = this.props;
    return (
      <div className="recipe">
        <div className="recipe__content">
          <div className="recipe__save" onClick={this.saveRecipe}>
            <div
              className="recipe__save-icon"
              style={{ backgroundImage: "url(" + icon + ")" }}
              title="Save recipe"
            ></div>
          </div>
          <a href={href} className="recipe__link">
            {thumbnail ? (
              <div
                className="recipe__img"
                style={{
                  backgroundImage: "url(" + thumbnail + ")",
                  color: "black"
                }}
              ></div>
            ) : null}

            <div className="recipe__text">
              <h2 className="recipe__title">{title}</h2>
              <p className="recipe__ingredients">
                <span>Ingredients:</span> - {ingredients}
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Recipe;
