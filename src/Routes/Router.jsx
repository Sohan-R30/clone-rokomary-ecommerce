import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import LoginLayout from "../components/layout/LoginLayout";
import BookCategory from "../components/Book/BookCategory";
import BookLayout from "../components/layout/BookLayout";
import ElectronicsLayout from "../components/layout/ElectronicsLayout";
import ElectronicsCategory from "../components/Electronics/ElectronicsCategory";
import MonihariCategory from "../components/Monihari.jsx/MonihariCategory";
import KidszoneLayout from "../components/layout/KidszoneLayout";
import MonihariLayout from "../components/layout/MonihariLayout";
import KidsZoneCategoy from "../components/KidsZone/KidsZoneCategory";
import OffersLayout from "../components/layout/OffersLayout";
import QuizLayout from "../components/layout/QuizLayout";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/book",
                element: <BookCategory/>,
            },
            {
                path: "/electronics",
                element: <ElectronicsCategory/>
            },
            {
                path: "/monihari",
                element: <MonihariCategory/>
            },
            {
                path: "/kids-zone",
                element: <KidsZoneCategoy/>
            },
            {
                path: "/gift-finder",
                element: <p className=" text-center text-2xl">gift-finder</p>
            },
            {
                path: "/insdustrial-order",
                element: <p className=" text-center text-2xl">insdustrial-order</p>
            },
            {
                path: "/offers",
                element: <OffersLayout/>
            },
            {
                path: "/blog",
                element: <p className=" text-center text-2xl">blog</p>
            },
        ]
    },
    {
        path: "login",
        element: <LoginLayout/>
    },
    {
        path: "/quiz",
        element: <QuizLayout/>
    },
    {
        path: "booklayout",
        element: <BookLayout/>,
        children: [
            {
                path: "writer",
                element: <p className="text-center text-2xl">writer</p>
            },
            {
                path: "subject",
                element: <p className=" text-center text-2xl">subject</p>
            },
            {
                path: "publication",
                element: <p className=" text-center text-2xl">publication</p>
            },
            {
                path: "ebook",
                element: <p className=" text-center text-2xl">e-book</p>
            },
            {
                path: "offers",
                element: <p className=" text-center text-2xl">offers</p>
            },
            {
                path: "stock-products",
                element: <p className=" text-center text-2xl">stock-products</p>
            },
            {
                path: "learderboar",
                element: <p className=" text-center text-2xl">learderboar</p>
            },
            {
                path: "book-fair",
                element: <p className=" text-center text-2xl">book-fair</p>
            },
            {
                path: "new-prodocts",
                element: <p className=" text-center text-2xl">new-prodocts</p>
            },
            {
                path: "islami-book",
                element: <p className=" text-center text-2xl">islami-book</p>
            }
        ]
    },
    {
        path: "electronicsLayout",
        element: <ElectronicsLayout/>,
        children: [
            {
                path: "science-kit",
                element: <p className="text-center text-2xl">science-kit</p>
            },
            {
                path: "smart-watch",
                element: <p className=" text-center text-2xl">smart-watch</p>
            },
            {
                path: "keyboard",
                element: <p className=" text-center text-2xl">keyboard</p>
            },
            {
                path: "mouse",
                element: <p className=" text-center text-2xl">mouse</p>
            },
            {
                path: "router",
                element: <p className=" text-center text-2xl">router</p>
            },
            {
                path: "power-bank",
                element: <p className=" text-center text-2xl">power-bank</p>
            },
            {
                path: "headphone",
                element: <p className=" text-center text-2xl">headphone</p>
            },
            {
                path: "UPS-&-Stabilizer",
                element: <p className=" text-center text-2xl">UPS-&-Stabilizer</p>
            },
            {
                path: "pen-drive",
                element: <p className=" text-center text-2xl">pen-drive</p>
            },
            {
                path: "speaker",
                element: <p className=" text-center text-2xl">speaker</p>
            },
            {
                path: "antivirus",
                element: <p className=" text-center text-2xl">antivirus</p>
            },
            {
                path: "popular-list",
                element: <p className=" text-center text-2xl">popular-list</p>
            }
        ]
    },
    {
        path: "monihariLayout",
        element: <MonihariLayout/>,
        children: [
            {
                path: "islamic-accessories",
                element: <p className="text-center text-2xl">Islamic Accessories</p>
            },
            {
                path: "stationery",
                element: <p className=" text-center text-2xl">Stationery</p>
            },
            {
                path: "organic-food",
                element: <p className=" text-center text-2xl">Organic Food </p>
            },
            {
                path: "beauty-&-personal-care",
                element: <p className=" text-center text-2xl">Beauty & Personal Care</p>
            },
            {
                path: "voucher",
                element: <p className=" text-center text-2xl">Voucher</p>
            },
            {
                path: "diary-notebook",
                element: <p className=" text-center text-2xl">Diary/Notebook</p>
            },
            {
                path: "calculator",
                element: <p className=" text-center text-2xl">Calculator</p>
            },
            {
                path: "bag",
                element: <p className=" text-center text-2xl">Bag</p>
            },
            {
                path: "covid-19-protection-products",
                element: <p className=" text-center text-2xl">Covid-19 Protection Product</p>
            },
        ]
    },
    {
        path: "kidzoneLayout",
        element: <KidszoneLayout/>,
        children: [
            {
                path: "diaper-potty",
                element: <p className="text-center text-2xl">Diaper & Potty</p>
            },
            {
                path: "feeding",
                element: <p className=" text-center text-2xl">Feeding</p>
            },
            {
                path: "kids-toys",
                element: <p className=" text-center text-2xl">Kids Toys </p>
            },
            {
                path: "lotions-creams",
                element: <p className=" text-center text-2xl">Lotions & Creams</p>
            },
            {
                path: "teethers-pacifier",
                element: <p className=" text-center text-2xl">Teethers & Pacifier</p>
            },
            {
                path: "grooming",
                element: <p className=" text-center text-2xl">Grooming</p>
            },
            {
                path: "oral-health",
                element: <p className=" text-center text-2xl">Oral & Health</p>
            },
            {
                path: "body-wash",
                element: <p className=" text-center text-2xl">Body Wash</p>
            },
            {
                path: "mum-pot-cups",
                element: <p className=" text-center text-2xl">Mum Pot & Cups</p>
            },
            {
                path: "bathing",
                element: <p className=" text-center text-2xl">Bathing</p>
            }
        ]
    }
]);


export default Router;