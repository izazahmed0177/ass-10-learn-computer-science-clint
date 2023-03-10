import React from 'react';
import ReactToPrint from 'react-to-print';
// import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import { FaFilePdf, FaPrint, IconName } from "react-icons/fa";

const CourseDetailPage = () => {
    const course=useLoaderData();

	const printRef=useRef()
	const pdfRef=useRef()
	const options = {
		orientation: 'vertical',
		// unit: 'in',
		// format: [4,2]
	};



    const{_id,course_id,name,img,details,price,teacher}=course;


    return (
        <div className='mt-6'>

			<div className='m-5'>
				<ReactToPrint  trigger={() => <button className='inline-block px-5 py-3 m-4 font-semibold tracking-wider text-center rounded bg-gray-900 text-white hover:bg-gray-700'><div className='flex gap-1 justify-center text-center align-middle'><p>Print</p><FaPrint className='mt-1'></FaPrint></div> </button>} content={() => printRef.current}
				></ReactToPrint>


				<ReactToPdf targetRef={pdfRef} filename="div-blue.pdf" options={options}>
				{({toPdf}) => (
            // <button onClick={toPdf}>Generate pdf</button>
			<button onClick={toPdf} className='inline-block px-5 py-3 m-4 font-semibold tracking-wider text-center rounded bg-gray-900 text-white hover:bg-gray-700'><div className='flex gap-1 justify-center text-center align-middle'><p>Generate pdf</p><FaFilePdf className='mt-1'></FaFilePdf></div> </button>
        )}

				</ReactToPdf>
				
			</div>

			<div ref={printRef} className='print-detail'>


			

        
        <div   className='flex justify-center'>


        <div className="max-w-3xl max-h-8xl overflow-hidden bg-violet-400 rounded-lg shadow-md bg-gray-800">

			<div ref={pdfRef}>

			



        <img className="object-cover w-full h-64" src={img} alt="Article"/>
    
        <div className="p-6">
            <div>
                
                <h1 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform text-gray-800 hover:text-gray-600 hover:underline" tabindex="0" role="link">{name}</h1>

                <p className="mt-2 text-1xl text-gray-600 dark:text-gray-400">{details}</p>
            </div>
    
            <div className="mt-4">
                <div className="flex items-center">


                    <div className="flex items-center">
                       
                        <p>Teacher: {teacher}</p>
                    </div>
                  
                </div>

            </div>
            <div>
                <p>Price: ${price}</p>
            </div>
        </div>
        <div className='flex justify-center'>

        <Link to={`/checkout/${course_id}`} type="button" className="inline-block px-5 py-3 m-4 font-semibold tracking-wider text-center rounded bg-gray-900 text-white hover:bg-gray-700">Get premium access</Link>
        </div>
		{/*  */}
		</div>
		{/*  */}
    </div>
    
    </div>

    {/*  */}
    {/*  */}

    <div className='flex justify-center'>
   
    <section className="py-20 bg-white">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			
		</div>
		<div className="flex flex-wrap items-stretch -mx-4 ">

			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold text-white">Beginner</h4>
						<span className="text-6xl font-bold text-white">Free</span>
					</div>
					<p className="mt-3 leading-relaxed text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="flex-1 mb-6 text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					
				</div>
			</div>


			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center">
				<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 text-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$24
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Free</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Praesent faucibus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean et lectus blandit</span>
						</li>
					</ul>
					
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 justify-center">
				<div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold text-white">Team</h4>
						<span className="text-6xl font-bold text-white">$72
							<span className="text-sm tracking-wide text-white">/month</span>
						</span>
					</div>
					<p className="leading-relaxed text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul className="space-y-2 text-gray-400">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Pro</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
				
				</div>
			</div>
		</div>
	</div>
</section>
    </div>

{/*  */}

</div>
    </div>
    );
};

export default CourseDetailPage;