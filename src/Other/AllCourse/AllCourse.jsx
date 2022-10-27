import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import SideCourseName from '../SideCourseName/SideCourseName';

const AllCourse = () => {
    const allCourse=useLoaderData();
    return (
        <div>
            <div className="space-y-4 text-center mb-3">
			    <h3 className="text-2xl font-bold leading-none sm:text-5xl">Check out our courses</h3>
			     <p className=" text-center text-black">By completing the tricks here,<br /> you can make yourself proficient in computer science and keep yourself ahead in information technology in today's world.</p>
		    </div>
             <div className=' container grid xl:grid-cols-4 md:grid-cols-4 gap-2 mx-6 sm:grid-cols-1'>
            <div className="...">
                <div className='container space-y-2 sm:p-10'>

                {
                    allCourse.map(course=> <SideCourseName key={course.id} course={course}></SideCourseName>)
                }
                </div>
               

            
            </div>

            
            <div className="col-span-3 ...">

            <div className="container p-4 mx-auto space-y-16 sm:p-10">
       

		
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {
                allCourse.map(course=><Courses key={course.id} course={course}></Courses>)
            }


        </div>


		</div>

            </div>

            



            </div>




            {/* <h2>total course: {allCourse.length}</h2> */}
          
            
        </div>
    );
};

export default AllCourse;