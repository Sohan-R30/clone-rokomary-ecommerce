
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainLayoutFooter from '../Login/Footer/MainLayoutFooter';
import CopyRIghtFooter from '../Login/Footer/CopyRIghtFooter';
import MonihariNavigationBar from '../NavigationBar/MonihariNavigationBar';

const MonihariLayout = () => {
    return (
        <div>
            <Header/>
            <div className="mt-32">
           <NavigationBar/>
           </div>
            <MonihariNavigationBar/>
            <div className="min-h-[40vh]">
                <Outlet></Outlet>
            </div>
            <MainLayoutFooter/>
            <CopyRIghtFooter/>
        </div>
    );
};

export default MonihariLayout;