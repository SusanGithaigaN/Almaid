// import './Home.css'
import React, {useState, useEffect} from 'react';
import {
  MDBCard,
//   MDBCardOverlay,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Staff(){
    const [staffData , setStaffData]= useState([]);

    useEffect(() =>{
        fetch('/cleaners')
        .then(response => response.json())
        .then(data => setStaffData(data));
    }, []);

    return(
        <div className='staff'>
            {/* <h1>Staff records go here</h1>         */}
            <h1>Our Staff</h1>
            {/* convert staff data into an array before mapping it's contents */}
            {Array.isArray(staffData) && staffData.map((staffMember) => (  
                <MDBCard key={staffMember.id} style={{display: 'inline-block', marginLeft: '13em', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}} id='staff_details'> 
                    <MDBCardImage position='top' alt={staffMember.name} src={staffMember.image_url} style={{width:  '50%', height: '50%', justifyContent: 'center' }}/>
                        <MDBCardBody>
                            <MDBCardTitle>Names: {staffMember.name}</MDBCardTitle>
                            <MDBCardText>
                            {/* {staffMember.bio} */}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBListGroup flush>
                            <MDBListGroupItem>Age: {staffMember.age}</MDBListGroupItem>
                            <MDBListGroupItem>Phone Number:{staffMember.phonenumber}</MDBListGroupItem>
                            <MDBListGroupItem>ID Number: {staffMember.id_no}</MDBListGroupItem>
                            <MDBListGroupItem>Work experience: {staffMember.experience} year(s)</MDBListGroupItem>
                        </MDBListGroup>
                        <MDBCardBody>
                            <MDBCardLink href='#'>View Reviews</MDBCardLink>
                            <MDBCardLink href='/booking'>Book Cleaner</MDBCardLink>
                        </MDBCardBody>
                </MDBCard>  
            ))}          
        </div>
    )
}




  

 