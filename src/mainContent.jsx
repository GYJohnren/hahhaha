import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ClientLayout from "./layouts/clientLayout";
import Account from "./pages/account";
import Cart from "./pages/cart";
import YourOrders from "./pages/yourOrders";

export default function MainContent() {
    return (<Routes>
        <Route path='/' element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="your+orders" element={<YourOrders />} />
            <Route path="account" element={<Account />} />
        </Route>
    </Routes>)
}