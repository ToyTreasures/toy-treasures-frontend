import authApiRequests from "./apiRequests/authApiRequests";
import wishlistApiRequests from "./apiRequests/wishlistApiRequests";
import localStorageServices from "./localStorageServices";

const login = async (userData, setUser) => {
  const res = await authApiRequests.login(userData);
  localStorageServices.setTokensAndUser(res.user, res.accessToken);

  const res1 = await wishlistApiRequests.getWishlist();
  localStorageServices.setWishlist(res1.wishlist);

  setUser(res.user);
};

const logout = async (setUser) => {
  await authApiRequests.logout();
  setUser(null);
  localStorageServices.clearTokensAndUser();
  localStorageServices.clearWishlist();
};

export default {
  login,
  logout,
};
