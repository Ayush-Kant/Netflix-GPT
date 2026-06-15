import React, { useRef, useState } from 'react'
import Header from './Header'
import { formInputValidator } from '../utils/FormValidator';
import { createUserWithEmailAndPassword,reload,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState([])
    const [ firebaseErrMsg, setFirebaseErrMsg ] = useState(null);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const toggleSignIn = ()=> {
        setIsSignIn(!isSignIn);
    };
    const  handleButtonClick= () => {
       const messages = formInputValidator(
        name.current?.value,
         email.current?.value,
        password.current?.value,
        isSignIn);
       setErrMsg(messages)
       let errorBit = 0;
       messages.forEach(element => {
        if(element !== null) errorBit = 1;
       })
       if(errorBit===1){
        return
       }
       //sign in/ sign up logic
       //sign up
       if(!isSignIn){
            createUserWithEmailAndPassword(auth,
                email.current?.value, 
                password.current?.value)
                .then(async(userCredential) => {
                    // Signed up 
                    
                    const user = userCredential.user;
            
            await updateProfile
                    (user, 
                        {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                        }); 
             await reload(user);
            const updatedUser = auth.currentUser;
                 dispatch(addUser({
                                    uid: updatedUser.uid,
                                    email: updatedUser.email,
                                    displayName: updatedUser.displayName,
                                    photoURL: updatedUser.photoURL
                                    }
                                ));

                    setFirebaseErrMsg(null);
                    // ...    
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFirebaseErrMsg(errorMessage)
                    // ..
            });
       }
       //sign in
       else{
            signInWithEmailAndPassword(auth,
                 email.current?.value,
                  password.current?.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        setFirebaseErrMsg(null);
                        console.log(user)
                         navigate("/browse")
                         
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                         //const signInError = errMsg.push(errorMessage);
                         //setErrMsg(signInError)
                         setFirebaseErrMsg(errorMessage)
                    });
       }
     
    }
  return (
    <div className='w-screen flex'>
    <Header/>
        <div className='absolute z-0 w-screen'>
            <img  
            src='https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg' className='w-full h-screen object-cover' alt='bg-img'>
            </img>
        </div>
   
        <form onSubmit={(e) => e.preventDefault()}
                className='my-36 mx-auto right-0 left-0 p-12 absolute
                 bg-black z-20 bg-opacity-80 w-4/12 flex flex-col rounded-lg'>
            <h1 
            className='font-bold text-white text-3xl mx-3 mb-5'>
            {isSignIn?"Sign In":"Sign up"}
            </h1>
            {
            !isSignIn &&
                <input 
                ref={name} type='text' placeholder='Name' 
                className='bg-gray-700 text-gray-300 p-2 m-4'>
                </input>
                
            }
            <p className='text-red-700 font-semibold pb-2 mx-4'>{errMsg[0]}</p>

            <input 
            ref={email} type='text' placeholder='Email Address' 
            className='bg-gray-700 text-gray-300 p-2 m-4'>
            </input>

            <p className='text-red-700 font-semibold pb-2 mx-4'>
                {errMsg[1]}
            </p>
             <input 
             ref={password} type='Password' placeholder='password' className='bg-gray-700 text-gray-300 p-2 m-4'>
             </input>
             <p 
             className='text-red-700 font-semibold pb-2 mx-4'>
                {errMsg[2]}
            </p>
             <button 
             className='bg-red-700 rounded-md px-4 py-2 my-10 m-auto 
             w-4/12 text-white font-bold' 
             onClick={handleButtonClick}>
                {isSignIn?"Sign In":"Sign up"}
                </button>
                <p className='text-red-700 font-semibold'>
                    {firebaseErrMsg}
                </p>
             <span className='text-white text-lg m-auto flex flex-row'>
                <p>{!isSignIn?"Already Registered":"New to Netflix?"}</p> 
                <p className='underline ml-4 cursor-pointer' onClick={toggleSignIn}>{!isSignIn?"Sign In Now":"Sign up Now"}</p>
                </span>

        </form>
    </div>
    
  )
}

export default Login
