import React, { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeInfo = ({ recipe }) => {
  console.log(recipe);

  const { recipe_name, ingredients, rating, cooking_method } = recipe[0];

  const handelToast = ()=>toast("Wow so easy!");
  

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-5">
      {recipe.map((r) => (
        <div key={r.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Name: {recipe_name}</h2>
              <p>Cooking Method: {cooking_method}</p>
              <p className="font-semibold">
                Ingredients
                {ingredients.map((i) => (
                  <li key={i.id}>{i}</li>
                ))}
              </p>
              <div className="card-actions justify-start flex items-center">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={Math.round(rating || 0)}
                  readOnly
                />
                <span className=""> {rating}</span>
              </div>
              <div className="card-actions justify-end">
                <button onClick={handelToast} className="btn bg-slate-500">Favorite</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeInfo;
