import {useState, memo, useEffect} from "react";
import "./Header.css"
import {NavLink, Link} from "react-router-dom";

const Header = () => {

return (
        <>
        <div className="header-content">
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}
                     to = {'/'}>Home</NavLink>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""} to = {'/cats'}>Cats</NavLink>

        </div>

    </>
)
}
export default memo(Header)