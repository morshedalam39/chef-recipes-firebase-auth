import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const ChefDetails = () => {
  // const [ChefDetails , setChefDetails]=useState();
  // const {}=ChefDetails

  // useEffect(() => {
  //     fetch(`http://localhost:5000/chef/${id}`)
  //     .then((res) => res.json())
  //     .then((data) =>console.log(data));
  //   }, []);

  const [ChefDetails , recipe] = useLoaderData();
//   console.log(chef);
  console.log(recipe);

  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    descriptionForFoods,
  } = ChefDetails;
  console.log(ChefDetails);

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 bg-slate-200">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-6/12">
          <img className="h-80" src={chefPicture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div>
        <RecipeInfo recipe={recipe}></RecipeInfo>
      </div>
    </div>
  );
};

export default ChefDetails;
