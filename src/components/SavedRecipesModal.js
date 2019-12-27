import React from "react";
import RecipesList from "./RecipesList";
import "./SavedRecipesModal.css";

const SavedRecipesModal = ({ closeModalFn, recipes, isModalOpen }) => {
  return (
    <div
      className={isModalOpen ? "modal-container active" : "modal-container"}
      onClick={closeModalFn}
    >
      <div className="modal-background">
        <div className="modal">
          <RecipesList recipes={recipes} />
        </div>
      </div>
    </div>
  );
};

export default SavedRecipesModal;
