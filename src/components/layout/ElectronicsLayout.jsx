import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ElectronicsNavigationBar from "../NavigationBar/ElectronicsNavigationBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";


const ElectronicsLayout = () => {
    return (
        <>
            <Header/>
            <NavigationBar/>
            <ElectronicsNavigationBar/>
            <div className="min-h-[40vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </>
    );
};

export default ElectronicsLayout;