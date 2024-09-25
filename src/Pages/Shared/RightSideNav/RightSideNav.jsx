import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-7">
                <h2 className="text-lg font-bold mb-4">Login with</h2>
                <button className="btn w-full btn-outline btn-info mb-2">
                   <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className="btn w-full btn-outline">
                   <FaGithub></FaGithub> Login with Github
                </button>
            </div>
            <div className="mb-5">
                <h2 className="text-xl font-semibold mb-5">Find Us on</h2>
                <div>
                    <a href="" className="flex p-4 items-center border rounded-t-lg">
                        <FaFacebook className="mr-3 "></FaFacebook> <span className="text-[#706F6F] font-medium">Facebook</span>
                    </a>
                    <a href="" className="flex p-4 items-center border-x">
                        <FaTwitter className="mr-3"></FaTwitter> <span className="text-[#706F6F] font-medium">Twitter</span>
                    </a>
                    <a href="" className="flex p-4 items-center border rounded-b-lg">
                        <FaInstagram className="mr-3"></FaInstagram> <span className="text-[#706F6F] font-medium">Instagram</span>
                    </a>
                </div>
            </div>
            <div className="p-4 space-y-5 bg-[#F3F3F3]">
            <h2 className="text-xl font-semibold">Q-Zone</h2>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
            <div  style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat'} } className="bg-cover text-center px-9 py-16 text-white space-y-4">
               <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
               <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
               <button className="btn btn-secondary">Learn more</button>
            </div>
        </div>
    );
};

export default RightSideNav;