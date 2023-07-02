import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import NavigationBar from "../NavigationBar/NavigationBar";


const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className="mt-32">
           <NavigationBar/>
           </div>
            <div className="min-h-[40vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </>
    );
};

export default MainLayout;