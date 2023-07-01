import { useState } from "react";
import { NavLink } from "react-router-dom";

const KidsZoneNavigationBar = () => {
    const [selectKidszonCategory, setSelectKidszoneCategory] = useState("বই")
    const [active, setactive] = useState(false)
    const handleSelectKidszonekCategory = (bookCategory) => {
        setSelectKidszoneCategory(bookCategory)
        setactive(true)
    }

    console.log(selectKidszonCategory)
    return (
        <div className={`flex gap-4 mb-5 justify-center text-md ${active ? "border-t border-blue-400" : ""}`}>
        <NavLink to="/kidzoneLayout/diaper-potty" onClick={() => handleSelectKidszonekCategory("বই")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2 `} >Diaper & Potty </NavLink>
        <NavLink to="/kidzoneLayout/feeding" onClick={() => handleSelectKidszonekCategory("ইলেক্ট্রনিক্স")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >Feeding </NavLink>
        <NavLink to="/kidzoneLayout/kids-toys" onClick={() => handleSelectKidszonekCategory("মনিহারি পণ্য")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Kids Toys </NavLink>
        <NavLink to="/kidzoneLayout/lotions-creams" onClick={() => handleSelectKidszonekCategory("কিডস জোন")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Lotions & Creams </NavLink>
        <NavLink to="/kidzoneLayout/teethers-pacifier" onClick={() => handleSelectKidszonekCategory("গিফট ফাইন্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Teethers & Pacifier </NavLink>
        <NavLink to="/kidzoneLayout/grooming" onClick={() => handleSelectKidszonekCategory("প্রাতিষ্ঠানিক অর্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Grooming </NavLink>
        <NavLink to="/kidzoneLayout/oral-health" onClick={() => handleSelectKidszonekCategory("অফার সমূহ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Oral & Health </NavLink>
        <NavLink to="/kidzoneLayout/body-wash" onClick={() => handleSelectKidszonekCategory("কুইজ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Body Wash </NavLink>
        <NavLink to="/kidzoneLayout/mum-pot-cups" onClick={() => handleSelectKidszonekCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Mum Pot & Cups </NavLink>
        <NavLink to="/kidzoneLayout/bathing" onClick={() => handleSelectKidszonekCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Bathing </NavLink>
    </div>
    );
};

export default KidsZoneNavigationBar;