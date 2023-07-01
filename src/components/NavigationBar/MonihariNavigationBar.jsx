import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MonihariNavigationBar = () => {
    const [selectMonihariCategory, setSelectMonihariCategory] = useState("বই")
    const [active, setactive] = useState(false)
    const handleselectElectronicCategory = (bookCategory) => {
        setSelectMonihariCategory(bookCategory)
        setactive(true)
    }
    console.log(selectMonihariCategory)
    return (
        <div className={`flex gap-4 mb-5 justify-center text-md ${active ? "border-t border-blue-400" : ""}`}>
        <NavLink to="/monihariLayout/islamic-accessories" onClick={() => handleselectElectronicCategory("বই")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2 `} >Islamic Accessories</NavLink>
        <NavLink to="/monihariLayout/stationery" onClick={() => handleselectElectronicCategory("ইলেক্ট্রনিক্স")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >Organic Food</NavLink>
        <NavLink to="/monihariLayout/organic-food" onClick={() => handleselectElectronicCategory("মনিহারি পণ্য")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Organic Food</NavLink>
        <NavLink to="/monihariLayout/beauty-&-personal-care" onClick={() => handleselectElectronicCategory("কিডস জোন")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >Beauty & Personal Care</NavLink>
        <NavLink to="/monihariLayout/voucher" onClick={() => handleselectElectronicCategory("গিফট ফাইন্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Voucher</NavLink>
        <NavLink to="/monihariLayout/diary-notebook" onClick={() => handleselectElectronicCategory("প্রাতিষ্ঠানিক অর্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Diary/Notebook</NavLink>
        <NavLink to="/monihariLayout/calculator" onClick={() => handleselectElectronicCategory("অফার সমূহ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Calculator</NavLink>
        <NavLink to="/monihariLayout/bag" onClick={() => handleselectElectronicCategory("কুইজ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >  Bag</NavLink>
        <NavLink to="/monihariLayout/covid-19-protection-products" onClick={() => handleselectElectronicCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Covid-19 Protection Product </NavLink>
    </div>
    );
};

export default MonihariNavigationBar;