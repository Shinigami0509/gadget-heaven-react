import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import cart from '../../assets/shopping-cart.png'
import wishlist from '../../assets/wishlist.png'
import { addtoStoredCart, addtoStoredWishList } from '../../utility/addToDb';


const GadgetDetails = () => {
    const { product_id } = useParams()
    const data = useLoaderData()

    const gadget = data.find((gadget) => gadget.product_id === product_id)
    const { product_id: p_id, product_image, product_title, price, description, specification, availability, rating } = gadget

    const handleMarkAsCart = (id) =>{
        addtoStoredCart(id)
    }
    const handleMarkAsWish = (id) =>{
        addtoStoredWishList(id)
    }

    return (
        <div>
            <div className="bg-[#9330E4] min-h-[500px] pt-16 rounded-xl">
                <div className="flex justify-center items-start">
                    <div className="w-3/4  space-y-3 relative">
                        <h1 className="text-4xl font-bold text-center">Product Details</h1>
                        <p className="py-6 w-2/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart
                            devices to the coolest accessories, we have it all!
                        </p>
                        <div className='md:absolute top-48 w-3/4 left-1/2 bg-white text-black
                                        -translate-x-1/2 p-4 border border-white rounded-2xl '>
                            <div className='flex '>
                                <div className='w-2/4 my-auto pl-10'><img src={product_image} alt="" /></div>
                                <div className='w-2/4 pl-5 space-y-2'>
                                    <h2 className='font-bold text-3xl'>{product_title}</h2>
                                    <h3 className='font-semibold text-lg'>Price: ${price}</h3>
                                    <div className="badge badge-accent badge-outline bg-green-200 text-green-600">{availability}</div>
                                    <p className='text-lg font-light'>{description}</p>
                                    <ol className='list-decimal pl-5'>
                                        <h4 className='font-semibold text-lg'>Specification:</h4>
                                        {
                                            specification.map((s, index) => <li key={index}>{s}</li>)
                                        }
                                    </ol>
                                    <h4 className='font-semibold text-lg'>Rating</h4>
                                    <div className='flex gap-3'>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                                        </div>
                                        <p className='rounded-3xl p-1 bg-white/20'>{rating}</p>
                                    </div>
                                    <div>
                                        <div className="space-x-2 mb-5">
                                            <button onClick={()=>handleMarkAsCart(product_id)} className="btn btn-ghost bg-[#9330E4] rounded-3xl p-3">
                                               Add to Cart   <img className='w-5' src={cart} alt="" />
                                            </button>
                                            <button onClick={()=>handleMarkAsWish(product_id)} className="btn btn-ghost btn-circle bg-white p-1">
                                              <img className='w-3/4' src={wishlist} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[600px]'></div>
        </div>
    );
};

export default GadgetDetails;