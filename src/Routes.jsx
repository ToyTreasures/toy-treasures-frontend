import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import MyAccount from "./pages/MyAccount";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SellItem from "./pages/SellItem";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./Layouts/MyAccount/UserDashboard";
import EditAccount from "./Layouts/MyAccount/EditAccount";
import MyItems from "./Layouts/MyAccount/MyItems";
import SwapRequests from "./Layouts/MyAccount/SwapRequests";
import WishlistSection from "./Layouts/MyAccount/WishlistSection";
import Wishlist from "./pages/Wishlist";
import MyItemsPage from "./pages/MyItemsPage";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="flex flex-col min-h-screen justify-between">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/my-account/*"
            element={
              <ProtectedRoute
                element={<MyAccount />}
                isRequiredToLogIn={true}
              />
            }
          >
            {/* <Route path="" element={<UserDashboard />} /> */}
            <Route path="" element={<EditAccount />} />
            <Route path="my-items" element={<MyItems />} />
            <Route path="swap-requests" element={<SwapRequests />} />
            <Route path="edit-account" element={<EditAccount />} />
            <Route path="wishlist" element={<WishlistSection />} />
          </Route>

          <Route path="/shop" element={<Shop />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                element={<Register />}
                isRequiredToLogIn={false}
              />
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute element={<Login />} isRequiredToLogIn={false} />
            }
          />
          <Route
            path="/sell-item"
            element={
              <ProtectedRoute element={<SellItem />} isRequiredToLogIn={true} />
            }
          />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute element={<Wishlist />} isRequiredToLogIn={true} />
            }
          />
          <Route
            path="/my-items"
            element={
              <ProtectedRoute
                element={<MyItemsPage />}
                isRequiredToLogIn={true}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
