
import { BiFemale } from "react-icons/bi";
import { FaMale } from "react-icons/fa";

const GiftFinderConnect = () => {
    return (
        <div className="flex gap-8 items-center justify-center py-10 border-t border-b">
        <p>Great offers, Direct to your inbox and stay one step ahead.</p>
        <input type="email" name="email" className="border px-5 py-2"/>
        <button className=" px-4 py-2 text-md bg-[#4490a5] text-white rounded-md flex items-center gap-3"><FaMale/>Male</button>
        <button className=" px-4 py-2 text-md bg-[#4490a5] text-white rounded-md flex items-center gap-3"><BiFemale/>Female</button>
    </div>
    );
};

export default GiftFinderConnect;