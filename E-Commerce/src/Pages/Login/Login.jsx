import ecom from '../../assets/ecom.webp';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <img src={ecom} alt="" className="object-cover object-center h-[600px] lg:h-[820px] w-full" />
        </div>
        <div className="w-full h-[600px] lg:h-[820px] bg-black absolute top-0 left-0 opacity-50"></div>
        <div className="container px-5 py-24 mx-auto flex justify-center items-center absolute top-0 left-0 w-full h-full">
          <div className="w-full max-w-md lg:max-w-lg bg-white rounded-lg p-8 lg:p-12 flex flex-col relative z-10 shadow-md justify-center">
            <h2 className="text-black mb-5 text-2xl lg:text-3xl font-medium title-font">Login</h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm lg:text-base text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base lg:text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm lg:text-base text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base lg:text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 lg:py-3 lg:px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            <p className="text-sm lg:text-base text-black mt-5">
              Do not have an account? 
              <Link to="/SignUp">
                <button className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 mx-2">Sign up</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
