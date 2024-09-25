import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
       
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo, email, password);


        // createUser

        createUser(email,password)
        .then(result=>console.log(result))
        .catch(error=> console.log(error))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto border-[#F3F3F3] border-2  rounded-md py-20 px-24">
                <h2 className="text-4xl font-semibold text-[#403F3F] text-center">Register your account</h2>
                <hr className="my-12" />
                <form className="" onSubmit={handleRegister}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" name="photo" className="input input-bordered"  />
                    </div>
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
                        <button className="btn bg-[#403F3F] text-white">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center my-7">Already Have An Account ? <Link to="/login" className="text-[#FF8C47]">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;