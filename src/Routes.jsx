import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// import ItemDetailsPage from "./pages/ItemDetailsPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/shop/:id" element={<ItemDetailsPage />} /> */}
        <Route path="/profile" element={<Profile />} />
        {/*  <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
