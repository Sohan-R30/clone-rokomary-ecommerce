import img1 from "../../assets/giftFInder/man.png"
import img2 from "../../assets/giftFInder/women.png"
import img3 from "../../assets/giftFInder/teen.png"
import img5 from "../../assets/giftFInder/kids1.png"
import img4 from "../../assets/giftFInder/kids2.png"
import img6 from "../../assets/giftFInder/babies.png"

const GiftFinderSlider = () => {
    return (
        <div className={`bg-[#86298e] py-10`}>
        <div className="text-center mx-auto text-white py-10">
            <p className="text-4xl pb-5">I need a gift for</p>
            <div className="flex items-center gap-5 justify-center mt-5 text-xl pt-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </div>
    </div>
    );
};

export default GiftFinderSlider;