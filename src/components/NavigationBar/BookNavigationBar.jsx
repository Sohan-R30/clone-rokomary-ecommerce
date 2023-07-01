import { useState } from "react";
import { NavLink } from "react-router-dom";


const BookNavigationBar = () => {
    const [selectBookCategory, setSelectBookCategory] = useState("বই")
    const [active, setactive] = useState(false)
    const handleSelectBookCategory = (bookCategory) => {
        setSelectBookCategory(bookCategory)
        setactive(true)
    }

    console.log(selectBookCategory)
    return (
        <div className={`flex gap-8 mb-5 justify-center text-md ${active ? "border-t border-blue-400" : ""}`}>
        <NavLink to="/booklayout/writer" onClick={() => handleSelectBookCategory("বই")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2 `} >লেখক </NavLink>
        <NavLink to="/booklayout/subject" onClick={() => handleSelectBookCategory("ইলেক্ট্রনিক্স")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} >বিষয় </NavLink>
        <NavLink to="/booklayout/publication" onClick={() => handleSelectBookCategory("মনিহারি পণ্য")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > প্রকাশনী </NavLink>
        <NavLink to="/booklayout/ebook" onClick={() => handleSelectBookCategory("কিডস জোন")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > ই-বুক </NavLink>
        <NavLink to="/booklayout/offers" onClick={() => handleSelectBookCategory("গিফট ফাইন্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > Buy 1 Get 1 Offer </NavLink>
        <NavLink to="/booklayout/stock-products" onClick={() => handleSelectBookCategory("প্রাতিষ্ঠানিক অর্ডার")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > স্টকের প্রোডাক্ট সমূহ </NavLink>
        <NavLink to="/booklayout/learderboar" onClick={() => handleSelectBookCategory("অফার সমূহ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > লিডারবোর্ডের ২০০ বই </NavLink>
        <NavLink to="/booklayout/book-fair" onClick={() => handleSelectBookCategory("কুইজ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > বইমেলা ২০২৩ </NavLink>
        <NavLink to="/booklayout/new-prodocts" onClick={() => handleSelectBookCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > নতুন পণ্যসমূহ </NavLink>
        <NavLink to="/booklayout/islami-book" onClick={() => handleSelectBookCategory("ব্লগ")} className={`${({ isActive }) => isActive ? "sub-active" : "" } cursor-pointer hover:text-[#0397d3] transition ease-linear delay-300  pl-3 pr-3  pt-2 pb-2`} > ইসলামি বই </NavLink>
    </div>
    );
};

export default BookNavigationBar;