import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard/ChefCard";

const Chef = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-morshedalam39.vercel.app/chef")
      .then((result) => result.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <> 
        <h1 className="text-center text-4xl font-bold py-8">
        OUR CHEF
          <hr className="w-24 mt-2 border-[3px] mx-auto border-cyan-600" />
        </h1>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </>
  );
};

export default Chef;
