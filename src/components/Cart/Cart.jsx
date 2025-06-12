import { getStoredCart, updateCart } from '../../utility/addToDb';

const Cart = ({ cart }) => {

    const { product_id, product_title, product_image, price, description } = cart
    const handleDelete = (id)=>{
        updateCart(id)
    }
    return (
        <div>
            <div className='flex justify-between border border-white p-3 rounded-lg'>
                <div className='flex'>
                    <img className='w-3/12 m-3 h-[125px] object-cover rounded-lg' src={product_image} alt="" />
                    <div className='space-y-2 my-auto ml-3'>
                        <h3 className='text-3xl font-bold'>{product_title}</h3>
                        <p>{description}</p>
                        <p className='font-bold'>Price: $ {price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleDelete(product_id)} className="btn btn-circle btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Cart;