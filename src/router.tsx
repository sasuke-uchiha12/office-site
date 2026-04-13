import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layout/AppShell";
import { AboutPage } from "./pages/AboutPage";
import { CollectionListingPage } from "./pages/CollectionListingPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HouseClearancePage } from "./pages/HouseClearancePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ShopPage } from "./pages/ShopPage";
import { Navigate } from "react-router-dom";
import { AdminGate } from "./pages/admin/AdminGate";
import { AdminCollectionsPage } from "./pages/admin/AdminCollectionsPage";
import { AdminProductsPage } from "./pages/admin/AdminProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "house-clearance", element: <HouseClearancePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/collections/:slug", element: <CollectionListingPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "admin",
        element: <AdminGate />,
        children: [
          { index: true, element: <Navigate to="products" replace /> },
          { path: "products", element: <AdminProductsPage /> },
          { path: "collections", element: <AdminCollectionsPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
