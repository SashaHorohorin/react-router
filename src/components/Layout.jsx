import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";


const Layout = () => {
    return (
        <>
            <header>
                {/* NavLink такойже Link только, если у тебя есть class active, он автоматически будет его присваивать*/}
                {/* Также, если у нас есть длугой class для активной ссылки, можно сделать проверку на активность в самом className */}
                {/* <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/">
                    Номе
                </NavLink> */}
                <CustomLink className="link" to="/">
                    Номе
                </CustomLink>
                <CustomLink className="link" to="/blog">
                    Blog
                </CustomLink>
                <CustomLink className="link" to="/about">
                    About
                </CustomLink>
            </header>
            {/* Указывает на место куда будут вставляться дочерние элементы */}
            <Outlet/>

            <footer>2023</footer>
        </>
    );
};

export default Layout;
