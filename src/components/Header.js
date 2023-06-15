import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const Header = ({currentUser, logout}) => {
    const current_user = true;
    const navigate = useNavigate()
    const handleClick = () => {
    logout()
    navigate("/")
  }
    return (
        <Navbar className="me" 
            color="secondary" 
            dark
            fixed="top"
        >
            <div className="Links">
            <NavbarBrand href="/"> Home🏠
            </NavbarBrand>
            <NavbarBrand href="/ApartmentIndex">Show Listings🔎
            </NavbarBrand>
            <NavbarBrand href="/ApartmentNew">New🆕</NavbarBrand>
           
                </div>
                <Nav className="nav">
                  {currentUser && (
                   <NavItem>
                     <input type="button" value="Log Out" onClick={handleClick}/>
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