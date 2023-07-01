import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import LoginLayout from "../components/layout/LoginLayout";
import BookCategory from "../components/Book/BookCategory";
import BookLayout from "../components/layout/BookLayout";
import ElectronicsLayout from "../components/layout/ElectronicsLayout";
import ElectronicsCategory from "../components/Electronics/ElectronicsCategory";


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
                element: <p className=" text-center text-2xl">monihari</p>
            },
            {
                path: "/kids-zone",
                element: <p className=" text-center text-2xl">kids-zone</p>
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
                element: <p className=" text-center text-2xl">offers</p>
            },
            {
                path: "/quiz",
                element: <p className=" text-center text-2xl">quiz</p>
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
    }
]);


export default Router;