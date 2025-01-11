import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBookingDetailApi } from '../services/allApi';

function BookingForm() {
  const navigate = useNavigate()

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    city: "",
    mobileNum: "",
    vehicleModel: "",
    vehicleNum: "",
    entryTime: "",
    exitTime: ""
  })
  console.log(bookingDetails);
  
  const handleSubmit = async () => {
    const { name, city, mobileNum, vehicleModel, vehicleNum, entryTime, exitTime } = bookingDetails

    if (!name || !city || !mobileNum || !vehicleModel || !vehicleNum || !entryTime || !exitTime) {
      toast.warning('Please fill the form completely')
    }
    else {
      const result = await addBookingDetailApi(bookingDetails)

      if (result.status >= 200 && result.status < 300) {
        toast.success("Booking successfull")
        navigate('/booking')
      }
      else {
        toast.error("something went wrong")
      }
    }
  }
  return (
    <>
      <Header />
      <div style={{ backgroundImage: "url(https://as2.ftcdn.net/v2/jpg/04/12/09/07/1000_F_412090723_sBUEo58onf8Yy6fCxrQGNIXBiS27NJD5.jpg)", height: '600px', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '50px' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)', height: '600px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 shadow p-4 my-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.553)' }}>
                <h2 className='text-center mb-4 text-light'>Parking Slot Allocation Form</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" placeholder='Name' className='form-control' onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })} />
                  </div>

                  <div className="mb-3 d-flex">
                    <input type="text" placeholder='City of residence' className='form-control' onChange={(e) => setBookingDetails({ ...bookingDetails, city: e.target.value })} />
                    <input type="tel" placeholder='Phone No:' className='form-control ms-3' onChange={(e) => setBookingDetails({ ...bookingDetails, mobileNum: e.target.value })} />
                  </div>

                  <div className="mb-3 d-flex">
                    <input type="text" placeholder='Vehicle model' className='form-control' onChange={(e) => setBookingDetails({ ...bookingDetails, vehicleModel: e.target.value })} />
                    <input type="text" placeholder='Vehicle number' className='form-control ms-3' onChange={(e) => setBookingDetails({ ...bookingDetails, vehicleNum: e.target.value })} />
                  </div>

                  <div className="mb-3">
                    <label className='text-light'>Entry Time:</label>
                    <input type="datetime-local" className='form-control mt-2' onChange={(e) => setBookingDetails({ ...bookingDetails, entryTime: e.target.value })} />
                  </div>

                  <div className="mb-3">
                    <label className='text-light'>Exit Time:</label>
                    <input type="datetime-local" className='form-control mt-2' onChange={(e) => setBookingDetails({ ...bookingDetails, exitTime: e.target.value })} />
                  </div>
                </form>
                <div className="mb-3">
                  <button className='btn btn-danger shadow w-100 mt-2' onClick={handleSubmit}>Confirm Booking</button>
                </div>

              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />


    </>
  )
}

export default BookingForm