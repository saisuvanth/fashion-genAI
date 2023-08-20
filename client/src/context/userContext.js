import React, {createContext, useCallback, useEffect, useState} from "react";

const UserContext = createContext();
export default UserContext;

export const ContextProvider = (props) => {
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        token: "",
        userId: "",
    });
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [chatId, setChatId] = useState("")
    // const [token, setToken] = useState();
    const url = "http://13.233.157.55:8080"

    const logoutHandler = () => {
        // set context state false
        setIsLoggedIn(false);
        setUser({
            token: "",
            userId: "",
        })

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expiryDate');
    }

    const setAutoLogout =(milliseconds) => {
        setTimeout(() => {
            logoutHandler();
        }, milliseconds);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');

        if (!token || !expiryDate) {
            setIsAuthLoading(false);
            return;
        }

        if (new Date(expiryDate) <= new Date()) {
            setIsAuthLoading(false);
            return;
        }

        const userId = localStorage.getItem('userId');
        const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();

        setIsLoggedIn(true);
        setUser({
            token: token,
            userId: userId,
        });
        setIsAuthLoading(false);

        setAutoLogout(remainingMilliseconds);
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                signUp,
                setSignUp,
                signIn,
                setSignIn,
                url,
                chatId,
                setChatId,
                isLoggedIn,
                setIsLoggedIn,
                logoutHandler,
                setAutoLogout,
                isAuthLoading,
                setIsAuthLoading
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
