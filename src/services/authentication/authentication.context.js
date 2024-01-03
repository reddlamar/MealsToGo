import React, { useState, useEffect, createContext } from "react";
import {
  loginRequest,
  logoutRequest,
  register,
  authStateChange,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onAuthStateChange = () => {
    setIsLoading(true);
    authStateChange((usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((loggedInUser) => {
        setUser(loggedInUser.user);
      })
      .catch((caughtError) => {
        setError(caughtError.toString());
      })
      .finally(setIsLoading(false));
  };

  const onLogout = () => {
    setUser(null);
    logoutRequest();
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password === repeatedPassword) {
      register(email, password)
        .then((registeredUser) => {
          setUser(registeredUser.user);
        })
        .catch((caughtError) => {
          setError(caughtError.toString());
        })
        .finally(setIsLoading(false));
    } else {
      setError("Error: Passwords do not match.");
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onLogout,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
