
import Header from '../Header/Header';
import Offers from './Offers';

const OffersLayout = () => {
    return (
        <>
             <Header />

            <div className="min-h-[50vh] bg-[#f1f2f4] py-10">
                <Offers></Offers>
            </div>
        </>
    );
};

export default OffersLayout;