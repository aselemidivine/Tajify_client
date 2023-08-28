import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../API/axios";
import useAxios from "../components/hooks/useAxios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const [user, setUser] = useState(null);

  const API = useAxios();

  const logOut = async () => {
    await API.get("/logout", { withCredentials: true });
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const newToken = localStorage.getItem("token");

  useEffect(() => {
    if (token === null) return setUser(null);

    //console.log("decoded")

    const { user } = jwtDecode(token);
    setUser(user);
  }, [token]);

  console.log(user);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, [newToken]);

  useEffect(() => {}, [applyFormData]);

  //console.log(applyFormData)

  const state = {
    token,
    setToken,
    user,
    setUser,
    logOut,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const State = () => {
  return useContext(AuthContext);
};

export default AuthContext;
