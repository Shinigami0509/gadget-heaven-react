import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="bg-[#9330E4] min-h-[700px] pt-16 rounded-b-2xl">
                <div className="flex justify-center text-center items-start">
                    <div className="w-3/4  space-y-3 relative">
                        <h1 className="text-5xl font-bold w-3/4 mx-auto">Upgrade Your Tech
                            Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 w-3/4 mx-auto">Explore the latest gadgets that will
                            take your experience to the next level. From smart
                            devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary font-bold text-lg 
                        border-none rounded-full bg-white text-[#9330E4]">
                            Shop Now</button>
                        <div className='absolute top-72 w-3/4 left-1/2 bg-gradient-to-b from-white/50 to-transparent
                        -translate-x-1/2 p-4 border border-white rounded-2xl'>
                            <img className='rounded-2xl' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;