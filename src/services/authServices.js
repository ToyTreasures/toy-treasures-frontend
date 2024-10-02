import authApiRequests from "./apiRequests/authApiRequests";
import localStorageServices from "./localStorageServices";

const login = () => {};

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
