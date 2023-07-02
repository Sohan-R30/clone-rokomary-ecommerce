import img1 from "../../assets/industrialOffers/connected/BGMEA-logo.png"
import img2 from "../../assets/industrialOffers/connected/BUBT.png"
import img3 from "../../assets/industrialOffers/connected/CRP-LOGO.png"
import img4 from "../../assets/industrialOffers/connected/Central-Womens-UNiversity.png"
import img5 from "../../assets/industrialOffers/connected/Channel-i.png"
import img6 from "../../assets/industrialOffers/connected/Daffodil.png"
import img7 from "../../assets/industrialOffers/connected/East_West_University_Logo.png"
import img8 from "../../assets/industrialOffers/connected/GP.png"
import img9 from "../../assets/industrialOffers/connected/HI-Tech.png"
import img10 from "../../assets/industrialOffers/connected/International_Islamic_University,_Chittagong_(crest).png"
import img11 from "../../assets/industrialOffers/connected/Janata_Bank.png"
import img12 from "../../assets/industrialOffers/connected/KUET_Logo.png"
import img13 from "../../assets/industrialOffers/connected/Logo(ASAUB).png"
import img14 from "../../assets/industrialOffers/connected/Logo-Writing.png"
import img15 from "../../assets/industrialOffers/connected/Logo_GIZ.png"
import img16 from "../../assets/industrialOffers/connected/Logo_of_DRMC.png"
import img17 from "../../assets/industrialOffers/connected/MBSTU-Admission-Result-2015-16.png"
import img18 from "../../assets/industrialOffers/connected/MIST.png"
import img19 from "../../assets/industrialOffers/connected/NMSTlogobangla.png"
import img21 from "../../assets/industrialOffers/connected/NSI.png"
import img22 from "../../assets/industrialOffers/connected/PUB.png"
import img23 from "../../assets/industrialOffers/connected/Robi_Airtel.png"
import img24 from "../../assets/industrialOffers/connected/SI-0001.png"
import img25 from "../../assets/industrialOffers/connected/STS-Group.png"
import img26 from "../../assets/industrialOffers/connected/Scholastica-Logo.png"
import img27 from "../../assets/industrialOffers/connected/Southeast-University-l.png"
import img28 from "../../assets/industrialOffers/connected/Standard_Chartered_logo_264x264.png"
import img29 from "../../assets/industrialOffers/connected/State-University.png"
import img30 from "../../assets/industrialOffers/connected/T1Lqtbz.png"
import img31 from "../../assets/industrialOffers/connected/UBL_Logo.png"
import img32 from "../../assets/industrialOffers/connected/Udvash-Academic-Admission-Care.png"
import img33 from "../../assets/industrialOffers/connected/bangladesh-agricultural-research-institute-logo.png"
import img34 from "../../assets/industrialOffers/connected/city_bank.png"
import img35 from "../../assets/industrialOffers/connected/drik_logo.png"
import img36 from "../../assets/industrialOffers/connected/epyllion-group.png"
import img37 from "../../assets/industrialOffers/connected/isd-logo.png"
import img38 from "../../assets/industrialOffers/connected/onnorokom-group.png"
import img39 from "../../assets/industrialOffers/connected/photo.png"
import img40 from "../../assets/industrialOffers/connected/photo-(1).png"
import img41 from "../../assets/industrialOffers/connected/pran.png"
import img42 from "../../assets/industrialOffers/connected/sagc-logo.png"
import img43 from "../../assets/industrialOffers/connected/sheiboi_logo_1200.png"
import img44 from "../../assets/industrialOffers/connected/stamford-logo.png"
import img45 from "../../assets/industrialOffers/connected/tib_logo_english.png"
import img46 from "../../assets/industrialOffers/connected/ulab.png"
import img47 from "../../assets/industrialOffers/connected/wildteam.png"

const IndustricalConnected = () => {
    const connectedImg = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40,
        img41,
        img42,
        img43,
        img44,
        img45,
        img46,
        img47,
    ]
    return (
        <div className="bg-white grid grid-cols-8 mx-40 gap-5 my-20">
            {
                connectedImg.map((imgs, index) => <img src={imgs} key={index}></img>)
            }
        </div>
    );
};

export default IndustricalConnected;