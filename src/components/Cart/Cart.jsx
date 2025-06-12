import { getStoredCart } from '../../utility/addToDb';

const Cart = ({cart}) => {

    let totalPrice =0
    totalPrice = totalPrice + cart.price
   console.log(totalPrice)

    return (
        <div className='max-w-7xl mx-auto'>
            <h2>cart is connected</h2>
        </div>
    );
};

export default Cart;