import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userContextLoading, setUserContextLoading] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser, userContextLoading, setUserContextLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
