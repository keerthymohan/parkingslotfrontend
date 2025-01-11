import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getBookingDetailApi } from '../services/allApi'
import Footer from './Footer'

function BookDetails() {
    const [detail, setDetail] = useState([])
    const getBookingDetail = async () => {
        const result = await getBookingDetailApi()
        // console.log(result);
        setDetail(result.data)

    }
    useEffect(() => {
        getBookingDetail()
    }, [])
  return (
    <>
    <Header/>
     <h1 className='text-center my-5 text-danger'>YOUR BOOKINGS</h1>

<div className="container mb-5 d-none d-md-block">
    <div className='p-3'>
        <table className='border w-100'>
            <thead className='bg-danger text-center'>
                <tr>
                    <th className='p-3'>Vehicle Number</th>
                    <th className='p-3'>Place</th>
                    <th className='p-3'>Entry Time</th>
                    <th className='p-3'>Exit Time</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {detail?.map((item) => (
                    <tr>
                        <td className='p-3'>{item.vehicleNum}</td>
                        <td className='p-3'>{item.city}</td>
                        <td className='p-3'>{item.entryTime}</td>
                        <td className='p-3'>{item.exitTime}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    </div>

</div>


<div className="container mb-5 mt-5 d-md-none">
    {detail?.map((item) => (
        <div className="p-3 my-5 shadow d-md-flex align-items-center justify-content-center">
            <h6 className='mt-3'>Vehicle Number : {item.vehicleNum}</h6>
            <h6>Place : {item.city}</h6>
            <h6>Entry Time : {item.entryTime}</h6>
            <h6 className='mb-4'>Exit Time : {item.exitTime}</h6>
        </div>

    ))
    }

</div>
<Footer/>
    </>
  )
}

export default BookDetails