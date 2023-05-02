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
    <h2 className="card-title">Name: {chefName}
    </h2>
    <div className='font-semibold'>
    <p className='mt-2'>Experience: {yearsOfExperience}</p>
    <p>Recipes: {numberOfRecipes}</p>
    </div>
    <div className='  '>
        <div className=' '>
        <p  className='text-2xl flex items-center gap-3 text-slate-500 '><FaThumbsUp></FaThumbsUp><span className='text-base text-black font-semibold'>{likes}</span></p>
        
        </div>
        
    </div>
    <div className=" card-actions justify-end mt-5">
    <Link to={`/chefDatils/${id}`}><button className="btn bg-slate-500">View Recipes</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ChefCard;