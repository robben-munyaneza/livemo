import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { ListingDetailPage } from "../pages/ListingDetailPage";
import { LivestockMarketplacePage } from "../pages/LivestockMarketplacePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProductsMarketplacePage } from "../pages/ProductsMarketplacePage";
import { RegisterPage } from "../pages/RegisterPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace/livestock" element={<LivestockMarketplacePage />} />
        <Route path="/marketplace/products" element={<ProductsMarketplacePage />} />
        <Route path="/marketplace/listings/:id" element={<ListingDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
