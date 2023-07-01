import { RiWhatsappFill } from "react-icons/ri";
import onnorokomLogo from "../../../assets/onnorokom_logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { TfiGift } from "react-icons/tfi";
import onnorokomFavIcon from "../../../assets/rokomary-favicon.jpeg"
import playStore from "../../../assets/icon-play-store.png"
import appStore from "../../../assets/icon-app-store.png"
import facebookIcon from "../../../assets/facebook.png"
import twitterIcon from "../../../assets/twitter.png"
import instagramIcon from "../../../assets/instagram.png"
import youtubeIcon from "../../../assets/youtube.png"
import linkedIndIcon from "../../../assets/linkedin.png"
const MainLayoutFooter = () => {
    return (
        <div className="bg-white flex justify-around">
            <div className="mx-20 py-8 max-w-xs">
                <img className="mb-5 w-28" src={onnorokomLogo} alt="onno rokom logo" />
                <div className="text-gray-500 flex flex-col items-start gap-5">
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl text-green-500 mr-4'><RiWhatsappFill /></p>
                            <p>Customer Care</p>
                        </div>
                        <p className="font-bold text-black ml-10"> 01519521971 </p>
                        <sub className="ml-10 pt-1">(Whatsapp Message Only)</sub>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl mr-4'><AiOutlineMail /></p>
                            <p>Email </p>
                        </div>
                        <p className="font-bold text-black ml-10"> admin@rokomari.com </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl mr-4'><TfiGift /></p>
                            <p>To be a seller! Email Us </p>
                        </div>
                        <p className="font-bold text-black ml-10"> seller@rokomari.com </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl mr-4'><TfiGift /></p>
                            <p>Corporate Sales </p>
                        </div>
                        <p className="font-bold text-black ml-10"> 01519521971 </p>
                        <p className="ml-10 pt-1 text-xs">E.g. Pharmaceuticals, Banks, Insurances & other Corporate Houses)</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl mr-4'><TfiGift /></p>
                            <p>Retailer Only </p>
                        </div>
                        <p className="font-bold text-black ml-10"> wholesale@rokomari.com </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <p className='text-2xl mr-4'><TfiGift /></p>
                            <p>2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-8 footer-list max-w-xl justify-between">
                <div>
                    <h4 className="pb-3">Home</h4>
                    <ul>
                        <li>Books</li>
                        <li>Electronics</li>
                        <li>Accessories</li>
                        <li>Gift Card</li>
                        <li>Stationery</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-3">Products</h4>
                    <ul>
                        <li>Authors</li>
                        <li>Publishers</li>
                        <li>List</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-3">Get to know us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-3">Shop by</h4>
                    <ul>
                        <li>Book Category</li>
                        <li>Electronics Category</li>
                        <li>Boi Mela 2023</li>
                        <li>Islamic Book</li>
                        <li>Pre Order</li>
                        <li>Foreign Books</li>
                        <li>Best Selling</li>
                        <li>Extra Discount</li>
                        <li>Stationery</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-3">Support</h4>
                    <ul>
                        <li>Order Track</li>
                        <li>Contact Us</li>
                        <li>Find My Product</li>
                        <li>FAQ</li>
                        <li>FAQ - Happy Return</li>
                        <li>Help Desk</li>
                        <li>Writer/Publisher Request</li>
                        <li>Retailer Request</li>
                    </ul>
                </div>
                <div>
                    <h4 className="pb-3">Policies</h4>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Happy Return</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
            <div className="mr-20 mt-8">
                <div>
                    <h4 className="text-xl pb-5">Stay Connected</h4>
                    <div className="flex gap-3 mb-5">
                        <img className="w-8" src={facebookIcon} alt="facebook icon" />
                        <img className="w-8" src={twitterIcon} alt="twitter icon" />
                        <img className="w-8" src={linkedIndIcon} alt="linkedin icon" />
                        <img className="w-8" src={instagramIcon} alt="instagram icon" />
                        <img className="w-8" src={youtubeIcon} alt="youtube icon" />
                    </div>
                </div>
                <div className="flex gap-3 items-center pb-2">
                    <img className="w-10" src={onnorokomFavIcon} alt="Onno rokom logo" />
                    <h4>Download App</h4>
                </div>
                <div className="flex gap-5">
                    <img className="w-28" src={appStore} alt="app store icon" />
                    <img className="w-28" src={playStore} alt="play store icon" />
                </div>
            </div>
        </div>
    );
};

export default MainLayoutFooter;