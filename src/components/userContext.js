import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = (children) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("latestData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
