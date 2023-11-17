import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const [user,setUser] = useState(null)
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser)
      setUser(loggedUser)
    })
      .catch((error) => {
        console.log(error);
      });
   
  };

  const handleGoogleSignOut = () =>{
    signOut(auth)
    .then(result =>{
        console.log(result)
        setUser(null)
    })
    .catch(error =>{
        console.log(error)
    })
  }
  const handleGithubLogin = () =>{
    signInWithPopup(auth, GithubProvider)
    .then(result  => {
      const loggedUser = result.user
      console.log(loggedUser)
      setUser(loggedUser)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div className="px-4">

        {user ?
         <button onClick={handleGoogleSignOut} className="transition ease-in-out delay-200  bg-indigo-500 hover:bg-blue-500 duration-300 p-2 text-white rounded-lg">Sign Out</button> :

         <div className='mt-5'>
<button onClick={handleGoogleSignIn} className="transition ease-in-out delay-200 bg-indigo-500 hover:bg-blue-500 duration-300 p-2 text-white rounded-lg mr-2">Sign In</button>
<button onClick={handleGithubLogin} className="transition ease-in-out delay-200 bg-indigo-500 hover:bg-blue-500 duration-300 p-2 text-white rounded-lg">Github Login</button>
         </div>


    }
       

     {user && <div className='items-center'>
        <h3>User: {user.displayName}</h3>
        <h3>Email: {user.email}</h3>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
};

export default Login;
