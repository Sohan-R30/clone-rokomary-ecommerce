import payment1 from "../../assets/giftFInder/payment1.png"
import payment2 from "../../assets/giftFInder/payment3.png"
import payment3 from "../../assets/giftFInder/payment4.png"
import payment4 from "../../assets/giftFInder/city.png"
import payment5 from "../../assets/giftFInder/amex.png"
const GiftFinderPayment = () => {
    return (
        <div className="flex gap-3 justify-center py-10 border-t border-b">
            <p>You can pay using</p>
            <img src={payment1} alt="" />
            <img src={payment2} alt="" />
            <img src={payment3} alt="" />
            <img src={payment5} alt="" />
            <img src={payment4} alt="" />
        </div>
    );
};

export default GiftFinderPayment;