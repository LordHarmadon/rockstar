import { createBrowserRouter } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import MainLayout from "./pages/MainLayout";
import CartPage from "./pages/CartPage";


export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: ProductsPage,
            },
            {
                path: 'cart',
                Component: CartPage
            }
        ]
    }
]);