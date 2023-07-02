import GiftFinderConnect from "../GiftFinderConnect/GiftFinderConnect";
import GiftFinderPayment from "../GiftFinderPayment/GiftFinderPayment";
import ExtraHeader from "../Header/ExtraHeader";
import TopHeader from "../Header/TopHeader";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";
import FooterText from "../Login/Footer/FooterText";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import NavigationBar from "../NavigationBar/NavigationBar";
import GiftFinderSlider from "../giftFinderSlider/GiftFinderSlider";


const GiftFinderLayout = () => {
    return (
        <div>
        <TopHeader/>
        <ExtraHeader/>
        <NavigationBar small={true}/>
        {/* <BookNavigationBar/> */}
        <div className="min-h-[50vh]">
            {/* <Outlet></Outlet> */}
            <GiftFinderSlider/>

        </div>
        <GiftFinderConnect/>
        <GiftFinderPayment/>
        <MainLayoutFooter/>
        <FooterText/>
        <CopyRIghtFooter/>
    </div>
    );
};

export default GiftFinderLayout;