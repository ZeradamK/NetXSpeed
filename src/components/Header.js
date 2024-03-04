import {Nav,Navbar, Container, NavbarBrand,Button, Col, Row, NavItem, NavLink, NavbarToggler, Collapse} from "reactstrap";
import {useState} from "react";
import React from "react";
import logo from '../assets/logo.webp';
import style from '../styles/header.css'
const Header = ()=>{
    const [menuOpen, setMenuOpen]= useState(false);



    return (
        <Navbar className='navbar navbar-dark' sticky="top" expand="md" id='main-nav'>

                <NavbarBrand href="/" id='navbar-logo'>
                    <h1 id="Netspeedlogotext">NetXSpeed</h1>
                </NavbarBrand>



        </Navbar>
    )
}

export default Header;