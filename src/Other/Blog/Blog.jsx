import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
            <div className="bg-gray-800 text-gray-300 mt-2">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:dark:text-gray-400">Jun 5, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">Node.js</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">1. what is cors?</a>
			<p className="mt-2">The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. </p>
		</div>
		
	</div>
</div>
            </div>
            {/*  */}
            <div>
            <div className="bg-gray-800 text-gray-100 mt-2">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:dark:text-gray-400">July 10, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">Firebase</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">2. Why are you using firebase? What other options do you have to implement authentication?</a>
			<p className="mt-2">Firebase is Googles Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. There is a lot to learn about the platform, however in this article we will cover the top five benefits of using Firebase by Google.
			<br />
			Benefit #1: Google Analytics For Firebase
			<br />
			Benefit #2: Realtime Database & Firestore
			<br />
			Benefit #3: Authentication
			<br />
			Benefit #4: Crashlytics
			<br />
			Benefit #5: Free Use of Dynamic Links
			<br />
			 Other options do you have to implement authentication beside Firebase
			 <br />
			 1.Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications
			 <br />
			 2.MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering.
			 <br />
			 3.Okta
			 <br />
			 4.JSON Web Token.
			 <br />
              5.Keycloak.
               <br />
               6.Amazon Cognito
			</p>
		</div>
		
	</div>
</div>
            </div>

            {/*  */}

            <div>

            <div className="bg-gray-800 text-gray-100 mt-2">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:dark:text-gray-400">Aug 16, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">React Router</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">3. How does the private route work?</a>
			<p className="mt-2">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
			<br />
			PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
			<br />
			Some things that we used to create PrivateRoute have changed a little bit
			<br />

                     Redirect is now Navigate
               <br />
                   Route props changed and is just a stub component now
               <br />
               A new component Routes appearead</p>
		</div>
		
	</div>
</div>
            </div>


            <div>


            <div className="bg-gray-800 text-gray-100 mt-2">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:dark:text-gray-400">Sep 22, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">Node.js</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">4. What is Node? How does Node work?</a>
			<p className="mt-2">What is this node?
Image result for What is Node? How does Node work?
Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
<br />
Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
<br />
Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
<br />
Node.js basically works on two concept
<br />
Asynchronous <br />
Non-blocking I/O
</p>
		</div>
		
	</div>
</div>
            </div>









        </div>
    );
};

export default Blog;