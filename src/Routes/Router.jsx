import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import LoginLayout from "../components/layout/LoginLayout";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/book",
                element: <p className=" text-center text-2xl">book</p>
            },
            {
                path: "/electronics",
                element: <p className=" text-center text-2xl">electronics</p>
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
    }
]);


export default Router;