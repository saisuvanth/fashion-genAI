import React, {useContext} from "react";
import { Outlet, Navigate } from "react-router";

import NavBar from "../Navigation/NavBar";
import UserContext from "../../context/userContext";
import Sidebar from "../Navigation/Sidebar";

const HomeLayout = () => {
    const context = useContext(UserContext);

    if(context.isAuthLoading) {
        return <></>;
    }

    return (context.isLoggedIn) ? (
        <>
            <Outlet/>
        </>
    ) : (
        <Navigate to="/login"/>
    );
};

export default HomeLayout;
