import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import KidsZoneNavigationBar from "../NavigationBar/KidsZoneNavigationBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";


const KidszoneLayout = () => {
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <KidsZoneNavigationBar/>
            <div className="min-h-[40vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </div>
    );
};

export default KidszoneLayout;