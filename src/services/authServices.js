import authApiRequests from "./apiRequests/authApiRequests";
import wishlistApiRequests from "./apiRequests/wishlistApiRequests";
import localStorageServices from "./localStorageServices";

const login = async (userData, setUser, setWishlist) => {
  const userResponse = await authApiRequests.login(userData);
  localStorageServices.setTokensAndUser(
    userResponse.user,
    userResponse.accessToken
  );

  const wishlistResponse = await wishlistApiRequests.getWishlist();
  localStorageServices.setWishlist(wishlistResponse.wishlist);

  setUser(userResponse.user);
  setWishlist(wishlistResponse.wishlist);
};

const logout = async (setUser, setWishlist) => {
  await authApiRequests.logout();
  setUser(null);
  localStorageServices.clearTokensAndUser();
  localStorageServices.clearWishlist();

  setWishlist(null);
};

export default {
  login,
  logout,
};
