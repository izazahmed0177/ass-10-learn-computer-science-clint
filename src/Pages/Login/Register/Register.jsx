import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Register = () => {
    const [error,setError]=useState('');

    const [success, setSuccess] = useState(false);
    // const { createUser}=useContext(AuthContext);
    const {createUser, updateUserProfile,verifyEmail}= useContext(AuthContext);


    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.form?.pathname || '/login' ;
   
    const handeleSubmit=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const photoURL=form.photoURL.value
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password,name,photoURL);

          // validate password
          if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setError('Please should be at least 6 characters.');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add at least one special character');
            return
        }
        setError('');







        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setError('')
            setSuccess(true);
            form.reset();
            handleUpdateUserProfile(name,photoURL);
            handleEmailVerification();
            toast.success('Please Verify Your Email Address ')
            toast.success(' our confirmation email was sent check your email inbox')

            if (user.uid
                ) {
                navigate(from,{replace:true})
            } else {
              toast.error('Your email is not valid')  
            }
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        });
    }

    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error));
    }

    const handleEmailVerification=()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error));
    }




    return (
        <div className='bg-slate-800 flex justify-center p-9'>

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form onSubmit={handeleSubmit}  className="space-y-6 ng-untouched ng-pristine ng-valid">

		<div className="space-y-1 text-sm">
			<label  className="block text-gray-400">User Name</label>
			<input type="text" name="name" id="name" placeholder="User Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label className="block text-gray-400">Photo URL</label>
			<input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label  className="block text-gray-400">User Email</label>
			<input type="Email" name="email" id="email" placeholder="User Email" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>

		<div className="space-y-1 text-sm">
			<label  className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
            
			<div className="flex justify-end text-xs text-gray-400">
				{/* <a rel="noopener noreferrer" href="#">Forgot Password?</a> */}
			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 ">Register</button>
        <p>
            {/* {error} */}
            <p className='text-red-700'>{error}</p>
                {success && <p className='text-green-500'>User Created Successfully.</p>}
        </p>
	</form>


	



	
	
		
	
</div>

</div>
    );
};

export default Register;