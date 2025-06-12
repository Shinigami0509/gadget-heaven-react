import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import Category from '../Category/Category';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('gadget.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div>
            <div className='flex my-10 mx-5'>
                <div className='w-2/12'>
                    {
                        gadgets.map(gadget => <Category key={gadget.product_id} gadget={gadget} ></Category>)
                    }
                </div>
                <div className='w-10/12 grid grid-cols-3 gap-4'>
                    {
                        gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} ></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;