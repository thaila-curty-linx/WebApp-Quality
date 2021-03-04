/* eslint-disable no-throw-literal */
import React, { createContext, useCallback, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@quality:token");
    const user = localStorage.getItem("@quality:user");
    if (token && user) {
      setLoggedIn(true);
      return { token, user: JSON.parse(user) };
    }
    return {};
  });

  const signIn = useCallback(({ email, password }) => {
    if (email === "adm@hotmail.com") {
      if (password === "1234") {
        const user = { name: "Thaila Ferreira", email: "adm@hotmail.com" };
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb25uZWN0TWUiLCJuYW1lIjoiVGhhaWxhIiwiaWF0IjoxNTE2MjM5MDIyfQ.bEI2y9qFBfbsFPUZ8cU4aR45U5e_i9n4-GKWpgec50M";
        localStorage.setItem("@quality:user", JSON.stringify(user));
        localStorage.setItem("@quality:token", token);

        setData({ token, user });
        setLoggedIn(true);
      } else {
        throw { name: "password", message: "Senha inválida" };
      }
    } else {
      throw { name: "email", message: "Email Inválido" };
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@quality:token");
    localStorage.removeItem("@quality:user");

    setData("");
    setLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logged: loggedIn,
        token: data.token,
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Aprovider");
  }
  return context;
}
