const setTokensAndUser = (user, accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("user", JSON.stringify(user));
};

const clearTokensAndUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

const getUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : null;
};

const setWishlist = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const clearWishlist = () => {
  localStorage.removeItem("wishlist");
};

export default {
  setTokensAndUser,
  clearTokensAndUser,
  getAccessToken,
  setAccessToken,
  getUser,
  setUser,
  getWishlist,
  setWishlist,
  clearWishlist,
};
