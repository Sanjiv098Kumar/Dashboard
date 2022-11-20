import { auth } from "../firebase";
import React, { useState, useEffect } from "react";
export const Authcontext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(" ");
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      setUser(user);  
    });
    return () => {
      unSub();
    };
  }, []);

  const store = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <Authcontext.Provider value={store}>
      {children}
    </Authcontext.Provider>
  );
} 