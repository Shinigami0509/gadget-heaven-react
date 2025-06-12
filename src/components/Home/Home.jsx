import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center text-4xl font-bold mt-[400px] text-black'>Explore Cutting-Edge Gadgets</h2>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;