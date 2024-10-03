import { useEffect } from "react";
import AppRoutes from "./Routes";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const { setUser, setWishlist, setUserContextLoading } = useUserContext();

  useEffect(() => {
    const checkLoggedInUser = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (user && wishlist) {
        setUser(user);
        setWishlist(wishlist);
      }
    };
    checkLoggedInUser();
    setUserContextLoading(false);
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
