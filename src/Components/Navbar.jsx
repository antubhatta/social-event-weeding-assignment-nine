import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import User from "./User";




const Navbar = () => {
   
   const {user,logOut}=useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user && <>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </>
        }

    </>
    const handleLogOut=()=>{
        logOut()
    }

    return (
        <div className="shadow-xl z-50">
          <div className="navbar container mx-auto">
          <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-sm lg:text-base dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-50 w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-lg md:text-xl lg:text-2xl font-bold"><p className="" >Weeding</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-sm lg:text-base menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
           
            <div className="navbar-end">
          
             {
                user ? 
                <>
                <User/>
                <button onClick={handleLogOut} className="px-2 lg:px-5 py-2 rounded-lg text-white text-sm lg:text-base bg-slate-600">LogOut</button> </>:
                <Link to="/login"><button className="px-2 lg:px-5 py-2 rounded-lg text-white text-sm lg:text-base bg-slate-600">LogIn</button></Link>
             }

            </div>
          </div>
        </div>
    );
};

export default Navbar;