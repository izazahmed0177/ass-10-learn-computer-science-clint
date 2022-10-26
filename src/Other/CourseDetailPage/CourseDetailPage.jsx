import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetailPage = () => {
    const course=useLoaderData();
    const{_id,course_id,name,img}=course
    return (
        <div className='flex justify-center'>


        <div className="max-w-3xl max-h-8xl overflow-hidden bg-white rounded-lg shadow-md bg-gray-800">
        <img className="object-cover w-full h-64" src={img} alt="Article"/>
    
        <div className="p-6">
            <div>
                
                <h1 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform text-gray-800 hover:text-gray-600 hover:underline" tabindex="0" role="link">{name}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>
    
            <div className="mt-4">
                <div className="flex items-center">


                    {/* <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                    </div> */}
                    {/* <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span> */}
                </div>

            </div>
        </div>
    </div>


    </div>
    );
};

export default CourseDetailPage;