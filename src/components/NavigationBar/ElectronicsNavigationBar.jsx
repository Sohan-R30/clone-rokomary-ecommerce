
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ElectronicsNavigationBar = () => {
    const [selectElectronicsCategory, setSelectElectronicsCategory] = useState("বই")
    const [active, setactive] = useState(false)
    const handleselectElectronicCategory = (bookCategory) => {
        setSelectElectronicsCategory(bookCategory)
        setactive(true)
    }
    console.log(selectElectronicsCategory);
    return (
        <div className={`flex gap-4 mb-5 justify-center text-md ${active ? "border-t border-blue-400" : ""}`}>
        <NavLink to="/electronicsLayout/science-kit" onClick={() => handleselectElectronicCategory("বই")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2 `} >Science Kit </NavLink>
        <NavLink to="/electronicsLayout/smart-watch" onClick={() => handleselectElectronicCategory("ইলেক্ট্রনিক্স")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >Smart Watch</NavLink>
        <NavLink to="/electronicsLayout/keyboard" onClick={() => handleselectElectronicCategory("মনিহারি পণ্য")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Mouse </NavLink>
        <NavLink to="/electronicsLayout/mouse" onClick={() => handleselectElectronicCategory("কিডস জোন")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Keyboard </NavLink>
        <NavLink to="/electronicsLayout/router" onClick={() => handleselectElectronicCategory("গিফট ফাইন্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Router </NavLink>
        <NavLink to="/electronicsLayout/power-bank" onClick={() => handleselectElectronicCategory("প্রাতিষ্ঠানিক অর্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Power-Bank </NavLink>
        <NavLink to="/electronicsLayout/headphone" onClick={() => handleselectElectronicCategory("অফার সমূহ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Headphone </NavLink>
        <NavLink to="/electronicsLayout/UPS-&-Stabilizer" onClick={() => handleselectElectronicCategory("কুইজ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >  UPS-&-Stabilizer </NavLink>
        <NavLink to="/electronicsLayout/pen-drive" onClick={() => handleselectElectronicCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Pen Drive </NavLink>
        <NavLink to="/electronicsLayout/speaker" onClick={() => handleselectElectronicCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Speaker </NavLink>
        <NavLink to="/electronicsLayout/antivirus" onClick={() => handleselectElectronicCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Antivirus </NavLink>
        <NavLink to="/electronicsLayout/popular-list" onClick={() => handleselectElectronicCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Popular List </NavLink>
    </div>
    );
};

export default ElectronicsNavigationBar;