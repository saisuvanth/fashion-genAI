import React, { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const ContextProvider = (props) => {
  const [user, setUser] = useState({ isLoggedIn: false, user: {} });
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [chatId, setChatId] = useState("")
  // const [token, setToken] = useState();
  const url = "http://13.233.157.55:8080"

  return (
    <UserContext.Provider
      value={{ user, setUser, signUp, setSignUp, signIn, setSignIn, url, chatId, setChatId }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
