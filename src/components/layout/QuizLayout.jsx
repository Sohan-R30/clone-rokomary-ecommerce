
import Header from '../Header/Header';
import CopyRIghtFooter from '../Login/Footer/CopyRIghtFooter';
import LoginPageFooter from '../Login/Footer/LoginPageFooter';
import NavigationBar from '../NavigationBar/NavigationBar';
import QuizCategory from '../Quiz/QuizCategory';

const QuizLayout = () => {
    return (
        <>
            <Header />
            <NavigationBar/>
            <div className="min-h-[50vh] bg-[#f1f2f4] py">
                <QuizCategory></QuizCategory>
            </div>
            <LoginPageFooter/>
            <CopyRIghtFooter/>
        </>
    );
};

export default QuizLayout;