import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utility/addToDb';
import success from '../../assets/Group.png'

const DashBoard = () => {

    const [cart, setCart] = useState([])
    const allProduct = useLoaderData()
    let totalPrice = 0
    useEffect(() => {
        const storedProduct = getStoredCart()

        const cartList = allProduct.filter(p => storedProduct.includes(p.product_id))
        setCart(cartList)
    }, [])
    cart.map((cart) => totalPrice += cart.price)
    const handlePurchase = () => {
        localStorage.removeItem('cart-list');
        document.getElementById('modal').showModal()

    }
    const handleSort = () => {
        const sortedCart = [...cart].sort((a, b) => a.price - b.price)
        setCart(sortedCart)
    }



    return (
        <div>
            <Tabs>
                {/* Header and tab list */}
                <div className='bg-[#9330E4] min-h-[250px] pt-16 rounded-xl text-center space-y-5'>
                    <h3 className='font-bold text-3xl'>Dashboard</h3>
                    <p className='w-2/4 mx-auto'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        the coolest accessories, we have it all!
                    </p>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>
                </div>

                {/* Panel outside the colored div */}
                <div className="mt-6">
                    <TabPanel>
                        <div className='max-w-7xl mx-auto'>
                            <div className='flex justify-between font-bold text-2xl'>
                                <h2>Cart</h2>
                                <div className='flex gap-4 items-center'>
                                    <p>Total cost: {totalPrice}</p>
                                    <button onClick={handleSort} className="btn btn-outline btn-secondary rounded-3xl">Sort by Price</button>
                                    <button onClick={handlePurchase} className="btn btn-secondary rounded-3xl">Purchase</button>
                                </div>
                            </div>

                            <div className='space-y-4 my-8'>
                                {
                                    cart.map((cart) => <Cart key={cart.product_id} cart={cart}> </Cart>)
                                }
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mx-auto'>
                            <div className='flex justify-between font-bold text-2xl'>
                                <h2>Wish List</h2>
                            </div>

                            <div className='space-y-4 my-8'>
                                <WishList></WishList>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('modal').showModal()}>open modal</button> */}
            <dialog id="modal" className="modal">
                <div className="modal-box">
                    <div className='text-center space-y-3'>
                        <img className='mx-auto' src={success} alt="" />
                        <h3 className='text-2xl font-bold'>Payment Successful</h3>
                        <p className='pt-4'>Thanks for purchasing</p>
                        <p>Total: {totalPrice}</p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className='w-full rounded-3xl'>
                            <Link to='/'><button className="btn w-full rounded-3xl">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DashBoard;