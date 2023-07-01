import Header from "../Header/Header";
import CopyRIghtFooter from "../Login/Footer/CopyRIghtFooter";
import LoginPageFooter from "../Login/Footer/LoginPageFooter";
import Login from "../Login/Login";
import NavigationBar from "../NavigationBar/NavigationBar";


const LoginLayout = () => {
    return (
        <>
            <Header />
            <NavigationBar />
            <div className="min-h-[50vh] bg-[#f1f2f4] py-10">
                <Login></Login>
            </div>
            <LoginPageFooter />
            <CopyRIghtFooter />
        </>
    );
};

export default LoginLayout;