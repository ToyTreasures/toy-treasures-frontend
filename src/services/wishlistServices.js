import wishlistApiRequests from "./apiRequests/wishlistApiRequests";
import localStorageServices from "./localStorageServices";

const addItemToWishlist = async (item, wishlist, setWishlist) => {
  await wishlistApiRequests.addItemToWishlist(item._id);
  const newWishlistItems = wishlist.items;
  newWishlistItems.push(item);
  setWishlist({ ...wishlist, items: newWishlistItems });
  localStorageServices.addItemToWishlist(item);
};

const removeItemFromWishlist = async (itemId, wishlist, setWishlist) => {
  await wishlistApiRequests.removeItemFromWishlist(itemId);
  const newWishlistItems = wishlist.items.filter((i) => i._id !== itemId);
  setWishlist({ ...wishlist, items: newWishlistItems });
  localStorageServices.removeItemFromWishlist(itemId);
};

const clearWishlist = async () => {
  await wishlistApiRequests.clearWishlist();
  setWishlist(null);
  localStorageServices.clearWishlist();
};

export default {
  addItemToWishlist,
  removeItemFromWishlist,
  clearWishlist,
};
