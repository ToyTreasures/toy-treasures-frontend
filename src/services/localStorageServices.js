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

const emptyWishlist = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify({ ...wishlist, items: [] }));
};

const clearWishlist = () => {
  localStorage.removeItem("wishlist");
};

const addItemToWishlist = (item) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  wishlist.items.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const removeItemFromWishlist = (itemId) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  wishlist.items = wishlist.items.filter((i) => i._id !== itemId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
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
  emptyWishlist,
  clearWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
};
