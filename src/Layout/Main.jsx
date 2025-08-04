import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const hideLayout = ['/login'];
    const isFullScreen = hideLayout.includes(location.pathname)
    return (
        <div>
           {!isFullScreen &&  <NavBar></NavBar>}
            <Outlet></Outlet>
           {!isFullScreen &&  <Footer></Footer>}
        </div>
    );
};

export default Main;