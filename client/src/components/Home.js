import './Home.css'
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import plant from './images/plant.svg';
import React from 'react';
import {
  MDBCard,
  // MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <div className='home'>
      <MDBCard id='cardsz' style={{maxWidth: '1500px'}}>
        <MDBRow className='g-0'>
          {/* <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol> */}
          <MDBCol md='4' id='text'>
            <MDBCardBody>
              {/* <MDBCardTitle>Card title</MDBCardTitle> */}
              <MDBCardText>
                <p className='para'>Sparkle<br />with<br />your<br />ideal<br />clean <i class="fa fa-snowflake-o" aria-hidden="true" style={{ color: '#00008B' }}></i></p>
              </MDBCardText>
              {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
            <MDBBtn id='home-btn' href='about'>View More</MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='8' id='women' style={{ display: 'flex' }}>
            <MDBCardImage src={image2} alt='...' fluid id='woman1' />
            <MDBCardImage src={image1} alt='...' fluid id='woman' />
            {/* <MDBCardImage src={plant} alt='...' fluid  id='plant'/> */}
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}