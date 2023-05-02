import React from 'react';
import Banner from './Home/Banner/Banner';
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <Banner></Banner>
            <Chef></Chef>
        </div>
    );
};

export default Home;