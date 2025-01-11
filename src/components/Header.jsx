import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function Header() {

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

      <Navbar expand="lg" className="bg-danger p-4">

        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none' }} > <h1 className='text-dark'> <img src='https://pngimg.com/uploads/letter_p/letter_p_PNG28.png' style={{ width: "50px", height: "55px" }} className='me-3' />PAR-KING</h1> </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto ">
              <Link to={'/'} style={{ textDecoration: 'none' }}><h2 className='text-white'>Home</h2></Link>
              <Link to={'/booking'} style={{ textDecoration: 'none' }}><h2 className='ms-md-5 text-white'>Bookings</h2></Link>
              <Link onClick={handleShow} style={{ cursor: 'pointer', textDecoration: 'none' }} ><h2 className='ms-md-5 text-white'>How it works</h2></Link>
            </Nav>

            <Link to='/'><button className='btn btn-light rounded p-2 ms-md-5 text-dark'>Sign Out</button></Link>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* how it works modal */}
            
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center text-danger'>HOW IT WORKS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mt-4 d-flex'>
                        <div>
                            <span className='fs-1 text-danger'>1</span>
                        </div>
                        <div className='ms-3'>
                            <h3>Find your car park!</h3>
                            <p>Sign up and check your preferred place for parking</p>
                        </div>
                    </div>

                    <div className='mt-2 d-flex'>
                        <div>
                            <span className='fs-1 text-danger'>2</span>
                        </div>
                        <div className='ms-3'>
                            <h3>Book!</h3>
                            <p>Select date and time, check availability,see prices..</p>
                        </div>
                    </div>

                    <div className='mt-2 d-flex'>
                        <div>
                            <span className='fs-1 text-danger'>3</span>
                        </div>
                        <div className='ms-3'>
                            <h3>Park!</h3>
                            <p>Upon arrival, just show your reservation in the car park.</p>
                        </div>
                    </div>
                    <div>
                        <marquee class="text-black text-9xl md:text-9xl text-6xl" scrollamount="25" behavior="" direction="left"><img src="https://www.scribblefun.com/wp-content/uploads/2020/02/Car.png" alt="" style={{ height: '50px', width: '100px' }} />  </marquee>
                    </div>
                </Modal.Body>

            </Modal>

    </>
  )
}

export default Header