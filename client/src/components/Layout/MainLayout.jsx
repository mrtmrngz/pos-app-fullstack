import React from 'react';
import Header from "./Header/Header.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="relative">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;