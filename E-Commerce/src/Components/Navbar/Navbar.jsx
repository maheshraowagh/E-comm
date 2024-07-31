import  { useState } from 'react'
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({cartPage}) => {
    const [cross,setCross] = useState(false)

    const handletoggle=()=>{
        setCross(!cross)
    }
  return (
    <>
    <div className="bg-white border-b border-gray-200 relative ">
       
       <div className="container mx-auto flex justify-between p-5 items-center ">

          <div>
            <Link to="/">
            <h3 className="font-bold text-2xl cursor-pointer">
                MAX <span className="text-red-500">SHOP</span>
            </h3>
            </Link>
           
          </div>

          { <div className="hidden md:block"  >

          <ul className="flex items-center text-lg justify-center font-bold">
            <Link to="/">
            <li className="mr-5  cursor-pointer   hover:text-red-500" >Home</li>
            </Link>

            <Link to="/AllProducts">
            <li className="mr-5 hover:text-red-500 cursor-pointer  ">All Products</li>
            </Link>
         
           <Link to='/About'>
           <li className="mr-5 hover:text-red-500 cursor-pointer  ">About us</li>
           </Link>
         
           <Link to='/Contact'>
           <li className="mr-5 hover:text-red-500 cursor-pointer  ">Contact</li>
            
           </Link>
           
          </ul>

          </div> }

          {
            cross?
            <div  >
            
            <ul className="flex flex-col gap-12 text-2xl pb-[20vh] w-full h-screen absolute left-0 z-10 text-white  bg-red-400 top-[73px] items-center justify-center   font-bold">
              <Link to="/">
              <li  onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer   " >Home</li>
              </Link>
            
              <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer  ">All Products</li>
              <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer  ">Mens</li>
              <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer  ">Kids</li>

              <Link to="/Login">
              <li onClick={handletoggle}>
            <button
             className=" bg-red-400 text-2xl border-2 font-bold py-1 px-3 
             focus:outline-none hover:bg-gray-200 rounded   ">Login
             </button>
             </li>
            </Link>
              
            </ul> 
            <button onClick={handletoggle} className="text-4xl z-10 top-[80px] text-white py-2 px-4 cursor-pointer absolute right-5 "><RxCross2 /></button>
            
            
            </div>:''
          }



          <div className="flex justify-center items-center text-xl gap-9">
            <Link to="/Login">
            <button
             className=" bg-gray-100 border-0 font-semibold py-1 px-3 focus:outline-none hidden md:block hover:bg-gray-200 rounded text-lg  md:mt-0">Login</button>
            </Link>
            <div className=''>
              <span className="absolute top-1 mx-3">{cartPage.length}</span>
              <Link to="/cart"><p className="  cursor-pointer text-3xl "><IoCart /></p></Link>
            </div>
          
            {
                cross?'':  <button onClick={handletoggle} className="md:hidden cursor-pointer text-3xl"><GiHamburgerMenu /></button>
            }
          
            
          </div>

       </div>
    </div>
    
    </>
  )
}

export default Navbar