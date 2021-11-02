import React from "react";
import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav style={{backgroundColor:"red"}}>
            <NavLink exact to={"/"} activeClassName={"active"}>HOME</NavLink>
            <NavLink to={"/about"} activeClassName={"active"}>ABOUT</NavLink>
            <NavLink to={"/products"} activeClassName={"active"}>PRODUCTS</NavLink>
        </nav>
    )
}

export default Nav;