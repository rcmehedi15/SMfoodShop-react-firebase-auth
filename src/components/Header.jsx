import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ChefContext } from '../ChefProvider/ChefProvider';

const Header = () => {
    const { user, logOut } = useContext(ChefContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error);
        })
    }

    const [activeButton, setActiveButton] = useState();

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }
    return (
        <>
            <nav className='container mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/" className="text-dark px-4" >Home</Link></li>
                                <li><Link to="/blog" className="justify-between text-dark px-4">Blog</Link></li>
                            </ul>
                        </div>
                        <Link className="normal-case text-2xl font-bold text-gray-700" to="/">SM FOOD Shop</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal">
                            <li><Link to="/"  onClick={() => handleClick(0)} className={activeButton === 0 ? 'text-white bg-blue-500 rounded-lg p-2 m-4' : ''}>Home</Link></li>
                            <li><Link to="/blog" onClick={() => handleClick(1)} className={activeButton === 1 ?  'text-white bg-blue-500 rounded-lg p-2 m-4' : ''}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        {
                            user && <Link to='/profile'  className="btn btn-info text-white">
                            {user.displayName}
                            </Link>
                        }
                        {
                            !user ? <Link to="/profile" className="btn btn-info text-white">Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg></Link> : 
                             <Link onClick={handleLogOut} className="btn btn-info text-white">Logout
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </Link>
                          
                        }
                       

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;