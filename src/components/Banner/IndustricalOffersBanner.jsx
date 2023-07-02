import { BsFillTelephoneFill } from 'react-icons/bs';

// TODO: link to request
const IndustricalOffersBanner = () => {
    return (
        <div className={`bg-[#007ce4] industrialBanner`}>
            <div className="text-center mx-auto text-white py-10">
                <p className="text-4xl pb-5">রকমারি থেকে প্রাতিষ্ঠানিক ক্লায়েন্টরা পাচ্ছেন কাস্টমাইজড সার্ভিস</p>
                <p className="text-xl max-w-5xl mx-auto">টেন্ডার, RFQ অথবা ডিরেক্ট পারচেজ যেভাবেই কেনা হোক, যত কপি-ই
                    অর্ডার করা হোক না কেন বাংলাদেশের যেকোন স্থানে বই পৌছে দিচ্ছে রকমারি।
                    স্কুল, কলেজ, বিশ্ববিদ্যালয়, লাইব্রেরি, কর্পোরেট হাউজ, ব্যাংক, বীমা, NGO,
                    ডিফেন্স এবং সরকারি-বেসরকারি সব ধরনের প্রতিষ্ঠানে সর্বোচ্চ ডিস্কাউন্টে দেশি-বিদেশি
                    অরিজিনাল প্রিন্টেড বই সরবরাহ করছে রকমারি কর্পোরেট সেলস টীম।
                </p>
                <div className="flex items-center gap-5 justify-center mt-5 text-xl pt-10">
                    <button className=" py-4 px-10 rounded-md text-blue-400 bg-white hover:bg-[#2e97ed] hover:text-white  transition ease-linear delay-100">Request A Quote </button>
                    <p> OR  </p>
                    <p className="flex items-center gap-3 text-[#edf180]"><BsFillTelephoneFill/> +8801708166239 (9.00AM - 7.00PM)</p>
                </div>
            </div>
        </div>
    );
};

export default IndustricalOffersBanner;