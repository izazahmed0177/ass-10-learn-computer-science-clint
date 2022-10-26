import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout=useLoaderData();
    const{_id,course_id,name,img,details,price,teacher}=checkout
    return (
        <div>
            <h1>Checkout</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default Checkout;