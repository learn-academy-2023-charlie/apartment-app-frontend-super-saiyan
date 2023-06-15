import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Header = ({currentUser, logout}) => {
    const current_user = true;

    return (
        <Navbar className="me" 
            color="secondary" 
            dark
            fixed="top"
        >
            <div className="Links">
            <NavbarBrand href="/"> Home
            </NavbarBrand>
            <NavbarBrand href="/ApartmentIndex">index
            </NavbarBrand>
                </div>
                <Nav className="nav">
                  {currentUser && (
                   <NavItem>
                     <input type="button" value="Log Out" />
                     </NavItem>
                  )}
                   {!currentUser && (
                 <>
                 <NavItem>
                  <NavLink href="/login" className="nav-link">
                    Log In
                  </NavLink>
                 </NavItem>
                 <NavItem>
                <NavLink href="/signup" className="nav-link">
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