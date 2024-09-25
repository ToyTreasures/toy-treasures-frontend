import { useEffect } from "react";
import AppRoutes from "./Routes";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const { setUser, setUserContextLoading } = useUserContext();

  useEffect(() => {
    const checkLoggedInUser = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);
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
