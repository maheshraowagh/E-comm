
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Service = () => {
  return (
    <div>
        <div className="container z-10 mx-auto px-2 md:px-5 flex pt-10 md:pt-20 items-center justify-center gap-3 md:gap-10 md:flex-wrap     ">

            <div className="border text-black bg-gray-400 text-sm md:text-md  flex gap-2 flex-col items-center rounded py-2 md:py-5 px-3 md:px-5  md:w-[220px] cursor-pointer hover:scale-110 transition duration-500 ">
            <FaShippingFast />
            <p> FREE SHIPPING</p>
            </div>

            <div className="border  bg-gray-400 flex gap-2 text-sm md:text-md flex-col items-center rounded py-2 md:py-5 px-2 md:px-5 md:w-[220px] cursor-pointer  hover:scale-110 transition duration-500 ">
            <FaShippingFast />
            <p>AUTHENTIC PRODUCTS</p>
            </div>

            <div className="border  bg-gray-400  flex gap-2  text-sm md:text-md  flex-col items-center rounded py-2 md:py-5 px-2 md:px-5 md:w-[220px] cursor-pointer  hover:scale-110 transition duration-500 ">
            <FaShippingFast />
            <p>EASY RETURN</p>
            </div>

            <div className="border  bg-gray-400  text-sm md:text-md   text-black flex gap-2 flex-col items-center rounded py-2 md:py-5 px-2 md:px-5 md:w-[220px] cursor-pointer  hover:scale-110 transition duration-500 ">
            <MdOutlinePayment /> 
            <p>SECURE PAYMENTS</p>
            </div>

            
            
        </div>
    </div>
  )
}

export default Service




