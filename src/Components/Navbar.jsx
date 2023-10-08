import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/ringlogo@2x-free-img.png"



const Navbar = () => {
   
   const {user,logOut}=useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user && 
        }

    </>
    const handleLogOut=()=>{
        logOut()
    }

    return (
        <div className="bg-gray-300">
          <div className="navbar container mx-auto">
          <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-base dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-2xl font-bold"><img className="h-[60px] w-[140px]" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-base menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
           
            <div className="navbar-end">
          
             {
                user ? 
                <button onClick={handleLogOut} className="px-5 py-2 rounded-lg text-white text-base bg-slate-600">LogOut</button> :
                <button className="px-5 py-2 rounded-lg text-white text-base bg-slate-600">LogIn</button>
             }

            </div>
          </div>
        </div>
    );
};

export default Navbar;