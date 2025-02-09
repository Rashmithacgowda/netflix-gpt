import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser,removeUser} from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { USER_AVATAR } from '../utils/constants';
import { LOGO } from '../utils/constants';
export const Header = () => {

  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate("/browser")
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
    });
    // unsubscribe when unmounts
    return () => unsubscribe();
}, [dispatch,navigate])

  return (
    <div className="absolute  w-screen px-24 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO}
        alt="logo"
        className='w-40'
      />
      <div className='flex'>
        <div>
          <img src={USER_AVATAR} alt="user-icon" />
        </div>
        <button onClick={handleSignOut} className='bg-red-500 font-bold'>Sign Out</button>
      </div>
    </div>
  )
}


