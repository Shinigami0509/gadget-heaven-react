import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({gadget}) => {
    
    const {product_id, product_image,product_title,  price  } =gadget
    
    return (
        <div>
            <div className='border border-white/50 p-5 rounded-xl space-y-3'>
                <img className='w-full h-56 rounded-lg object-cover mx-auto' src={product_image} alt="" />
                <h3 className='text-lg font-bold'>{product_title}</h3>
                <p className=''>Price: ${price}</p>
                <Link to={`/gadgets/${product_id}`}><button className="btn btn-outline btn-primary rounded-full">View Details</button></Link>
            </div>
        </div>
    );
};

export default Gadget;