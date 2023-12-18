import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/paper 2.png';
import { HiOutlineBell, HiOutlineCog, HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [token, setToken] = useState("");
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(true)
        }
        else {
            setToken("");
        }
    }, [])
    const handleLogout = () => {
        localStorage.clear()
        setToken("")
    }

    return (
        <div>
            <nav
                className="bg-[#6941C6] flex items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <Link className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                        <img src={logo} alt="" />
                        <span className="ml-3 text-white font-bold text-xl">Stack</span>
                    </Link>
                    <div className="block lg:hidden ">
                        <button
                            id="nav"
                            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                    <div className="text-base font-medium text-[#F4EBFF] lg:flex-grow">
                        <li className=" block mt-4 lg:inline-block lg:mt-0"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9]  focus:text-white text-white px-5 py-2 text-base font-medium mx-2 rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Home</NavLink></li>
                        <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/users" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9] focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Users</NavLink></li>
                        <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9]  focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Projects</NavLink></li>
                        <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/tasks" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9] focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Tasks</NavLink></li>
                        <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/reporting" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9] focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Reporting</NavLink></li>
                    </div>


                    <div className="flex items-center gap-[10px]">
                        <HiOutlineSearch className='text-white w-5 h-5 cursor-pointer' />
                        <HiOutlineCog className='text-white w-5 h-5 cursor-pointer' />
                        <HiOutlineBell className='text-white w-5 h-5 cursor-pointer' />
                        {token ?
                            <div className='flex items-center'>
                                <div className=" flex items-center justify-center w-10 h-10 mx-4 overflow-hidden rounded-full cursor-pointer relative" onClick={() => setToggle(!toggle)}>
                                    <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="img" />

                                </div>
                                <div>
                                    {
                                        toggle ?
                                            <ul className='flex'>
                                                <li className='text-white' onClick={handleLogout}>
                                                    Logout
                                                </li>
                                            </ul>
                                            :
                                            ""
                                    }
                                </div>
                            </div>

                            :
                            <div className='flex'>
                                <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9] focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Login</NavLink></li>
                                <li className=" block mt-4 lg:inline-block lg:mt-0 "><NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hover:text-white bg-[#7F56D9] focus:text-white text-white px-5 py-2 text-base font-medium mx-2  rounded-md" : " hover:text-white hover:bg-[#7F56D9] bg-opacity-5 text-[#F4EBFF] px-5 py-2 mx-2 text-base font-medium rounded-md"}>Register</NavLink></li>
                            </div>
                        }
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Header;