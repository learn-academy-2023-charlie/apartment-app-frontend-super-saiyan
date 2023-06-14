import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
    <Navbar className="me" 
    color="secondary" 
    dark
    fixed="top"
    >
    <NavbarBrand href="/"> Home
       </NavbarBrand>
    </Navbar>
    )
}

export default Header;