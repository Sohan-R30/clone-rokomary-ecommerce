import onnorokomCopyRight from "../../../assets/copyright-img.png";

const CopyRIghtFooter = () => {
    return (
        <div className='flex items-center justify-center bg-[#f1f2f4] text-[10px] py-2 gap-1 text-gray-500'>
        <p>&copy; 2012-2023 Rokomari.com</p>
        <img src={onnorokomCopyRight} alt="copy right image" />
    </div>
    );
};

export default CopyRIghtFooter;