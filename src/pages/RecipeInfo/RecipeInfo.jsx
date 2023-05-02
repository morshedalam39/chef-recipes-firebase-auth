import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeInfo = ({recipe}) => {
    // const recipe= useLoaderData();
    // const id =useParams();
    // console.log(id);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/details/${parseInt(id)}`)
    //       .then((result) => result.json())
    //       .then((data) => console.log(data));
    //   }, [id]);
    console.log(recipe);
    
    return (
        <div>
            {
                recipe.map((r) => <div><h1>{r.recipe_name}</h1></div>
                    
                )
            }
        </div>
    );
};

export default RecipeInfo;