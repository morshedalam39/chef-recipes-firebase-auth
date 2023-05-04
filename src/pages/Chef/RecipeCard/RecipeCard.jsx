import React, { useState } from 'react';
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@smastrom/react-rating/style.css";

const RecipeCard = ({recipe}) => {
    const { recipe_name, ingredients, rating, cooking_method } = recipe;
    const [hide , setHide]=useState(false);

    const handelToast = ()=>{
        toast("Favorite Items Added Successfully");
        setHide(true)
      }
    return (
        <div>
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
               
              
                  <button onClick={()=> handelToast()} className= {` ${hide? "disabled" :""} btn bg-slate-500`} disabled={hide}>Favorite</button>
               
               
              </div>
            </div>
          </div> 
          <ToastContainer />
        </div>
    );
};

export default RecipeCard;