// import jwtDecode from "jwt-decode";
// import { createContext, useContext, useEffect, useState } from "react";
// // import axios from "../API/axios";
// import useAxios from "../components/hooks/useAxios";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   // const [token, setToken] = useState(
//   //   localStorage.getItem("token")
//   //     ? JSON.parse(localStorage.getItem("token"))
//   //     : null
//   // );

//   const storedToken = localStorage.getItem("token");
//   let initialToken = null;

//   try {
//     initialToken = storedToken ? JSON.parse(storedToken) : null;
//   } catch (error) {
//     console.error("Error parsing token from localStorage:", error);
//   }

//   const [token, setToken] = useState(initialToken);

//   const [user, setUser] = useState(null);

//   const API = useAxios();

//   const logOut = async () => {
//     await API.get("/logout", { withCredentials: true });
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   const newToken = localStorage.getItem("token");

//   useEffect(() => {
//     if (token === null) return setUser(null);

//     //console.log("decoded")

//     const { user } = jwtDecode(token);
//     setUser(user);
//   }, [token]);

//   console.log(user);

//   useEffect(() => {
//     // setToken(JSON.parse(localStorage.getItem("token")));
//     setToken(localStorage.getItem("token"));
//   }, [newToken]);

//   //console.log(applyFormData)

//   const state = {
//     token,
//     setToken,
//     user,
//     setUser,
//     logOut,
//   };

//   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
// };

// export const State = () => {
//   return useContext(AuthContext);
// };

// export default AuthContext;

// import jwtDecode from "jwt-decode";
// import { createContext, useContext, useEffect, useState } from "react";
// import useAxios from "../components/hooks/useAxios";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user") || null)
//   );
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   const handleChange = (user, token) => {
//     setUser(user);
//     setToken(token);
//   };

//   const handleUser = (user) => {
//     setUser(user);
//   };

//   const API = useAxios();

//   const logOut = async () => {
//     await API.get("/logout", { withCredentials: true });
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   // useEffect(() => {
//   //   if (token === null) return setUser(null);

//   //   const { user } = jwtDecode(token);
//   //   setUser(user);
//   // }, [token]);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user), { expires: 365 });
//     localStorage.setItem("token", token, { expires: 365 });
//   }, [user, token]);

//   const state = {
//     // user: user,
//     // token: token,
//     token,
//     setToken,
//     user,
//     handleChange,
//     handleUser,
//     setUser,
//     logOut,
//   };

//   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
// };

// export const State = () => {
//   return useContext(AuthContext);
// };

// export default AuthContext;

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // const secretKey = import.meta.env.VITE_CRYPTO_KEY;



  const [user, setUser] = useState(() => Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null);
  // const [user, setUser] = useState(Cookies.get("user"));
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleChange = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const handleUser = (user) => {
    setUser(user);
  };

  const logout = () => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Cookies.remove("user");
        Cookies.remove("token");
      })
      .catch((error) => {
        console.error(error);
        Cookies.remove("user");
        Cookies.remove("token");
      });
  };

  const shouldKick = (e) => {
    if (e.response.data.message) {
      if (e.response.data.message == "Unauthenticated.") {
        Cookies.remove("user");
        Cookies.remove("token");
        window.location.href = "/";
      }
    }
  };

  useEffect(() => {
    // Storing user and token as JSON strings in cookies
    Cookies.set("user", JSON.stringify(user));
    Cookies.set("token", token);

    // Cookies.set("user", JSON.stringify(user), { expires: 365 });
    // Cookies.set("token", token, { expires: 365 });
  }, [user, token]);

  let contextData = {
    user: user,
    token: token,
    handleChange,
    handleUser,
    logout,
    shouldKick,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
