import React, { useState } from 'react';

const Register = () => {
    const [error,setError]=useState('');

    const handeleSubmit=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const photoURL=form.photoURL.value
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,name,photoURL);
    }
    return (
        <div className='bg-slate-800 flex justify-center p-9'>

       




        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handeleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">

		<div className="space-y-1 text-sm">
			<label for="username" className="block text-gray-400">User Name</label>
			<input type="text" name="name" id="name" placeholder="User Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label for="photoURL" className="block text-gray-400">Photo URL</label>
			<input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label for="userEmail" className="block text-gray-400">User Email</label>
			<input type="Email" name="email" id="email" placeholder="User Email" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label for="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
            
			<div className="flex justify-end text-xs text-gray-400">
				{/* <a rel="noopener noreferrer" href="#">Forgot Password?</a> */}
			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 ">Register</button>
	</form>


	



	
	
		
	
</div>

</div>
    );
};

export default Register;