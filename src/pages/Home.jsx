import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHeader from '../components/LoginHeader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerApi } from '../services/allApi';


function Home({ userregister }) {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    username: "",
    email: "",
    mobilenumber: "",
    vehiclenumber: "",
    password: ""
  })
  console.log(register);

  const [registerUsers, setRegisterUsers] = useState([])

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  console.log(login);


  // handle register

  const handleRegister = async () => {
    const { username, email, mobilenumber, vehiclenumber, password } = register

    if (!username || !email || !mobilenumber || !vehiclenumber || !password) {
      toast.warning('please fill the form completely')
    }
    else {
      const result = await registerApi(register)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        toast.success('Registration successfully')
        setRegisterUsers((prevUsers) => [...prevUsers, { ...register }])
        setTimeout(() => {
          navigate("/")
        }, 2000)

        setRegister({
          username: "",
          email: "",
          mobilenumber: "",
          vehiclenumber: "",
          password: ""
        })
      }
      else {
        toast.error('something went wrong')
      }
    }
  }

  // handle login

  const handleLogin = async () => {
    const { email, password } = login
    if (!email || !password) {
      toast.warning('Fill the form completely')
    }

    else {
      const user = registerUsers.find((user) => user.email == email && user.password == password)
      if (user) {
        toast.success('Login successfull')
        setTimeout(() => {
          navigate("/parkingplace")
        }, 2000)
        setLogin({
          email: "",
          password: ""
        })

      } else {
        toast.error('Invalid email or password.Please try again')
      }
    }
  }


  return (
    <>
      <LoginHeader />
      <div style={{ backgroundImage: "url(https://www.thenbs.com/-/media/uk/new-images/by-section/knowledge/knowledge-articles-hero/multi-storey-car-park.jpg)", height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.41)', height: '600px' }}>

          {!userregister ?
            <div className="row" >
              <div className="col-md-3"></div>
              <div className="col-md-6 p-5 " >
                <form className='shadow p-4 mt-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.553)' }}>
                  <h3 className='text-center text-light my-4'>Sign Into Your Account</h3>

                  <div className="mt-3">
                    <input type="text" id='email' placeholder='Email ID' className='form-control mt-1' onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                  </div>

                  <div className="mt-3">
                    <input type="password" id='password' placeholder='Password' className='form-control mt-1' onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                  </div>

                  <button className='btn btn-danger w-100 my-3 ' type="button" onClick={handleLogin} >LOGIN</button>

                  <h6 className=' text-white text-center'>Don't have an account? Click here to <Link to={'/register'} className='text-danger'><span>register</span></Link></h6>
                </form>

              </div>
              <div className="col-md-3"></div>
            </div>

            :
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">

                <div className='shadow p-4 mt-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.553)' }}>
                  <h3 className='text-center text-light my-4'>Sign Upto Your Account</h3>

                  <form>
                    <div className="mt-3">
                      <label htmlFor="name" className='text-light'>NAME</label>
                      <input type="text" placeholder='Username' className='form-control mt-1' onChange={(e) => setRegister({ ...register, username: e.target.value })} />
                    </div>

                    <div className="mt-3">
                      <label htmlFor="name" className='text-light'>EMAIL</label>
                      <input type="text" placeholder='Email ID' className='form-control mt-1' onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                    </div>

                    <div className="d-flex w-100">
                      <div className="mt-3">
                        <label htmlFor="name" className='text-light'>MOBILE NUMBER</label>
                        <input type="text" placeholder='mobile number' className='form-control mt-1' onChange={(e) => setRegister({ ...register, mobilenumber: e.target.value })} />
                      </div>

                      <div className="mt-3 ms-5">
                        <label htmlFor="name" className='text-light'>VEHICLE NUMBER</label>
                        <input type="text" placeholder='vehicle number' className='form-control mt-1' onChange={(e) => setRegister({ ...register, vehiclenumber: e.target.value })} />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="name" className='text-light'>PASSWORD</label>
                      <input type="password" placeholder='Password' className='form-control mt-1' onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                    </div>
                  </form>

                  <button className='btn btn-danger my-3 w-100' onClick={handleRegister}>REGISTER</button>

                  <h6 className=' text-white text-center'>Already registered? Click here to <Link to={'/'} className='text-danger'><span >login</span></Link></h6>

                </div>

              </div>
              <div className="col-md-3 "></div>
            </div>}



        </div>
      </div>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </>

  )
}

export default Home