import React from 'react'
import girl from '../assets/images/girl.png'
import slider1 from '../assets/images/carousel.jpg'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
    return (
        <>
            <Helmet><title>About Us</title></Helmet>
            <div className='container-fluid-row'>
                <div id="carouselExampleSlidesOnly" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="w-100 carousel-img" alt="..." style={{ maxHeight: '400px' }}/>
                            <div className="carousel-caption">
                                <h1 className="text-center text-light title fw-bold how-it-works"><span>About Us</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={girl} alt="" width="100%" />
                    </div>
                    <div className="col-lg-6 align-self-center section-get-to-know">
                        <span className='text-danger fw-bold'>GET TO KNOW US</span>
                        <h2 className="fw-bold mt-4 mb-4">Who we are</h2>
                        <p>Welcome to Fixi, your trusted partner for all your home repair and maintenance needs.
                            We specialize in a wide range of services including AC repairs, fridge repairs, geyser repairs, TV repairs, water proofing, and pest control.
                            At Fixi, we are dedicated to providing fast, reliable, and professional solutions to ensure your home is always in top condition.
                        </p>
                        <p className="my-2">
                            Our team of certified and experienced technicians uses the latest tools and techniques to deliver high-quality service with every visit. We pride ourselves on our quick response times and commitment to customer satisfaction. Whether it's a minor fix or a major repair, you can count on Fixi to get the job done right the first time.
                        </p>
                        <p>
                        We believe in building long-term relationships with our clients by offering affordable pricing, exceptional service, and continuous support. Your comfort and peace of mind are our top priorities, and we strive to exceed your expectations with every service call.
                        </p>
                        <p className="mt-2 mb-5">
                        Thank you for choosing Fixi. We look forward to serving you and making your home a better place.
                        </p>
                        <p className="fw-bold">
                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                            Quality is guaranteed to meet the standard
                        </p>
                        <p className="fw-bold">
                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                            Lowest Price in Market | ISO Certified Company
                        </p>
                        <p className="fw-bold">
                            <i className="bi bi-check-circle-fill text-danger me-2"></i>

                            Qualified Professionals
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
