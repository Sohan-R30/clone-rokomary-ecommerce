
import { useState } from "react";
import { NavLink } from "react-router-dom";


const NavigationBar = ({small}) => {
    const [selectCategory, setSelectCategory] = useState("বই")
    const handleSelectCategory = (category) => {
        setSelectCategory(category)
    }
    console.log("small",small)

    console.log(selectCategory)
    return (
        <div className={`flex  mb-5 justify-center ${small ? "text-sm gap-4" : "text-xl gap-8"}`}>
            <NavLink to="/book" onClick={() => handleSelectCategory("বই")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2 `} >বই</NavLink>
            <NavLink to="/electronics" onClick={() => handleSelectCategory("ইলেক্ট্রনিক্স")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >ইলেক্ট্রনিক্স</NavLink>
            <NavLink to="/monihari" onClick={() => handleSelectCategory("মনিহারি পণ্য")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >মনিহারি পণ্য</NavLink>
            <NavLink to="/kids-zone" onClick={() => handleSelectCategory("কিডস জোন")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >কিডস জোন</NavLink>
            <NavLink to="/gift-finder" onClick={() => handleSelectCategory("গিফট ফাইন্ডার")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >গিফট ফাইন্ডার</NavLink>
            <NavLink to="/insdustrial-order" onClick={() => handleSelectCategory("প্রাতিষ্ঠানিক অর্ডার")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >প্রাতিষ্ঠানিক অর্ডার</NavLink>
            <NavLink to="/offers" onClick={() => handleSelectCategory("অফার সমূহ")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >অফার সমূহ</NavLink>
            <NavLink to="/quiz" onClick={() => handleSelectCategory("কুইজ")} className={`${({ isActive }) => isActive ? "active-nav" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2`} >কুইজ</NavLink>
            <a href="https://www.rokomari.blog/" rel="noreferrer" target="_blank" onClick={() => handleSelectCategory("ব্লগ")} className="cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3 pt-1 pb-2">ব্লগ </a>
        </div>
    );
};

export default NavigationBar;