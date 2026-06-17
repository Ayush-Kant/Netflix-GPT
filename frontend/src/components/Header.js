import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice'

const Header = () => {

      const user = useSelector((store)=>store.user)
      const showGpt = useSelector((store)=>store.gptSearch.showGptSearch)
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value))
      }
      const handleSignOut = ()=> {
              const auth = getAuth();
              signOut(auth).then(() => {
                //anything after sign out like notification
              }).catch((error) => {
                console.log(error)
              });
      }
      const handleGptSearch = () => {
        dispatch(toggleGptSearch())
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
    <div className='absolute inset-x-0 bg-gradient-to-b from-black z-50 flex justify-between flex-row '>
      <img className='w-56 z-50' 
      src= {LOGO}
      alt='logo'></img>


      {user && <div className='flex flex-row items-center'>
        {
        showGpt && 
        <select className='m-2 px-4 p-2 bg-stone-900 text-white border border-s-cyan-200 rounded-lg' onChange={handleLanguageChange}>
          {
          SUPPORTED_LANGUAGES.map((lang)=> {
           return <option 
           value={lang.identifier} >
            {lang.language}
            </option>
           }
          )} 
        </select>}
         <button 
          className='p-2 m-2 px-4 bg-purple-950 text-white font-semibold border border-s-white  rounded-lg'
          onClick={handleGptSearch}
          >{showGpt? "❮❮ Back to Home":"GPT Search"}</button>
      <img src= {user.photoURL} className='w-20 m-2 p-2' alt='profile'></img>
      <button className='bg-red-700 w-20 h-10 text-white rounded-3xl py-2 px-2 mx-2' onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
    
    </div>
  )
}

export default Header
