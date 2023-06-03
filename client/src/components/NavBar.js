
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

export default function NavBar() {
  const [showNavCentred, setShowNavCentred] = useState(false);
  const {loggedUser} = useContext(LoggedUser);

  return (
    <div id='navbar'>
       <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
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

        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='about'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='staff'>Our Staff</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='addcleaner'>Join Us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                Login
                  {/* <MDBIcon icon="user" id='login-icon' className='nav'/>  */}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {loggedUser ? (
                    <MDBDropdownItem><a href="/profile" className='login-texts'>{loggedUser.username}</a></MDBDropdownItem>
                  ):(
                    <>
                      <MDBDropdownItem><a href="/login" className='login-text'>Login</a></MDBDropdownItem>
                      <MDBDropdownItem><a href="/signup" className='login-text'>Sign Up</a></MDBDropdownItem>
                      <MDBDropdownItem><a href="/logout" className='login-text'>Logout</a></MDBDropdownItem>
                    </>
                  )}   
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}