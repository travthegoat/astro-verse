import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/auth/LoginPage";
import { ShoppingBagRounded } from "@mui/icons-material";
import ShopPage from "./pages/ShopPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/items',
        element: <ItemPage />
    },
    {
        path: '/auth/login',
        element: <LoginPage />
    },
    {
        path: '/auth/register',
        element: <RegisterPage />
    },
    {
        path: '/shop',
        element: <ShopPage />
    },
    {
        path: '/contact-us',
        element: <ContactPage />
,   },
    {
        path: '/admin',
        element: <AdminLoginPage />
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
