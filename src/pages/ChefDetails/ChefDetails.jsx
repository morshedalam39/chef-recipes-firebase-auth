import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = () => {


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
        <div className="card-body lg:w-6/12">
          <h2 className="card-title">Name: {chefName}</h2>
          <p>{descriptionForFoods}</p>
          <div className='font-semibold'>
    <p className='mt-2'>Experience: {yearsOfExperience}</p>
    <p>Recipes: {numberOfRecipes}</p>
    </div>
          <div className="card-actions justify-end">
          <FaThumbsUp></FaThumbsUp><span className='text-base text-black font-semibold'>{likes}</span>
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
