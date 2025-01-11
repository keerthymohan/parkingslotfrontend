import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';

function ParkingPlace() {

    const locations = [
        {
            id: 1,
            name: "LuLu International Shopping Mall,Kochi",
            image: "https://www.homesindiamagazine.com/uploaded_images/newstransfer/r4z3jjfx1u645645.jpg", 
        },
        {
            id: 2,
            name: "Center Square Mall,Kochi",
            image: "https://onlyinyourstate.in/wp-content/uploads/2018/07/Centre-Square-Mall-Kochi.jpg", 
        },
        {
            id: 3,
            name: "Forum Mall, Kochi",
            image: "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/111880.Prestige-Group-Debuts-In-Kerala-With-Mall-%E2%80%98Forum-Kochi%E2%80%99-In-Maradu.JPG", 
        },
    ];

  return (
    <>
    <Header/>
    <div className="container mt-5 bg-light">
                <h1 className="text-center mb-4 text-danger fw-bold">Our Presence</h1>
                
                <div className="row mt-5">
                    {locations.map((location) => (
                        <div className="col-md-4 mb-4" key={location.id}>
                            <div className="card h-100 shadow">
                                <img
                                    src={location.image}
                                    className="card-img-top h-300"
                                    alt={location.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{location.name}</h5>
    
                                   <Link to={'/BookingForm'}><button className="btn btn-danger">Book Slot</button></Link> 
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
    
                <div className="mt-5">
                    <marquee class="text-black text-9xl md:text-9xl text-6xl" scrollamount="20" behavior="" direction="left"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" height={'100px'} width={'150px'} />
                        <img className="ms-5" src="https://palakkad.lulumall.in/wp-content/uploads/2023/12/lulu-fashion-store.jpg" alt="" height={'100px'} width={'150px'} />
                        <img className="ms-5" src="https://www.designyourway.net/blog/wp-content/uploads/2023/09/crocs-logo-1.jpg" alt="" height={'100px'} width={'150px'} />
                        <img className="ms-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png" alt="" height={'100px'} width={'150px'} />
                        <img className="ms-5" src="https://1000logos.net/wp-content/uploads/2018/08/Sephora-Emblem.png" alt="" height={'100px'} width={'150px'} />
                        <img className="ms-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1024px-Converse_logo.svg.png" alt="" height={'100px'} width={'150px'} />
                    </marquee>
                </div>
            </div>
            <Footer/>
    
    </>
  )
}

export default ParkingPlace