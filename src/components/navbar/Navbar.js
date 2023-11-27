// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="bg-[#ffffff] text-[#00B0B9] p-4 text-xl">
//       <nav className="container mx-auto flex items-center justify-between">
//         <div>
//           <Link to="/" className=" text-3xl font-bold pl-40">
//             Donate.com
//           </Link>
//         </div>
//         <div className=" pr-20">
//           <Link to="/" className=" m-10">
//             Home
//           </Link>
//           <Link to="/" className=" m-10">
//             Events
//           </Link>
//           <Link to="/" className=" m-10">
//             Donates
//           </Link>
//           <Link to={`about`} className=" m-5">
//             About
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow py-2">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex  text-[#00B0B9] items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">Donate.com</h2>
                            {/* <img src="Logo"/> */}
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 bg-[#ffffff] text-black font-medium text-xl justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
                            <li className="  hover:text-[#00B0B9]">
                                <Link to="/">Home</Link>       </li>
                            <li className=" hover:text-[#00B0B9]">
                                <Link to="/events">Events</Link>       </li>
                            <li className=" hover:text-[#00B0B9]">
                                <Link to="/donates">Donates</Link>       </li>
                            <li className=" hover:text-[#00B0B9]">
                                <Link to="/about">About</Link>       </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}