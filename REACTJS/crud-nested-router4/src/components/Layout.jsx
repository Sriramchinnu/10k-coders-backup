import React from 'react';
import {Outlet} from 'react-router-dom'
const Layout = () => {
    return (
        <div>
           <h1>Welcome to CRUD Application</h1> 
           <Outlet/>
        </div>
    );
}

export default Layout;