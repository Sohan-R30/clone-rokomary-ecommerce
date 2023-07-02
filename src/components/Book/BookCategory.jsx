
import BookFairAward from "../BookFairAward/BookFairAward";
import BookSlider from "../BookSlider/BookSlider";
import Delivery from "../Delivary/Delivery";
import BookNavigationBar from "../NavigationBar/BookNavigationBar";
import SubscribeOffers from "../SubscribeOffers/SubscribeOffers";


const BookCategory = () => {
    return (
        <div>
            <BookNavigationBar></BookNavigationBar>
            <div className="min-h-[50vh] bg-[#f1f2f4] py-5">
                <BookSlider />
                <BookFairAward />
                <SubscribeOffers/>
                <Delivery />
            </div>
        </div>
    );
};

export default BookCategory;