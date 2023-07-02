import IndustricalOffersBanner from "../Banner/industricalOffersBanner";
import ClientSlider from "../ClientSlider/ClientSlider";
import IndustricalConnected from "../Connected/IndustricalConnected";
import ExtraHeader from "../Header/ExtraHeader";
import TopHeader from "../Header/TopHeader";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import NavigationBar from "../NavigationBar/NavigationBar";
import RequestFrom from "../RequestForm/RequestFrom";
import IndustrialServices from "../Services/industrialServices";

const OfficialOffersLayout = () => {
    return (
        <div>
            <TopHeader/>
            <ExtraHeader/>
            <NavigationBar small={true}/>
            {/* <BookNavigationBar/> */}
            <IndustricalOffersBanner/>
            <IndustrialServices/>
            <ClientSlider/>
            <IndustricalConnected/>
            <RequestFrom/>

            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </div>
    );
};

export default OfficialOffersLayout;