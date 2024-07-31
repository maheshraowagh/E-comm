
import ecom from '../../assets/ecom.webp'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
   
       <div>
        
        <div className="relative">
            <img src={ecom} alt="" className=" object-cover object-center h-[800px] mt-5 sm:md:w-full"/>            
        </div>
        <div className="w-full h-[820px] bg-black absolute top-20 left-0 opacity-[0.4] "></div>
        <div>
            <div className="container px-5 py-24 mx-auto flex absolute top-[20%] left-[6%] md:left-[11%] ">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto mx-auto mt-10 md:mt-0 relative z-9 shadow-md sm: justify-center">
      <h2 className="text-black mb-5  md:text-[2vw]  text-[5vw] font-medium title-font ">Login</h2>
    
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-white-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm ">Password</label>
        <input type="password"
               id="email"
               name="email" 
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      <p className="text-[14px] text-black mt-5">
        Do not have an account ? 
        <Link to="/SignUp">
        <button className="cursor-pointer text-[15px] text-blue-600 font-medium hover:text-blue-800 mx-2">    Sign up</button>
        </Link>
       
      </p>
    </div>
  </div>
        </div>
        
        </div> 

        
       
    </>
  )
}

export default Login