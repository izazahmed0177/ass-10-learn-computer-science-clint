import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    const {id,name,img}=course;
    return (
      
		<div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="dark:dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
	</div>
</div>

         








           
          
      
    );
};

export default Courses;