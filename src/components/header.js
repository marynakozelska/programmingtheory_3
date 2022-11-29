import React from "react";
import "./styles/header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="header">
                <Link className="nav_link" to='/'>
                    <i className="uil uil-estate nav_icon">Home</i>
                </Link>

                <div className="nav_menu">
                    <ul className="nav_list grid">

                        <li className="nav_item">
                            <Link className="nav_link" to='/news'>News</Link>
                        </li>

                        <li className="nav_item">
                            <Link className="nav_link" to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header