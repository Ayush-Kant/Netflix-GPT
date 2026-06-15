import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';

const Header = () => {

      const user = useSelector((store)=>store.user)
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSIgnOut = ()=> {
              const auth = getAuth();
              signOut(auth).then(() => {
                //anything after sign out like notification
              }).catch((error) => {
                console.log(error)
              });
      }
      useEffect(()=>{
          const unsubscribe =  
          onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({
               uid,
              email,
              displayName,
              photoURL
            }
            ))
           navigate("/browse")
            // ...
          } else {
            // User is signed out
            dispatch(removeUser());
           navigate("/")
            // ...

          }
        });
        return () => unsubscribe();
  },[dispatch, navigate])

  return (
    <div >
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between flex-row '>
      <img className='w-56' 
      src= {LOGO}
      alt='logo'></img>
      {user && <div className='flex flex-row items-center'>
      <img src= {user.photoURL} className='w-20 m-2 p-2' alt='profile'></img>
      <button className='bg-red-700 w-20 h-10 text-white rounded-3xl py-2 px-2 mx-2' onClick={handleSIgnOut}>Sign Out</button>
    </div>}
    </div>
    
    </div>
  )
}

export default Header
