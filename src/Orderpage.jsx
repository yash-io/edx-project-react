import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Orderpage() {
    const location = useLocation();
    const { products } = location.state || { products: [] };

    const selectedProducts = products.filter(product => product.cart);

    return (
        <div className='text-xl flex flex-col justify-center items-center bg-gray-200 min-h-screen'>
            <h1 className=''>Order Summary</h1>
            <ul>
                {selectedProducts.map(product => (
                    <li key={product.name} className='font-bold mt-2 mb-2'>
                        {product.name}: {product.price}
                    </li>
                ))}
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Checkout</button>
        </div>
    );
}