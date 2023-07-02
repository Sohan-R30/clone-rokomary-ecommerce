import HCaptcha from '@hcaptcha/react-hcaptcha';


const RequestFrom = () => {
    return (
        <div className={`bg-[#007ce4] industrialBanner`}>
            <p className="text-4xl text-center text-white py-10">Request A Qoute</p>
            <form  className='mx-auto w-96 '>
                <div className="flex flex-col py-3">
                    <label htmlFor="name"><span>*</span> <span className="text-gray-200 ">Name:</span></label>
                    <input className="mx-auto w-96 py-3 bg-[#8ac9ff] rounded-md" type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor="organizationName"><span>*</span> <span className="text-gray-200">Organization&rsquo;s Name:</span></label>
                    <input className="mx-auto w-96 py-3 bg-[#8ac9ff] rounded-md" type="text" name="organizationName" id="organizationName" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor="phone"><span>*</span> <span className="text-gray-200">Phone:</span></label>
                    <input className=" mx-auto w-96 py-3 bg-[#8ac9ff] rounded-md" type="number" name="phone" id="phone" />
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor="file"><span>*</span> <span className="text-gray-200">Upload Product-List File (Max. 10MB)</span></label>
                    <input className=" mx-auto w-96 py-3 bg-transparent border-dashed border-2 border-black  rounded-md" type="file" name="file" id="file" />
                </div>
                <div className='mx-auto'>
                    <HCaptcha
                        sitekey="3a2f0ae6-d4fb-4a79-be41-4c6818e7902c"
                        // onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                    />
                </div>
                <div className="flex flex-col pt-5 pb-10">
                    <input className="mx-auto w-96 py-3 bg-white rounded-md" type="submit" value="submit" name="submit" id="submit" />
                </div>
            </form>
        </div>
    );
};

export default RequestFrom;