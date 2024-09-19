// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// import ItemDetailsPage from "./pages/ItemDetailsPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/shop/:id" element={<ItemDetailsPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
