import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBeer, FaTv, FaUser } from 'react-icons/fa';
// import { IconName } from "react-icons/di";
// import { IconName ,} from "react-icons/ai";
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.error(error))
    }





    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
          <img className='h-7' src={'computer22.png'} alt="" />
            <Link
             to='/'
              aria-label="Company"
             
              className="inline-flex items-center mr-8"
            >
              <FaTv className=''></FaTv>
           
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Learn Computer Science
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <NavLink to='/'>
               
                  Home
               
              </NavLink>
              <NavLink to='/courses'>
               
                  Courses
               
              </NavLink>
              <NavLink to='/faq'>
               
                  FAQ
                
              </NavLink>
              <NavLink to='/blogs'>
                
                  Blog
               
              </NavLink>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">

            <li>
              <a
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >

                {/*  */}
                <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-black">
	                       <span>Light</span>
                      	<span className="relative">
		                     <input id="Toggle1" type="checkbox" className="hidden peer" />
		                       <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
	                      	<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	                      </span>
                         	<span>Dark</span>
                       </label>

              </a>

            </li>

            <li>
              <span
               
                aria-label="Sign in"
               
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >

                {
                  user?.uid?
                  <>
                  <button onClick={handleLogOut}>Log Out</button>
                  </>
                  :
                  <>
                   <Link to='/login'>
                Sign in
                </Link>
                  </>
                }
               
               
              </span>
            </li>
            <li>
            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        {/* <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full"> */}
                        <div className=" overflow-hidden border-2 border-gray-400 rounded-full">

                           {
                            user?.photoURL ?
                            <img className='w-8 h-8' title={user?.displayName} src={user?.photoURL}>

                            </img>
                            :
                            <FaUser  title='Please Log in'></FaUser>
                           }


                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden"></h3>
                    </button>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to='/'
                        aria-label="Company"
                       
                        className="inline-flex items-center"
                      >
                        
                        <FaTv></FaTv>
                       
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Learn Computer Science
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                        <li>
                        <NavLink to='/'>
                       
                      
                       Home
                     
                   </NavLink>
                        </li>
                        <li>
                        <NavLink to='/courses'>
                        
                        Courses
                    
                    </NavLink>
                        </li>
                        <li>
                        <NavLink to='/faq'>
                        
                        
                        FAQ
                     
                    </NavLink>
                        </li>
                        <li>
                        <NavLink to='/blogs'>
                        
                        Blog
                     
                    </NavLink>
                        </li>
                      
                      <li>
                        <a
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                                 <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-black">
	                            <span>Light</span>
	                         <span className="relative">
	                        <input id="Toggle2" type="checkbox" className="hidden peer" />
	
  
                         	<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
	                      	<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	                        </span>
	                         <span>Dark</span>
                          </label>
                        </a>
                      </li>
                      <li>
                        <span
                          
                          aria-label="Sign in"
                         
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {
                  user?.uid?
                  <>
                  <button onClick={handleLogOut}>Log Out</button>
                  </>
                  :
                  <>
                   <Link to='/login'>
                Sign in
                </Link>
                  </>
                }
                        </span>
                      </li>
                      <li>
                        {/*  */}
                        {/*  */}
                      <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        {/* <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full"> */}
                        <div className=" overflow-hidden border-2 border-gray-400 rounded-full">


                        {
                            user?.photoURL ?
                            <img className='w-8 h-8' title={user?.displayName} src={user?.photoURL}>

                            </img>
                            :
                            <FaUser title='Please Log in'></FaUser>
                           }


                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                          {
                            user?.displayName ?
                            <p title={user?.displayName}>{user?.displayName}</p>
                            :
                            <p title='Please Log in'>Please Log in</p>
                          }
                          </h3>
                    </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;