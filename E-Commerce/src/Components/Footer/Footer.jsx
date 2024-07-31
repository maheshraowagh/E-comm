
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white z-1">
        {/* <div className="container py-24 px-5 mx-auto flex md:items-center
         lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

            <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
                <h3 className="font-bold text-2xl">
                    MAX <span>SHOP</span>
                 </h3>
            </div>

            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title:font font-medium tracking-widest text-lg mb-3">MENU</h2>
                    <ul className="list-none mb-10">
                        <li className="mt-1">Features</li>
                        <li className="mt-1">Info Center</li>
                        <li className="mt-1">News Blog </li>
                        <li className="mt-1">Login</li>
                       
                    </ul>
                </div>

                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title:font font-medium tracking-widest text-lg mb-3">COMPANY</h2>
                    <ul className="list-none mb-10">
                        <li className="mt-1">About Us</li>
                        <li className="mt-1">Privacy Policy</li>
                        <li className="mt-1">Term & Condition</li>
                        <li className="mt-1">Login</li>
                       
                    </ul>
                </div>


                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title:font font-medium tracking-widest text-lg mb-3">CONTACT</h2>
                    <ul className="list-none mb-10">
                        <li className="mt-1">Contact Sales</li>
                        <li className="mt-1">+998877223</li>
                        <li className="mt-1">News Blog</li>
                        <li className="mt-1">Login</li>
                       
                    </ul>
                </div>

                
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title:font font-medium tracking-widest text-lg mb-3">TECH SUPPORT</h2>
                    <ul className="list-none mb-10">
                        <li className="mt-1">Contact Support</li>
                        <li className="mt-1">Info Center</li>
                        <li className="mt-1">Activate</li>
                       
                    </ul>
                </div>

                
            </div>



        </div>  */}
        
        <div className="bg-red-500 text-white">
               <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                  <p className="text-sm text-center sm:text-left">
                    @2024 MaxShop -<span>@copyright</span>
                  </p >
                  <p className=" text-3xl inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
                    <span><FaFacebook/>  </span>
                    <span><AiFillInstagram /></span>
                    <span><FaTwitter />  </span>
                  </p>
               </div>
            </div>
    </footer>
    </>
  )
}

export default Footer