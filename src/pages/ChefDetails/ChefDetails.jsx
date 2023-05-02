import React, { useEffect } from 'react';

const ChefDetails = (id) => {
    
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
      }, []);
    return (
        <div>
            <h1>details is comeing</h1>
        </div>
    );
};

export default ChefDetails;