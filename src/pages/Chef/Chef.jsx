import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';

const Chef = () => {
    const [chefData , setChefData]=useState([]);
    // const ChefData= useLoaderData();
    // console.log(ChefData);

    useEffect(() => {
        fetch("http://localhost:5000/chef")
          .then((result) => result.json())
          .then((data) => setChefData(data));
      }, []);
      console.log(chefData);
    return (
        <div className='grid md:grid-cols-3 gap-6 mt-5'>
            {
                chefData.map((chef) => (
                    <ChefCard
                    key={chef.id}
                    chef={chef}
                    
                    ></ChefCard>
                  ))
            }
        </div>
    );
};

export default Chef;