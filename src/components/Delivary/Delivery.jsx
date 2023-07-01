import cashOnDelivaryicon from "../../assets/cashonDelivary.svg"
import delivaryicon from "../../assets/delivery_icon.svg"
import returnicon from "../../assets/happy-return-big.svg"


const Delivery = () => {
    return (
       <div className="flex justify-center gap-10 items-center py-10">
         <div className='flex items-center gap-4'>
            <img className="w-10" src={cashOnDelivaryicon} alt="" />
            <div>
                <p className="text-md uppercase leading-8">CASH ON DELIVERY</p>
                <p className="text-xs"> Pay cash at your doorstep</p>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <img className="w-10" src={delivaryicon} alt="" />
            <div>
                <p className="text-md uppercase leading-8">CASH ON DELIVERY</p>
                <p className="text-xs"> Pay cash at your doorstep</p>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <img className="w-10" src={returnicon} alt="" />
            <div>
                <p className="text-md uppercase leading-8">CASH ON DELIVERY</p>
                <p className="text-xs"> Pay cash at your doorstep</p>
            </div>
        </div>
       </div>
    );
};

export default Delivery;