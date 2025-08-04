import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../features/home/page/HomePage";

export const AppRouter = () =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);
    return <RouterProvider router={router} />;
} 