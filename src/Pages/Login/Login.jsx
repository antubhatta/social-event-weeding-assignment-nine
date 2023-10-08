import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
   
    const {signInUser,googleLogin,gitHubLogin}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value

        
        // login user
        signInUser(email,password)
        .then((result)=>{
            console.log(result.user)
            toast('user login successfully')
        })
        .catch((error)=>{
            console.log(error)
            toast(error.message)
        })
     
    }
       // login google
       const handleGoogleLogin=()=>{
        googleLogin()
      .then((result)=>{
        console.log(result.user)
      })
      .catch((error)=>{
        console.log(error)
      })
      }
      // login github
      const handleGithubLogin=()=>{
        gitHubLogin()
        .then((result)=>{
          console.log(result.user)
        })
        .catch((error)=>{
          console.log(error)
        })
      }

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-xl text-[#FFF] font-bold mb-4">Login your Account</h1>
        
          </div>
          <div className="card flex-shrink-0 w-[300px] md:w-full shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#403F3F] font-medium">Email</span>
                </label>
                <input type="email" name="email" placeholder="enter your email" className="w-auto md:w-[400px] input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#403F3F] font-medium">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input w-auto md:w-[400px]  input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="py-4 rounded-md text-white bg-blue-700 w-auto md:w-[400px]">Login</button>
              </div>
              <p className="text-sm text-center mt-2 divider">Or with google and github</p>
              <div className="flex justify-between">
              <button onClick={handleGoogleLogin} className="px-5 py-3 btn-sm text-base flex items-center gap-1 rounded-lg bg-gray-600 text-white">
                    <FaGoogle></FaGoogle>
                    <p>Google</p>
                </button>
                <button onClick={handleGithubLogin} className="px-5 py-3 btn-sm text-base flex items-center gap-1 rounded-lg bg-gray-600 text-white">
                    <FaGithub></FaGithub>
                    <p>Github</p>
                </button>

              </div>
              <p className="text-base text-center font-normal text-[#403F3F]">New user please can be? <Link className="font-bold" to="/register"><button className="btn btn-link">Register</button></Link></p>
              
            </form>
            <ToastContainer/>
          </div>
        </div>
      </div>
    );
};

export default Login;