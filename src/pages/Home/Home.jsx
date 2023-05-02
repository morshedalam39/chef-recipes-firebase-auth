import React from 'react';
import Banner from './Home/Banner/Banner';
import Chef from '../Chef/Chef';
import Location from '../Location/Location';
import Discount from './Discount/Discount';

const Home = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 bg-slate-200 z-10'>
            <Banner></Banner>
            <Chef></Chef>
            <Location></Location>
            <Discount></Discount>
        </div>
    );
};

export default Home;