import { useEffect } from "react";
import AppRoutes from "./Routes";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const { setUser } = useUserContext();

  useEffect(() => {
    const checkLoggedInUser = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);
      }
    };
    checkLoggedInUser();
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
