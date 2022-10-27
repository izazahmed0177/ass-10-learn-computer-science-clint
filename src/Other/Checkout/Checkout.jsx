import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const checkout=useLoaderData();

    const {user}=useContext(AuthContext);
    const{_id,course_id,name,img,details,price,teacher}=checkout
    return (
        <div>
            {/* <h1>Checkout</h1>
            <h2>{name}</h2> */}

            <div className='flex justify-center'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<span className="text-sm font-semibold"> User Name: {user?.displayName}</span>
			<span className="text-xs text-gray-400">User ID: {user?.uid}</span>
		</div>
	</div>
	<div>
    <h2 className="mb-1 text-xl font-semibold">Course ID: {course_id}</h2>

		<img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">Course Name: {name}</h2>
		<p className="text-sm text-gray-400">{details}</p>
        <h4 className="mb-1 text-xl font-semibold">Teacher: {teacher}</h4>
        <h4 className="mb-1 text-xl font-semibold">Price: $ {price}</h4>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="space-x-2">
			
			
		</div>
		<div className="flex space-x-2 text-sm text-gray-400">
			
			
		</div>
	</div>
</div>
            </div>
        </div>
    );
};

export default Checkout;