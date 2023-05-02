import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ChefDetails from '../../ChefDetails/ChefDetails';

const ChefCard = ({chef}) => {
    const {id ,chefPicture , chefName,yearsOfExperience, numberOfRecipes, likes}=chef;
    
    return (
        <div >
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={chefPicture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {chefName}
    </h2>
    <div className='flex justify-between'>
    <p>Experience: {yearsOfExperience}</p>
    <p>Recipes: {numberOfRecipes}</p>
    </div>
    <div className=' flex justify-start'>
        <p><FaThumbsUp></FaThumbsUp></p>
        <p>{likes}</p>
        
    </div>
    <div className="card-actions justify-end mt-5">
    <Link to={`/chefDatils/${id}`}><button className="btn bg-slate-500">View Recipes</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ChefCard;