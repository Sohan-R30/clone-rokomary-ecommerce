import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import BookNavigationBar from "../NavigationBar/BookNavigationBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainLayoutFooter from "../Login/Footer/MainLayoutFooter";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";


const BookLayout = () => {
    return (
        <div>
            <Header/>
           <div className="mt-32">
           <NavigationBar/>
           </div>
            <BookNavigationBar/>
            <div className="min-h-[40vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </div>
    );
};

export default BookLayout;