import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import NavigationBar from "../NavigationBar/NavigationBar";


const MainLayout = () => {
    return (
        <>
            <Header/>
            <NavigationBar/>
            <div className="min-h-[10vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </>
    );
};

export default MainLayout;