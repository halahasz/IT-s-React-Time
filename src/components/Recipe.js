import React, { Component } from "react";
import "./Recipe.css";
import icon from "../assets/tab-icon.png";

class Recipe extends Component {
  render() {
    const { title, href, thumbnail, ingredients } = this.props;
    return (
      <div className="recipe">
        <div className="recipe__content">
          <div className="recipe__save">
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
