import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    const current_user = true;

    return (
        <Navbar className="me" 
            color="secondary" 
            dark
            fixed="top"
        >
            <NavbarBrand href="/"> Home
            </NavbarBrand>
                <Nav className="nav">
                    {current_user && (
                        <NavItem>
                            <input type="button" value='Logout' />
                        </NavItem>
                    )}
                    {!current_user && (
                        <>
                            <NavItem>
                                <NavLink to="/login" className="nav-link">
                                Log In
                                </NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink to="/signup" className="nav-link">
                                Sign Up
                                </NavLink>
                            </NavItem>
                        </>
                    )}
                </Nav>
        </Navbar>
    )
}

export default Header;