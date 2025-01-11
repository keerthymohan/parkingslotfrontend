import React from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <>

      <div className='p-5 bg-danger mt-5'>
        <div className='row'>
          <div className="col-md-4">
            <h4 className='text-light'>Par-King</h4>
            <p style={{ textAlign: 'justify' }} className='mt-3 text-dark'>Par-King allows individuals to secure a parking spot in advance at a chosen location and time. This convenient service eliminates the stress of searching for parking upon arrival, ensuring a hassle-free experience..</p>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4 className='text-light'>Link</h4>
              <Link to={'/register'} style={{ textDecoration: 'none' }}> <p className='mt-3 text-dark'>Registration page</p></Link>
              <Link to={'/parkingplace'} style={{ textDecoration: 'none' }}> <p className='text-dark'>Parking place</p></Link>
              <Link to={'/bookingform'} style={{ textDecoration: 'none' }}>  <p className='text-dark'>Booking Form</p></Link>
            </div>
          </div>



          <div className="col-md-2 d-md-flex justify-content-center  mt-4 mt-md-0">
            <div>
              <h4 className='text-light'>Guides</h4>
              <p className='mt-3 text-dark'>React</p>
              <p className='text-dark'>React Bootstrap</p>
              <p className='text-dark'>Bootswatch</p>

            </div>
          </div>

          <div className="col-md-4 px-md-5 mt-4 mt-md-0">
            <h4 className='text-light '>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email Id'
                className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>

            </div>
            <div className="d-flex justify-content-between mt-4">
              <FontAwesomeIcon icon={faInstagram} className='fa-2x text-light' />
              <FontAwesomeIcon icon={faXTwitter} className='fa-2x text-light' />
              <FontAwesomeIcon icon={faFacebook} className='fa-2x text-light' />
              <FontAwesomeIcon icon={faLinkedin} className='fa-2x text-light' />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer