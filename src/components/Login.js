import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = ()=> {
        setIsSignIn(!isSignIn);
    };
  return (
    <div>
    <Header/>
        <div className='absolute z-0'>
            <img  
            src='https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg' alt='bg-img'>
                
            </img>
        </div>
   
        <form 
                className='my-36 mx-auto right-0 left-0 p-12 absolute
                 bg-black z-20 bg-opacity-80 w-4/12 flex flex-col rounded-lg'>
            <h1 className='font-bold text-white text-3xl mx-3 mb-5'>
                {isSignIn?"Sign In":"Sign up"}
                </h1>
            {!isSignIn &&
                <input type='text' placeholder='Name' className='bg-gray-700 text-gray-300 p-2 m-4'></input>
            }
            
            <input type='text' placeholder='Email Address' className='bg-gray-700 text-gray-300 p-2 m-4'></input>
             <input type='Password' placeholder='password' className='bg-gray-700 text-gray-300 p-2 m-4'></input>
             <button className='bg-red-700 rounded-md px-4 py-2 my-10 m-auto w-4/12 text-white font-bold'>Sign In</button>
             <span className='text-white text-lg m-auto flex flex-row'>
                <p>{!isSignIn?"Already Registered":"New to Netflix?"}</p> 
                <p className='underline ml-4 cursor-pointer' onClick={toggleSignIn}>{!isSignIn?"Sign In Now":"Sign up Now"}</p>
                </span>

        </form>

    </div>
  )
}

export default Login
