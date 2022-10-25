import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const AllCourse = () => {
    const allCourse=useLoaderData();
    return (
        <div>
            <h2>total course: {allCourse.length}</h2>
            {
                allCourse.map(course=><Courses key={course.id} course={course}></Courses>)
            }
            
        </div>
    );
};

export default AllCourse;