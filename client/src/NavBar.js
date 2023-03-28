import './Home.css'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
//   MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='nav-main'>
        <img
              src='https://bit.ly/3nnsND0'
              height='120'
              alt=''
              loading='lazy'
            />
            <strong>ALMAID</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className='nav'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='about' className='nav'>About Us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' >
                  Our Staff
                </MDBDropdownToggle>
                <MDBDropdownMenu className='nav'>
                {/* style={{color: "#00008B !important"}} */}
                  <MDBDropdownItem link  className='login-text'>Bookings</MDBDropdownItem>
                  <MDBDropdownItem link  className='login-text'>Reviews</MDBDropdownItem>
                  {/* <MDBDropdownItem link>Something else here</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
            {/* <MDBNavItem> */}
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" id='login-icon' className='nav'/> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem><a href="/login" className='login-text'>Login</a></MDBDropdownItem>
                <MDBDropdownItem><a href="/signup" className='login-text'>Sign Up</a></MDBDropdownItem>
                  {/* <MDBDropdownItem href="#!"className='login-text'>Admin Login</MDBDropdownItem> */}
                  {/* <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            {/* </MDBNavItem> */}
            </MDBNavbarItem>
          </MDBNavbarNav>
{/* 
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}