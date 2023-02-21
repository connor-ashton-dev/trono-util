import React, { useState } from 'react';
import { productData } from './data';


function MakeStuff({ cart, setCart, setSubmitted, setDiscount, discount, ppe, setPPE, setProceed }) {
    const [model, setModel] = useState('ALPHA PRO');
    const [quantity, setQuantity] = useState('');

    const updateCart = () => {

        var result = productData.filter(obj => {
            return obj.ProductName === model
        })
        console.log(result);

        setCart((oldCart) => [
            ...oldCart,
            {
                data: result[0],
                quantity: quantity
            }
        ]);
    };

    const handleChange = (event) => {
        setModel(event.target.value);
        setQuantity('');
    };

    const removeItem = (itemName) => {
        let filteredArray = cart.filter((item) => item.data.ProductName !== itemName);
        setCart(filteredArray);
    };

    return (
        <div
            className={'w-screen h-screen flex items-center flex-col'}
        >
            <div className='flex justify-start w-full p-5'>
                <button className='bg-slate-700 p-2 text-white rounded-lg' onClick={() => setProceed(false)}>Go back</button>
            </div>
            <div className="flex flex-row items-center justify-center pt-24 gap-16">
                <h1 className="text-2xl">Cart Details</h1>
            </div>

            <div className="flex flex-col gap-y-5 pt-36">
                <input
                    placeholder="Price per item"
                    className="border border-black pl-2 py-3 w-40 rounded-lg"
                    value={ppe}
                    onChange={(e) => setPPE(e.target.value)}
                />
                <input
                    placeholder="Discount (leave empty for $0)"
                    className="border border-black pl-2 py-3 w-80 rounded-lg"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />
                <div className="flex flex-row items-center gap-x-5">
                    <label htmlFor="model">Model:</label>
                    <select
                        name="Model"
                        id="Model"
                        className="border border-black py-2 rounded-md"
                        onChange={handleChange}
                    >
                        {productData.map((item, index) => (
                            <option key={index} value={item.ProductName}>
                                {item.ProductName}
                            </option>
                        ))}
                    </select>
                    <input
                        placeholder="Quantity"
                        className="border border-black pl-2 py-2 w-40 rounded-lg"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                        className="bg-slate-700 px-5 py-2 text-white font-bold rounded-md"
                        onClick={updateCart}
                    >
                        Add
                    </button>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h1 className="font-bold">Your Cart (Click to Remove)</h1>
                    {cart.map((item, index) => (
                        <div key={index} onClick={() => removeItem(item.data.ProductName)}>
                            <h1>
                                {item.data.ProductName} x{item.quantity}
                            </h1>
                        </div>
                    ))}
                    <button className="bg-slate-700 px-5 py-2 text-white font-bold rounded-md mt-16" onClick={() => {
                        setSubmitted(true)
                    }}>
                        Submit Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MakeStuff;
