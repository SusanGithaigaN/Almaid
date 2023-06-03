// import { MDBBtn } from 'mdb-react-ui-kit';
import './Home.css'

import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import Water from './images/Water.svg';

// export default function Home() {
//   return (
//     <div>
//         <div className='home'>
//             <div className='flex-container'>
//               <p className='para'>Sparkle<br />with<br />your<br />ideal<br />clean</p>
//                 <div className='image-container'>
//                 <img src={image1} alt='Woman 1' className='image2'/>
//                 <img src={image2} alt='Woman 2' className='image1' />
//                 {/* <img src={Water} alt='Water' className='water' /> */}
//               </div>
//             </div>
//             <MDBBtn className='btn' href='signup'>View more</MDBBtn>
//         </div>
//     </div>
//   );
// }
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
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
    <MDBCard id='cardsz'>
      <MDBRow className='g-0'>
        {/* <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol> */}
        <MDBCol md='4' id='text'>
          <MDBCardBody>
            {/* <MDBCardTitle>Card title</MDBCardTitle> */}
            <MDBCardText>
            <p className='para'>Sparkle<br />with<br />your<br />ideal<br />clean <i class="fa fa-snowflake-o" aria-hidden="true" style={{color: '#00008B'}}></i></p>
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='8' style={{display: 'flex', justifyContent:'left'}}>
        <MDBCardImage src={image2} alt='...' fluid  id='woman1'/>
          <MDBCardImage src={image1} alt='...' fluid id='woman' />
          {/* <MDBCardImage src={Water} alt='...' fluid  id='plant'/> */}
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
  );
}