import { Link,  Navigate,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Result } from "postcss";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location in  login page: ', location);
    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password= e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email= form.get('email');
        const password = form.get('password');

        signIn(email,password)
        .then(result =>
        {
            // navigate after login
            navigate(location?.state? location.state: '/');
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
          <div className="md:w-3/4 lg:w-1/2 mx-auto border-[#F3F3F3] border-2  rounded-md py-20 px-24">
          <h2 className="text-4xl font-semibold text-[#403F3F] text-center">Login your account</h2>
          <hr className="my-12"/>
            <form className="" onSubmit={handleLogin}>
            
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white">Login</button>
                </div>
            </form>
            <p className="font-semibold text-center my-7">Dont’t Have An Account ? <Link to="/register" className="text-[#FF8C47]">Register</Link></p>
          </div>
        </div>
    );
};

export default Login;