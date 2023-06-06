
import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  // MDBNavbar,
  // MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import LoggedUser from './contexts/LoggedUser';
import './NavBar.css'

export default function NavBar() {
  const [showNavCentred, setShowNavCentred] = useState(false);
  const {loggedUser} = useContext(LoggedUser);

  return (
    <div id='navbar'>
       <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
          <MDBNavbarBrand href='/' id='app-name'>
            <img
              src='https://bit.ly/3nnsND0'
              height='60'
              alt=''
              loading='lazy'
            />
            ALMAID
          </MDBNavbarBrand>
          <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        {/* <div id='nav-titles'> */}
        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem className='nav-items'>
              <MDBNavbarLink active aria-current='page' href='about' style={{color: '#00008B'}}>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='nav-items'>
              <MDBNavbarLink active aria-current='page' href='staff'style={{color: '#00008B', justifyContent: 'space-around'}}>Our Staff</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='nav-items'>
              <MDBNavbarLink active aria-current='page' href='addcleaner'style={{color: '#00008B', justifyContent: 'space-around'}}>Join Us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='nav-items'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'style={{color: '#00008B', justifyContent: 'space-around'}}>
                Login
                  {/* <MDBIcon icon="user" id='login-icon' className='nav'/>  */}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {loggedUser ? (
                    <MDBDropdownItem><a href="/profile" className='login-texts'>{loggedUser.username}</a></MDBDropdownItem>
                  ):(
                    <div>
                      <MDBDropdownItem id='drop-down'><a href="/login" className='login-text'  style={{color: '#00008B'}}>Login</a></MDBDropdownItem>
                      <MDBDropdownItem id='drop-down'><a href="/signup" className='login-text' style={{color: '#00008B'}}>Sign Up</a></MDBDropdownItem>
                      <MDBDropdownItem id='drop-down'><a href="/logout" className='login-text' style={{color: '#00008B'}}>Logout</a></MDBDropdownItem>
                    </div>
                  )}   
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
        {/* </div> */}
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}