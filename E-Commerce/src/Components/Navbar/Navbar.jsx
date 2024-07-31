import { useState } from 'react';
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ cartPage }) => {
    const [cross, setCross] = useState(false);

    const handletoggle = () => {
        setCross(!cross);
    };

    return (
        <>
            <div className="bg-white border-b border-gray-200 relative z-20">
                <div className="container mx-auto flex justify-between p-5 items-center">

                    <div>
                        <Link to="/">
                            <h3 className="font-bold text-2xl cursor-pointer">
                                MAX <span className="text-red-500">SHOP</span>
                            </h3>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center text-lg justify-center font-bold">
                            <Link to="/">
                                <li className="mr-5 cursor-pointer hover:text-red-500">Home</li>
                            </Link>

                            <Link to="/AllProducts">
                                <li className="mr-5 hover:text-red-500 cursor-pointer">All Products</li>
                            </Link>

                            <Link to='/About'>
                                <li className="mr-5 hover:text-red-500 cursor-pointer">About us</li>
                            </Link>

                            <Link to='/Contact'>
                                <li className="mr-5 hover:text-red-500 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>

                    {cross ? (
                        <div className="fixed top-0 left-0 w-full h-full bg-red-400 z-30">
                            <ul className="flex flex-col gap-12 text-2xl w-full h-screen absolute left-0 z-40 text-white bg-red-400 top-[73px] items-center justify-center font-bold">
                                <Link to="/">
                                    <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                                </Link>

                                <Link to="/AllProducts">
                                    <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer">All Products</li>
                                </Link>
                                
                                <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
                                <li onClick={handletoggle} className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>

                                <Link to="/Login">
                                    <li onClick={handletoggle}>
                                        <button className="bg-red-400 text-2xl border-2 font-bold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                                            Login
                                        </button>
                                    </li>
                                </Link>
                            </ul>
                            <button onClick={handletoggle} className="text-4xl z-50 text-white py-2 px-4 cursor-pointer absolute top-5 right-5"><RxCross2 /></button>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="flex justify-center items-center text-xl gap-9">
                        <Link to="/Login">
                            <button className="bg-gray-100 border-0 font-semibold py-1 px-3 focus:outline-none hidden md:block hover:bg-gray-200 rounded text-lg md:mt-0">Login</button>
                        </Link>
                        <div className="relative">
                            <span className="absolute top-1 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartPage.length}</span>
                            <Link to="/cart"><p className="cursor-pointer text-3xl"><IoCart /></p></Link>
                        </div>
                        <button onClick={handletoggle} className="md:hidden cursor-pointer text-3xl"><GiHamburgerMenu /></button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;
