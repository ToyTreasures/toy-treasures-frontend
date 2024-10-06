import { createContext, useContext, useState, useEffect } from "react";
import wishlistServices from "../services/wishlistServices";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState({ items: [] });
  const [userContextLoading, setUserContextLoading] = useState(true);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    setUserContextLoading(false);
  }, []);

  const addToWishlist = async (item) => {
    await wishlistServices.addItemToWishlist(item, wishlist, setWishlist);
  };

  const removeFromWishlist = async (itemId) => {
    await wishlistServices.removeItemFromWishlist(
      itemId,
      wishlist,
      setWishlist
    );
  };

  const emptyWishlist = async () => {
    await wishlistServices.emptyWishlist(wishlist, setWishlist);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist,
        emptyWishlist,
        userContextLoading,
        setUserContextLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
