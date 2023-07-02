import bookfair from "../../assets/books/book_fair_logo.svg"

const BookFairAward = () => {
    return (
        <div className="flex gap-10 items-center mx-20 py-5">
            <img src={bookfair} alt="" />
            <p>অনলাইন বইমেলার সাথে শেষ হয়ে গেলো নগদ-রকমারি বইমেলা 
                বেস্টসেলার অ্যাওয়ার্ডের লিডারবোর্ডের টান টান উত্তেজনা। কে হবে 
                বেস্টসেলার লেখক, কী হবে বেস্টসেলার বই- সব জল্পনা-কল্পনার 
                অবসান ঘটিয়ে পাঠক প্রিয়তায় জায়গা করে নেয়া বই এবং লেখক 
                দেখে নিন এক নজরে। আপনার প্রিয় লেখক আছেন তো এবারের 
                বেস্টসেলার তালিকায়? তাছাড়া এবারের বেস্টসেলার লেখকের বইটি 
                আপনি পড়েছেন তো?
            </p>
        </div>
    );
};

export default BookFairAward;