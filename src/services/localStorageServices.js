const login = (user, accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
