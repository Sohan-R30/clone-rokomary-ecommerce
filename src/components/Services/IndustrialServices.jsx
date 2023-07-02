
import book from "../../assets/industrialOffers/corporate_book.png"
import price from "../../assets/industrialOffers/corporate_tag.png"
import delivary from "../../assets/industrialOffers/corporate_delivery.png"
const IndustrialServices = () => {
    return (
        <div>
            <p className="text-center text-4xl py-10 text-gray-800">Why Choose Us</p>
            <div className="flex mx-40 gap-5">
                <div>
                   <div className="border border-[#8bc2ef] w-24  p-2 rounded-full text-center mx-auto ">
                   <img className="bg-[#8bc2ef] p-4 rounded-full w-20 text-center mx-auto" src={book} alt="" />
                   </div>
                    <p className="text-2xl text-center mx-auto pt-3">Largest Book Collection</p>
                    <p className="text-gray-500 max-w-md text-center mx-auto pt-3">&rdquo;Reading book is a wonderful experience and 
                        there&rsquo;s an explorer in all of us who shouldn&rsquo;t be 
                        lost at any cost. We offer splendid discounts on bulk purchases.&rdquo;</p>
                </div>
                <div>
                   <div className="border border-[#8bc2ef] w-24  p-2 rounded-full text-center mx-auto ">
                   <img className="bg-[#8bc2ef] p-4 rounded-full w-20 text-center mx-auto" src={price} alt="" />
                   </div>
                    <p className="text-2xl text-center mx-auto pt-3">Best Price</p>
                    <p className="text-gray-500 max-w-md text-center mx-auto pt-3">Reading book is a wonderful experience and there&rsquo;s an explorer in all of us who shouldn&rsquo;t be lost at any cost. We offer splendid discounts on bulk purchases</p>
                </div>
                <div>
                   <div className="border border-[#8bc2ef] w-24  p-2 rounded-full text-center mx-auto ">
                   <img className="bg-[#8bc2ef] p-4 rounded-full w-20 text-center mx-auto" src={delivary} alt="" />
                   </div>
                    <p className="text-2xl text-center mx-auto pt-3">On Time Delivery</p>
                    <p className="text-gray-500 max-w-md text-center mx-auto pt-3">On Time 24/7 Delivery is available to meet your unique on-demand and scheduled delivery needs. Our professional executives and friendly customer service will ensure your books are delivered reliability to their destination and it will be free of cost.</p>
                </div>
            </div>
        </div>
    );
};

export default IndustrialServices;