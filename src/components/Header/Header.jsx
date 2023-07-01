import logo from "../../assets/rokomary-logo.png";

import { PiShoppingCartLight } from 'react-icons/pi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex items-center justify-between px-20 py-5 bg-white fixed top-0 left-0 right-0 z-50">
            <Link to="/book">
                <img className="w-40" src={logo} alt="logo" />
            </Link>
            <div className="flex border-collapse">
                <div>
                    <select name="select" id="select" className="border-2 py-[9px]  border-collapse rounded-l-md  text-xl cursor-pointer outline-none focus:border-blue-300 border-b-orange-400">
                        <option selected value="all">All</option>
                        <option value="all">Book</option>
                        <option disabled value="all">Superstore</option>
                    </select>
                </div>
                <div>
                    <input type="search" name="search" id="search" className="border-2 border-l-0 border-gray-300 pl-2  pr-32  py-[10px] outline-none focus:border-blue-300 border-b-orange-400" />
                </div>
                <div className="flex items-center bg-[#0397d3] rounded-r-md">
                    <button className="px-4 text-white font-bold text-2xl"><AiOutlineSearch/></button>
                </div>
            </div>
            <div className="flex items-center gap-10">
                <p className="text-4xl cursor-pointer">
                    <PiShoppingCartLight></PiShoppingCartLight>
                </p>
                <Link to="login">
                    <button className="border border-[#00000092] px-5 py-2 text-md text-gray-500 rounded-lg hover:bg-green-500 hover:text-white transition ease-linear delay-50">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;