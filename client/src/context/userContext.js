import React, { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const ContextProvider = (props) => {
  const [user, setUser] = useState({ isLoggedIn: false, name: "check" });
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, signUp, setSignUp, signIn, setSignIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
