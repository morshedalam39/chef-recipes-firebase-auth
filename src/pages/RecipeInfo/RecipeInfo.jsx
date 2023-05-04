import React from "react";

import RecipeCard from "../Chef/RecipeCard/RecipeCard";

const RecipeInfo = ({ recipe }) => {


  return (
    <div className="grid md:grid-cols-3 gap-6 mt-5">
      {recipe.map((r) => (
        <RecipeCard key={r.id} recipe={r}>
          
        </RecipeCard>
      ))}
       
    </div>

  );
};

export default RecipeInfo;
