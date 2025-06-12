import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utility/addToDb';

const DashBoard = () => {

    const [cart, setCart] = useState([])
    const allProduct = useLoaderData()
    let totalPrice = 0
    useEffect(() => {
        const storedProduct = getStoredCart()
        const storedProductId = storedProduct.map(id => id[0])

        const cartList = allProduct.filter(p => storedProduct.includes(p.product_id))
        setCart(cartList)
        // totalPrice += cartList.price

    }, [])
    cart.map((cart) => totalPrice += cart.price)

    // console.log(totalPrice)



    return (
        <Tabs>
            {/* Header and tab list */}
            <div className='bg-[#9330E4] min-h-[250px] pt-16 rounded-xl text-center space-y-5'>
                <h3 className='font-bold text-2xl'>Dashboard</h3>
                <p className='w-2/4 mx-auto'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    the coolest accessories, we have it all!
                </p>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
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
                                <button className="btn btn-outline btn-secondary rounded-3xl">Sort by Price</button>
                                <button className="btn btn-secondary rounded-3xl">Purchase</button>
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
                    <WishList></WishList>
                </TabPanel>
            </div>
        </Tabs>

    );
};

export default DashBoard;