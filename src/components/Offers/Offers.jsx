import bkashOffer from "../../assets/offers/bkash-offers.png"
import eidOffer from "../../assets/offers/eid-offers.png"
import extraOffer from "../../assets/offers/extradiscount.gif"
import mike from "../../assets/offers/rok-icon-mike.svg"
import watch from "../../assets/offers/rok-icon-watch.svg"
import terms from "../../assets/offers/rok-icon-terms.svg"
import { useState } from "react";


const Offers = () => {
    const [showBkashOfferDetails, setShowBkashOfferDetails] = useState(false);
    const [showEidOfferDetails, setShowEidOfferDetails] = useState(false);
    const [showExtraOfferDetails, setShowExtraOfferDetails] = useState(false);
    const [top, setTop] = useState("Bkash")
    const handleBkashOfferDetails = () => {
        setShowBkashOfferDetails(true)
        setShowExtraOfferDetails(false)
        setShowEidOfferDetails(false)
        setTop("Bkash")
    }
    const handleEidOfferDetails = () => {
        setShowEidOfferDetails(true)
        setShowBkashOfferDetails(false)
        setShowExtraOfferDetails(false)
        setTop("Eid")
    }
    const handleExtraOfferDetails = () => {
        setShowExtraOfferDetails(true)
        setShowEidOfferDetails(false)
        setShowBkashOfferDetails(false)
        setTop("Extra")
    }
    console.log(top)
    return (
        <>
            {top === "Bkash" && (
                <div className=" bg-white pt-2 mx-20 rounded-lg mb-8">
                    <div className=" px-5 mt-5">
                        <img className="mx-auto ] " src={bkashOffer} alt="bkash image" />
                        <div className="bg-[#f1f2f4]">
                            <div className="text-center text-5xl py-10">
                                <h3>বিকাশ ক্যাশব্যাক অফার</h3>
                            </div>
                            <div className={`flex  pb-8 ${showBkashOfferDetails ? "justify-around" : "justify-start"}`}>
                                <div className={`flex flex-col items-center gap-4 ${showBkashOfferDetails ? "" : "hidden"}`}>
                                    <img className="bg-[#e3e2e2] p-5  rounded-full" src={mike} alt="offers" />
                                    <p className="font-bold text-2xl">Offer</p>
                                </div>
                                <div className={`flex  items-center gap-4 ${showBkashOfferDetails ? "flex-col" : "ml-5"}`}>
                                    <img className="bg-[#e3e2e2] p-5  rounded-full" src={watch} alt="timer image" />
                                    <p className="font-bold text-2xl">Validation</p>
                                    <p>২০ থেকে ২৮ জুন ২০২৩ পর্যন্ত</p>
                                </div>
                            </div>
                        </div>
                        <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showBkashOfferDetails ? "hidden" : ""}`}>
                            <button onClick={handleBkashOfferDetails}>View Detals &gt; </button>
                        </div>
                        <div className={`my-10 ${showBkashOfferDetails ? "" : "hidden"}`}>
                            <div>
                                <img  className="bg-[#e3e2e2] p-5 mx-auto rounded-full" src={terms} alt="bkash image" />
                            </div>
                            <h3 className="text-center text-xl font-bold mt-4">Terms and Conditions:</h3>
                            <ul className=" list-disc mx-20 leading-9 text-xl text-gray-600 py-7">
                                <li>শুধুমাত্র নির্দিষ্ট তারিখ অর্থাৎ ২০ থেকে ২৮ জুন পর্যন্ত অর্ডারকারীরা বিকাশে পেমেন্ট করলে ১০% ক্যাশব্যাক অফারের আওতাভুক্ত হবেন।  </li>
                                <li>অফার চলাকালীন সময়ে বিকাশের মাধ্যমে পেমেন্ট করলে ১০% ইন্সট্যান্ট ক্যাশব্যাক। এক দিনে ২০০ টাকা এবং পুরো ক্যাম্পেইন জুড়ে সর্বোচ্চ ৫০০ টাকা পর্যন্ত ক্যাশব্যাক পাবেন।</li>
                                <li>বিকাশ App, PGW & USSD এর মাধ্যমে পেমেন্ট করলেই ক্যাশব্যাক অফার কার্যকর হবে।</li>
                                <li>অফারটি পেতে অবশ্যই একটি একটিভ বিকাশ অ্যাকাউন্ট থাকতে হবে। </li>
                                <li>অফার সংক্রান্ত সকল অফারের শর্তাবলী পরিবর্তন/পরিবর্ধন/বর্ধিত করার অধিকার রকমারি সংরক্ষণ করে, এবং ক্যাশব্যাক অফারের শর্তাবলী পরিবর্তন/পরিবর্তন/বর্ধিত করার অধিকার বিকাশ এবং রকমারি সংরক্ষণ করে</li>
                                <li>বিকাশ অ্যাকাউন্টের মাধ্যমে পেমেন্টের জন্য এই অফারটির বিষয়ে বিকাশ দ্বারা গৃহীত যেকোনো সিদ্ধান্ত বিকাশ-এর নিজস্ব বিবেচনার মধ্যে থাকবে এবং সেটা চূড়ান্ত বলে গণ্য হবে</li>
                                <li>এই অফারের বিষয়ে কোনো প্রকার বিভ্রান্তি বা সাংঘর্ষিক কিছু মনে হলে তার সত্যতা নিশ্চিত করতে বা প্রয়োজনীয় তথ্যের জন্য তা অবিলম্বে রকমারি কর্তৃপক্ষকে বা বিকাশ কর্তৃপক্ষকে অবহিত করতে হবে।</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            }
            {
                top === "Eid" && (
                    <div className=" bg-white pt-2  rounded-lg mb-8">
                        <div className=" px-5 mt-5">
                            <img className="mx-auto" src={eidOffer} alt="bkash image" />
                            <div className="bg-[#f1f2f4]">
                                <div className="text-center text-5xl py-10">
                                    <h3>ঈদের খুশি জমুক বেশি</h3>
                                </div>
                                <div className={`flex  pb-8 ${showEidOfferDetails ? "justify-around" : "justify-start"}`}>
                                    <div className={`flex flex-col items-center gap-4 ${showEidOfferDetails ? "" : "hidden"}`}>
                                        <img className="bg-[#e3e2e2] p-5  rounded-full" src={mike} alt="offers" />
                                        <p className="font-bold text-2xl">Offer</p>
                                        <p className="text-center">ঈদের খুশি জমুক বেশি <br />
                                            ঈদ-উল আযহা উপলক্ষে। <br />
                                            ২৮জুন - ১জুলাই, ২০২৩ <br />
                                            অতিরিক্ত ১০% ছাড়! <br />
                                            ৮৯৯৳+ অর্ডারে (SALAMI কোড ব্যবহারে)</p>
                                    </div>
                                    <div className={`flex  items-center gap-4 ${showEidOfferDetails ? "flex-col" : "ml-5"}`}>
                                        <img className="bg-[#e3e2e2] p-5  rounded-full" src={watch} alt="timer image" />
                                        <p className="font-bold text-2xl">Validation</p>
                                        <p>২৮ জুন থেতে ১ জুলাই পর্যন্ত</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showEidOfferDetails ? "hidden" : ""}`}>
                                <button onClick={handleEidOfferDetails}>View Detals &gt; </button>
                            </div>
                            <div className={`py-10 ${showEidOfferDetails ? "" : "hidden"}`}>
                                <div>
                                    <img className="mx-auto bg-[#e3e2e2] p-5  rounded-full" src={terms} alt="bkash image" />
                                </div>
                                <h3 className="text-center text-xl font-bold mt-4">Terms and Conditions:</h3>
                                <ul className=" list-disc mx-20 leading-9 text-xl text-gray-600 py-7">
                                    <li>নির্দিষ্ট সময় অর্থাৎ ২৮ জুন - ১ জুলাই ২০২৩ পর্যন্ত এই অফার চলবে। </li>
                                    <li>অতিরিক্ত ১০% ছাড়, ডেলিভারি চার্জ বাদে ৮৯৯৳ অর্ডারে (SALAMI কোড ব্যবহারে) </li>
                                    <li>সর্বোচ্চ ২০০৳ পর্যন্ত ছাড়। </li>
                                    <li>শুধু মাত্র  বইয়ের ক্ষেত্রে এই অফার প্রযোজ্য থাকবে।</li>
                                    <li>একটি অর্ডারে একাধিক প্রমোকোড ব্যবহার করা যাবে না।</li>
                                    <li>গ্রাহককে অবশ্যই রকমারি অ্যাকাউন্টে লগইন করা থাকতে হবে এবং ‘SALAMI’ প্রমোকোড ব্যবহার করতে হবে।</li>
                                    <li>কোন গ্রাহক অর্ডার ক্যান্সেল করলে, পার্সেল রিসিভ না করলে কিংবা অর্ডার রিটার্ন করলে তিনি এই অফার থেকে বাদ পড়বেন।</li>
                                    <li>রিকোয়েস্ট ফর স্টক বইয়ের অর্ডারের ক্ষেত্রে এই প্রোমোকোড প্রযোজ্য নয়।</li>
                                    <li>কোন প্রতিষ্ঠান কিংবা লাইব্রেরির জন্য নেয়া অর্ডার এই অফারের অন্তর্ভুক্ত হবে না।</li>
                                    <li>রকমারি ডট কম তথা অন্যরকম গ্রুপ এর কোন কর্মকর্তা এই অফারে অংশ নিতে পারবেন না।</li>
                                    <li>অফার সংক্রান্ত যে কোন পরিবর্তন, পরিমার্জন এবং যে কোন সময় অফার বাতিলের সমস্ত অধিকার রকমারি.কম সংরক্ষণ করে।</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                top === "Extra" && (
                    <div className=" bg-white pt-2 rounded-lg mb-8">
                        <div className=" px-5 mt-5">
                            <img className="mx-auto" src={extraOffer} alt="bkash image" />
                            <div className="bg-[#f1f2f4]">
                                <div className="text-center text-5xl py-10">
                                    <h3>Extra Discount</h3>
                                </div>
                                <div className={`flex  pb-8 ${showExtraOfferDetails ? "justify-around" : "justify-start"}`}>
                                    <div className={`flex flex-col items-center gap-4 ${showExtraOfferDetails ? "" : "hidden"}`}>
                                        <img className="bg-[#e3e2e2] p-5  rounded-full" src={mike} alt="offers" />
                                        <p className="font-bold text-2xl">Offer</p>
                                    </div>
                                    <div className={`flex  items-center gap-4 ${showExtraOfferDetails ? "flex-col" : "ml-5"}`}>
                                        <img className="bg-[#e3e2e2] p-5  rounded-full" src={watch} alt="timer image" />
                                        <p className="font-bold text-2xl">Validation</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showExtraOfferDetails ? "hidden" : ""}`}>
                                <button onClick={handleExtraOfferDetails}>View Detals &gt; </button>
                            </div>
                            <div className={`py-10 ${showExtraOfferDetails ? "" : "hidden"}`}>
                                <div>
                                    <img className="mx-auto bg-[#e3e2e2] p-5  rounded-full" src={terms} alt="bkash image" />
                                </div>
                                <h3 className="text-center text-xl font-bold mt-4">Terms and Conditions:</h3>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex gap-8 mx-20">
                <div className={` bg-white pt-2  rounded-lg mb-8 ${top === "Eid" ? "hidden" : ""}`}>
                    <div className=" px-5 mt-5">
                        <img className="mx-auto" src={eidOffer} alt="bkash image" />
                        <div className="bg-[#f1f2f4]">
                            <div className="text-center text-5xl py-10">
                                <h3>ঈদের খুশি জমুক বেশি</h3>
                            </div>
                            <div className={`flex  pb-8 ${showEidOfferDetails ? "justify-around" : "justify-start"}`}>
                                <div className={`flex flex-col items-center gap-4 ${showEidOfferDetails ? "" : "hidden"}`}>
                                    <img src={mike} alt="offers" />
                                    <p className="font-bold text-2xl">Offer</p>
                                    <p className="text-center">ঈদের খুশি জমুক বেশি <br />
                                        ঈদ-উল আযহা উপলক্ষে। <br />
                                        ২৮জুন - ১জুলাই, ২০২৩ <br />
                                        অতিরিক্ত ১০% ছাড়! <br />
                                        ৮৯৯৳+ অর্ডারে (SALAMI কোড ব্যবহারে)</p>
                                </div>
                                <div className={`flex  items-center gap-4 ${showEidOfferDetails ? "flex-col" : "ml-5"}`}>
                                    <img src={watch} alt="timer image" />
                                    <p className="font-bold text-2xl">Validation</p>
                                    <p>২৮ জুন থেতে ১ জুলাই পর্যন্ত</p>
                                </div>
                            </div>
                        </div>
                        <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showEidOfferDetails ? "hidden" : ""}`}>
                            <button onClick={handleEidOfferDetails}>View Detals &gt; </button>
                        </div>
                    </div>
                </div>
                <div className={` bg-white pt-2 rounded-lg mb-8 ${top === "Extra" ? "hidden" : ""}`}>
                    <div className=" px-5 mt-5">
                        <img className="mx-auto" src={extraOffer} alt="bkash image" />
                        <div className="bg-[#f1f2f4]">
                            <div className="text-center text-5xl py-10">
                                <h3>Extra Discount</h3>
                            </div>
                            <div className={`flex  pb-8 ${showExtraOfferDetails ? "justify-around" : "justify-start"}`}>
                                <div className={`flex flex-col items-center gap-4 ${showExtraOfferDetails ? "" : "hidden"}`}>
                                    <img src={mike} alt="offers" />
                                    <p className="font-bold text-2xl">Offer</p>
                                </div>
                                <div className={`flex  items-center gap-4 ${showExtraOfferDetails ? "flex-col" : "ml-5"}`}>
                                    <img src={watch} alt="timer image" />
                                    <p className="font-bold text-2xl">Validation</p>
                                </div>
                            </div>
                        </div>
                        <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showExtraOfferDetails ? "hidden" : ""}`}>
                            <button onClick={handleExtraOfferDetails}>View Detals &gt; </button>
                        </div>
                    </div>
                </div>
                <div className={` bg-white pt-2 rounded-lg mb-8 ${top === "Bkash" ? "hidden" : ""}`}>
                    <div className=" px-5 mt-5">
                        <img className="mx-auto" src={bkashOffer} alt="bkash image" />
                        <div className="bg-[#f1f2f4]">
                            <div className="text-center text-5xl py-10">
                                <h3>বিকাশ ক্যাশব্যাক অফার</h3>
                            </div>
                            <div className={`flex  pb-8 ${showBkashOfferDetails ? "justify-around" : "justify-start"}`}>
                                <div className={`flex flex-col items-center gap-4 ${showBkashOfferDetails ? "" : "hidden"}`}>
                                    <img src={mike} alt="offers" />
                                    <p className="font-bold text-2xl">Offer</p>
                                </div>
                                <div className={`flex  items-center gap-4 ${showBkashOfferDetails ? "flex-col" : "ml-5"}`}>
                                    <img src={watch} alt="timer image" />
                                    <p className="font-bold text-2xl">Validation</p>
                                    <p>২০ থেকে ২৮ জুন ২০২৩ পর্যন্ত</p>
                                </div>
                            </div>
                        </div>
                        <div className={`py-10 text-center text-xl text-blue-400 font-bold ${showBkashOfferDetails ? "hidden" : ""}`}>
                            <button onClick={handleBkashOfferDetails}>View Detals &gt; </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offers;