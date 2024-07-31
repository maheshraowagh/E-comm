import { Link, useNavigate } from 'react-router-dom';
import ecom from '../../assets/ecom.webp';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/Firebase.Auth';

const SignUp = () => {
  const navigateLogin = useNavigate();
  const [user, setUser] = useState({ username: "", email: '', password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password) {
      return toast.error('All fields are required');
    } else {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: user.username
          });
          navigateLogin('/');
        })
        .catch((error) => toast.error(error.message));
    }
  }

  return (
    <div>
      <div className="relative">
        <img src={ecom} alt="" className="object-cover object-center h-[600px] lg:h-[820px] w-full" />
        <div className="w-full h-[600px] lg:h-[820px] bg-black absolute top-0 left-0 opacity-50"></div>
        <div className="container px-5 py-24 mx-auto flex justify-center items-center absolute top-0 left-0 w-full h-full">
          <div className="w-full max-w-md lg:max-w-lg bg-white rounded-lg p-8 lg:p-12 flex flex-col relative z-10 shadow-md justify-center">
            <h2 className="text-black mb-5 text-2xl lg:text-3xl font-medium title-font">Sign up</h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm lg:text-base text-gray-600">Name</label>
              <input 
                type="text" 
                autoComplete='off'
                id="name"
                onChange={handleChange}
                value={user.username}
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base lg:text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm lg:text-base text-gray-600">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                autoComplete='off'
                onChange={handleChange}
                value={user.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base lg:text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm lg:text-base text-gray-600">Set Password</label>
              <input 
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                autoComplete='off'
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base lg:text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-6 lg:py-3 lg:px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign Up
            </button>
            <p className="text-sm lg:text-base text-black mt-5">
              Do have an account?
              <Link to="/Login">
                <button className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 mx-2">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
