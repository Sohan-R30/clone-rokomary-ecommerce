
const SubscribeOffers = () => {
    return (
        <div className="text-center bg-white py-5 mx-20 rounded-md">
            <p className="text-2xl">Subscribe and be a part of Rokomari and get exciting offers!</p>
            <div className="flex gap-8 justify-center py-3">
                <input type="text" name="subscribeOffers" className="border border-gray-400 py-2 px-5 outline-none" />
                <button className="border border-blue-400 text-blue-400 px-4 py-2 hover:bg-[#2e97ed] hover:text-white  transition ease-linear delay-100 rounded-md">Subscribe</button>
            </div>
        </div>
    );
};

export default SubscribeOffers;