
  import { FaFacebook } from "react-icons/fa";
  import { AiFillInstagram } from "react-icons/ai";
  import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-1 md:p-4 bg-white text-black w-full">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <span><FaFacebook/>  </span>
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <span><AiFillInstagram /></span>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <span><FaTwitter />  </span>
            </a>
            <span className="ml-4">&copy; 2024 MaxShop</span>
        </footer>
    );
};
export default Footer;
