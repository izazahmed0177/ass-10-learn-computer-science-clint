import React from 'react';
import { Link } from 'react-router-dom';

const SideCourseName = ({course}) => {
    const {id,name}=course;
    return (
        <section className="p-0 my-2 dark:dark:bg-gray-800 dark:dark:text-gray-100">

	           <div className="container grid grid-rows-1  mx-auto sm:grid-rows-1 xl:grid-rows-1">

      

		<Link to={`/course/${id}`} className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				
				<p className="capitalize">{name}</p>
			</div>
		</Link>	
		
	</div>
</section>
    );
};

export default SideCourseName;