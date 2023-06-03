import './About.css'
import Cards from './Cards';
// export default function About(){
//     return(
//         <div id='abt'>
//             {/* main card */}
//             <div className='details'>
//                 <h1>About Us</h1>
//                 <p>
// At our cleaning company,
// we understand the challenges and risks involved in
// finding a reliable and trustworthy house help. 
// That's why we take the burden off your shoulders
// by thoroughly screening and background checking all of 
// our cleaning professionals before they join our team. 
// You can rest assured that your home is in safe hands
// with our experienced and dependable cleaners. 
// Say goodbye to the stress of finding a cleaner
// and hello to a spotless home with our cleaning company.
//                 </p>
//             </div>  
//             <Cards />                             
//         </div>
//     );
// }
import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function About() {
    return (
        <div id='abt'>
            <MDBCard alignment='center' id='ab-ca' >
                {/* <MDBCardHeader>Featured</MDBCardHeader> */}
                <MDBCardBody>
                    <MDBCardTitle className='details'>About Us</MDBCardTitle>
                    <MDBCardText className='p' id='parag'>
                        At our cleaning company,
                        we understand the challenges and risks involved in
                        finding a reliable and trustworthy house help.
                        That's why we take the burden off your shoulders
                        by thoroughly screening and background checking all of
                        our cleaning professionals before they join our team.
                        You can rest assured that your home is in safe hands
                        with our experienced and dependable cleaners.
                        Say goodbye to the stress of finding a cleaner
                        and hello to a spotless home with our cleaning company.
                    </MDBCardText>
                    {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                </MDBCardBody>
                {/* <MDBCardFooter>2 days ago</MDBCardFooter> */}
            </MDBCard>
            <Cards />
        </div>
    );
}
