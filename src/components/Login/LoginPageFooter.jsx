import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { TfiGift } from 'react-icons/tfi';
import onnorokomLogo from "../../assets/onnorokom_logo.png"
import onnorokomCopyRight from "../../assets/copyright-img.png"
const LoginPageFooter = () => {
    return (
        <div>
            <div className='flex justify-center my-5 bg-white items-center gap-10'>
            <div>
                <img src={onnorokomLogo} alt="onnorokom logo" />
            </div>
            <div className="text-gray-500 flex flex-col gap-3">
                <p className='flex items-center gap-3'><span className='text-2xl text-green-500'><RiWhatsappFill/></span> Customer Care: <span className="font-bold text-black"> 01519521971 </span> <sub>(Whatsapp Message Only)</sub></p>
                <p className='flex items-center gap-3'><span className='text-xl'><AiOutlineMail/></span> Email : <span className="font-bold text-black">admin@rokomari.com</span></p>
                <p className='flex items-center gap-3'><span className='text-xl'><TfiGift/></span>To be a seller! Email Us: : <span className="font-bold text-black">seller@rokomari.com</span></p>
                <p className='flex items-center gap-3'><span className='text-xl'><TfiGift/></span>Corporate Sales:: <span className="font-bold text-black"> 01519521971 </span> <sub>(E.g. Pharmaceuticals, Banks, Insurances & other Corporate Houses)</sub></p>
                <p className='flex items-center gap-3'><span className='text-xl'><TfiGift/></span>Retailer Only: : <span className="font-bold text-black">wholesale@rokomari.com</span></p>
            </div>
        </div>
        <div className='flex items-center justify-center bg-[#f1f2f4] text-[10px] py-2 gap-1 text-gray-500'>
            <p>&copy; 2012-2023 Rokomari.com</p>
            <img src={onnorokomCopyRight} alt="copy right image" />
        </div>
        </div>
    );
};

export default LoginPageFooter;