
import { Link } from 'react-router-dom';
import logo from "../../assets/rokomary-logo.png";
import { GiShoppingBag } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

const ExtraHeader = () => {
    const user = false;
    return (
        <div className="flex items-end justify-between px-20 py-5 bg-white sticky top-0 left-0 right-0 z-50">
            <Link to="/book">
                <img className="w-40" src={logo} alt="logo" />
            </Link>
            <div className="flex">
                <div className='border-8 border-gray-300'>
                    <input type="search" name="search" id="search" className=" pl-2  pr-32  py-[5px] outline-none focus:border-blue-300" />
                    <button className="px-4 text-white bg-[#4490a5] font-bold text-xl py-[10px]"><AiOutlineSearch /></button>
                </div>

            </div>
            <div className="flex items-center gap-10">
                <Link to="login">
                    <button className=" px-8 py-2 text-md bg-[#4ea23a] text-white">Sign In</button>
                </Link>
                <button className={`flex items-center gap-2 px-4 py-2 text-md ${user ? "bg-[#4ea23a]" : "bg-[#b1b1b1]"} text-white`}><GiShoppingBag/> Cart (0)</button>
            </div>
        </div>
    );
};

export default ExtraHeader;