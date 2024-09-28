import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import MyAccount from "./pages/MyAccount";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SellItem from "./pages/SellItem";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import SellerContacts from "./pages/SellerContacts";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./Layouts/MyAccount/UserDashboard";
import EditAccount from "./Layouts/MyAccount/EditAccount";
import MyItems from "./Layouts/MyAccount/MyItems";
import SwapRequests from "./Layouts/MyAccount/SwapRequests";
import WishlistSection from "./Layouts/MyAccount/WishlistSection";
import Wishlist from "./pages/Wishlist";
import MyItemsPage from "./pages/MyItemsPage";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-between">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/my-account/*"
            element={
              <>
                <Navbar />
                <ProtectedRoute
                  element={<MyAccount />}
                  isRequiredToLogIn={true}
                />
                <Footer />
              </>
            }
          >
            <Route path="" element={<UserDashboard />} />
            <Route path="user-items" element={<MyItems />} />
            <Route path="swap-requests" element={<SwapRequests />} />
            <Route path="edit-account" element={<EditAccount />} />
            <Route path="wishlist" element={<WishlistSection />} />
          </Route>
          <Route
            path="/shop"
            element={
              <>
                <Navbar />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/items/:id"
            element={
              <>
                <Navbar />
                <ItemDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <ProtectedRoute element={<Login />} isRequiredToLogIn={false} />
                <Footer />
              </>
            }
          />
          <Route
            path="/sell-item"
            element={
              <>
                <Navbar />
                <ProtectedRoute
                  element={<SellItem />}
                  isRequiredToLogIn={true}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/sellers/:id"
            element={
              <>
                <Navbar />
                <ProtectedRoute
                  element={<SellerContacts />}
                  isRequiredToLogIn={true}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <Navbar />
                <Wishlist />
                <Footer />
              </>
            }
          />{" "}
          <Route
            path="/my-items-page"
            element={
              <>
                <Navbar />
                <MyItemsPage />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
