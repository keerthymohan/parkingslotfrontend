
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BookingForm from './pages/BookingForm'
import Home from './pages/Home'
import ParkingPlace from './pages/ParkingPlace'
import BookDetails from './components/BookDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Home userregister={true}/>} />
      <Route path='/bookingform' element={<BookingForm/>} />
      <Route path='/parkingplace' element={<ParkingPlace/>}/>
      <Route path='/booking' element={<BookDetails/>}/>
    </Routes>
     
    </>
  )
}

export default App
