import React from 'react';
import Users from './Users';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <h1>is from layoutt....!!!!!!</h1>
            <Outlet/>
            <Users/>
        </div>
    );
}

export default Layout;
