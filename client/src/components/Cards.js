import React from 'react';
import './About.css'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
// import plant from './images/plant.svg';
import clean from './images/clean.jpg'
// import clean2 from './images/clean2.jpg'
import image1 from './images/image1.svg';
import cleanrush from './images/cleanrush.jpg';

export default function Cards() {
  return (
    <div id='about' style={{overflowX: 'hidden'}}>
    <MDBCard id='about-card' className='p'>
      <MDBRow className='g-0' style={{marginBottom: '4em'}}>
      <MDBCol md='4'>
          <MDBCardImage src={image1} alt='...' fluid id='imd' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
          <MDBCardTitle id='clean-title'>Residential Cleaning</MDBCardTitle>
            <MDBCardText id='parag'>
            When you work with Almaid Cleaning you can
                     cross a major choir off your list,
                      cleaning your home.One Time / Recurring
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>One Time / Recurring</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard id='about-card' className='p'>
      <MDBRow className='g-0' style={{marginBottom: '4em'}}>
      <MDBCol md='4'>
          <MDBCardImage src={clean} alt='...' fluid id='imd' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle id='clean-title'>Commercial Cleaning</MDBCardTitle>
            <MDBCardText id='parag'>
            In Almaid we use a wide variety of cleaning methods, chemicals, 
                    and equipment to facilitate and expedite the cleaning process. 
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>One Time / Recurring</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      
    </MDBCard>

    <MDBCard id='about-card' className='p'>
      <MDBRow className='g-0' style={{marginBottom: '4em'}}>
      <MDBCol md='4'>
          <MDBCardImage src={cleanrush} alt='...' fluid id='imd' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
          <MDBCardTitle id='clean-title'>Janitorial Cleaning Services</MDBCardTitle>
          <MDBCardText id='parag'>
            Looking for a reliable and professional janitorial cleaning service provider?
                        Look no further than Almaid Cleaning Services!
                        Our team of experienced cleaners are dedicated
                        to providing the highest level of cleaning services 
                        to meet your specific needs. 
                        Whether you're looking for daily, weekly, 
                        or monthly cleaning services, we've got you covered.
                        At Almaid Cleaning Services,
                        we use only the best cleaning products and equipment
                        to ensure that your office or 
                        commercial space is thoroughly cleaned and disinfected. 
                        We understand the importance of a clean and hygienic work environment,
                        and we take pride in delivering exceptional 
                        results that exceed your expectations.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      
    </MDBCard>
    </div>
  );
}