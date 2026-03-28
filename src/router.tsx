import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layout/AppShell";
import { AboutPage } from "./pages/AboutPage";
import { CollectionListingPage } from "./pages/CollectionListingPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HouseClearancePage } from "./pages/HouseClearancePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ShopPage } from "./pages/ShopPage";

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
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
