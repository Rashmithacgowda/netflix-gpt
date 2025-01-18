import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser,removeUser} from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";

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
    onAuthStateChanged(auth, (user) => {
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
}, [dispatch,navigate])

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className='w-40'
      />
      <div className='flex'>
        <div>
          <img src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7" alt="user-icon" />
        </div>
        <button onClick={handleSignOut} className='bg-red-500 font-bold'>Sign Out</button>
      </div>
    </div>
  )
}


