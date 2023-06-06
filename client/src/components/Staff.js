// import './Home.css'
import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  //   MDBCardOverlay,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModal,
  //   MDBModal,
  //   MDBModalDialog,
  //   MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBRow,
  MDBCol
  //   MDBModalBody,
  //   MDBModalFooter
} from 'mdb-react-ui-kit';
import './Staff.css';

export default function Staff() {
  const [staffData, setStaffData] = useState([]);
  // modal
  const [reviewModal, setReviewModal] = useState(false);
  // review
  // set current user id
  const [id, setId] = useState(null);
  // add  a state variable to hold the cleaner's id
  // const [cleanerId, setCleanerId] = useState(null);
  const [cleanerId, setCleanerId] = useState(staffData.length > 0 ? staffData[0].id : null);


  const [reviewInfo, setReviewInfo] = useState({
    rating: 0,
    review: "",
    // cleaner_id: 0
  });

  useEffect(() => {
    fetch('/cleaners/summary')
      .then(response => response.json())
      .then(data => setStaffData(data));
  }, []);

  // render stars
  function renderStars(rating) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fa fa-star"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o"></i>);
      }
    }

    return stars;
  }

  // add review
  // inputchange: handleChange
  function handleChange(e) {
    const { name, value } = e.target;
    setReviewInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  //   form submission:handleSubmit()
  function handleSubmit(e) {
    // prevent form autosubmit
    // rails backend url:localhost:3000/cleaners/:id/reviews
    e.preventDefault();

    if (cleanerId === null) {
      console.error("Cannot submit review: id is null");
      return;
    }

    if (cleanerId === undefined) {
      console.error("Cannot submit review: id is undefined");
      return;
    }

    // get the id of the staff member being viewed

    const staffMemberId = cleanerId;
    fetch(`/cleaners/${staffMemberId}/reviews`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...reviewInfo,
        cleaner_id: staffMemberId // set the staffMember.id before assigning it
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStaffData((prevData) => {
          return prevData.map((staffMember) => {
            if (staffMember.id === data.cleaner_id) {
              return {
                ...staffMember,
                reviews: [...staffMember.reviews, data],
              };
            } else {
              return staffMember;
            }
          });
        });
        setReviewModal(false);
        setReviewInfo({
          rating: 0,
          review: "",
        });
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className='staff'>
      {/* <h1>Staff records go here</h1>         */}
      <h1>Our Staff</h1>
      {/* convert staff data into an array before mapping it's contents */}
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' id='all-staff'>
        {Array.isArray(staffData) && staffData.map((staffMember) => (
          <MDBCol sm="6" id='my-col'>
            <MDBCard className='h-100' key={staffMember.id} onClick={() => { setId(staffMember.id); setCleanerId(staffMember.id); console.log('staffMember.id:', staffMember.id); }}  id='staff-card'>
              <MDBCardImage id='staff-img' src={staffMember.image_url} position='top' alt={staffMember.name} />
              <MDBCardBody>
                <MDBCardTitle>Names: {staffMember.name}</MDBCardTitle>
                <MDBCardText>
                  {/* {staffMember.bio} */}
                </MDBCardText>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem id='no-shadow'>Age: {staffMember.age}</MDBListGroupItem>
                <MDBListGroupItem id='no-shadow'>Phone Number:{staffMember.phonenumber}</MDBListGroupItem>
                <MDBListGroupItem id='no-shadow'>ID Number: {staffMember.id_no}</MDBListGroupItem>
                <MDBListGroupItem id='no-shadow'>Work experience: {staffMember.experience} year(s)</MDBListGroupItem>
                <MDBListGroupItem id='no-shadow'>
                  Reviews:
                  {Array.isArray(staffMember.reviews) && staffMember.reviews.map((review) => (
                    <div key={review.id} className='star-rating'>
                      Rating: <span style={{ color: 'gold' }}>{renderStars(review.rating)}</span> <br /> Comment: {review.review}
                    </div>
                  ))}
                </MDBListGroupItem>
                {/* <MDBListGroupItem>Reviews: {staffMember.reviews.rating}</MDBListGroupItem>
                            <MDBListGroupItem>Reviews: {staffMember.reviews.review}</MDBListGroupItem> */}
              </MDBListGroup>
              <MDBCardBody>
                {/* <MDBCardLink href='/addreview'>Add Review</MDBCardLink> */}
                <div id='staff-bt'>
                  <MDBBtn id='bt-1' disabled={staffMember === null} onClick={() => setReviewModal(true)} style={{ backgroundColor: 'transparent', marginRight: '2em' }}>Add Review</MDBBtn>
                  <MDBBtn id='bt-2' href='/booking' style={{ width: 'fitContent', height: 'auto' }}>Book Cleaner</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      {/* Modal body text goes here */}
      <MDBModal
        tabIndex='-1'
        show={reviewModal}
        getOpenState={(e) => setReviewModal(e)}
        centered
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Review</MDBModalTitle>
              <MDBBtn id='staff-btn'
                className='btn-close'
                color='none'
                onClick={() => setReviewModal(false)}
              ></MDBBtn>
            </MDBModalHeader>


            <MDBModalBody>
              <form onSubmit={handleSubmit} data-id={id}>
                <div className='form-group'>
                  <label htmlFor='review-rating'>Rating:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    name="rating"
                    value={reviewInfo.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='review-comment'>Comment:</label>
                  <textarea
                    className="form-control"
                    id="review"
                    name="review"
                    value={reviewInfo.review}
                    onChange={handleChange}
                    rows="3"
                    required
                  ></textarea>
                  {/* <label htmlFor='review-comment'>Cleaner:</label>
                    <select
                        className="form-control"
                        id="review"
                        name="review"
                        value={reviewInfo.cleaner_id}
                        onChange={handleChange}
                        required>
                        <option value="">Select an option</option>
                        <option value="1">Cleaner 1</option>
                        <option value="2">Cleaner 2</option>
                        <option value="3">Cleaner 3</option>
                    </select> */}
                </div>
                <div className='modal-footer'>
                  <MDBBtn id='staff-btn'>
                    Close
                  </MDBBtn>
                  <MDBBtn id='staff-btn' type='submit'>
                    Submit Review
                  </MDBBtn>
                </div>
              </form>
            </MDBModalBody>


          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  )
}
