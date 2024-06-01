import React from 'react'
import slider1 from '../assets/images/carousel.jpg'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { Helmet } from 'react-helmet';

const HowItWorks = () => {
    return (
        <>
            <Helmet><title>Partners</title></Helmet>
            <div className='container-fluid-row'>
                <div id="carouselExampleSlidesOnly" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="w-100 carousel-img" alt="..." style={{ maxHeight: '370px' }} />
                            <div className="carousel-caption">
                                <h1 className="text-center text-light title fw-bold how-it-works"><span>Partners</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='container mt-5'>
                <div className="content-inner">
                    <h2 className="text-center fw-medium mb-3">
                        <span>Join Fixi</span>
                    </h2>
                </div>
            </div>
            <div className='container mb-5'>
                    <p>Fixi&nbsp; Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date.</p>
                    <p>At HomePro Services, our mission is to provide homeowners with convenient, reliable, and affordable solutions to their home maintenance needs. We strive to exceed customer expectations by delivering exceptional service and ensuring the comfort and safety of every home we serve.</p>
                    <p>With Fixi Services, you can trust that your home is in good hands. Let us take care of the details so you can enjoy peace of mind and focus on what matters most.</p>
            </div>
            <div id='img-overlay'>
                <div className='img-overlay'></div>
                {/* <section className='elementor-background-overlay'></section> */}
                <div className='container pt-5 pb-7' id='caption-howitworks'>
                    <div className='pt-5 pb-4'>
                        <div className="sub-title text-center text-uppercase text-light fw-bold" style={{ letterSpacing: "0.1em" }}><span className="tagline">4 easy steps</span></div>
                        <div>
                            <h2 className="title text-center text-light fw-bold p-3 fs-2">
                                <span>How It Works</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pb-6 cards-container-main' style={{ marginTop: "-94px" }}>
                <div className='d-flex justify-content-around cards-display-main'>
                    <div className='bg-light py-5 px-6 cards-display' style={{ transform: 'skewX(-10deg)' }}>
                        <div className="feature-one__bg-inner"></div>
                        <div className="feature-one__wrapper">
                            <div className="feature-one__box-content">
                                <div className="feature-one__icon-box text-center pb-4"><GroupAddOutlinedIcon fontSize='large' color='error' />
                                </div>
                                <h3 className="feature-one__title text-center fw-medium fs-5 px-4">Call <br /> Us</h3>
                            </div>
                            <div className="feature-one__bg">
                                <div className="feature-one__bg-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light py-5 px-7 cards-display' style={{ transform: 'skewX(-10deg)' }}>
                        <div className="feature-one__wrapper">
                            <div className="feature-one__box-content">
                                <div className="feature-one__icon-box text-center pb-4"><EditNoteOutlinedIcon fontSize='large' color='error' />
                                </div>
                                <h3 className="feature-one__title text-center fw-medium fs-5">Provide<br />Info</h3>
                            </div>
                            <div className="feature-one__bg">
                                <div className="feature-one__bg-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light py-5 px-7 cards-display' style={{ transform: 'skewX(-10deg)' }}>
                        <div className="feature-one__wrapper">
                            <div className="feature-one__box-content">
                                <div className="feature-one__icon-box text-center pb-4"><KeyboardAltOutlinedIcon fontSize='large' color='error' />
                                </div>
                                <h3 className="feature-one__title text-center fw-medium fs-5 px-2">Get<br />Listed</h3>
                            </div>
                            <div className="feature-one__bg">
                                <div className="feature-one__bg-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light py-5 px-6 cards-display' style={{ transform: 'skewX(-10deg)' }}>
                        <div className="feature-one__wrapper">
                            <div className="feature-one__box-content">
                                <div className="feature-one__icon-box text-center pb-4"><AutoGraphOutlinedIcon fontSize='large' color='error' />
                                </div>
                                <h3 className="feature-one__title text-center fw-medium fs-5">Get<br />Exposure</h3>
                            </div>
                            <div className="feature-one__bg">
                                <div className="feature-one__bg-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-view-cards mt-2 mb-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="feature-one__box-content">
                                        <div className="text-center pb-4"><GroupAddOutlinedIcon fontSize='large' color='error' />
                                        </div>
                                        <h3 className="text-center fw-medium fs-5">Create an<br />Account</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="feature-one__box-content">
                                        <div className="text-center pb-4"><EditNoteOutlinedIcon fontSize='large' color='error' />
                                        </div>
                                        <h3 className="text-center fw-medium fs-5">Add<br />Listings</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="feature-one__box-content">
                                        <div className="text-center pb-4"><KeyboardAltOutlinedIcon fontSize='large' color='error' />
                                        </div>
                                        <h3 className="text-center fw-medium fs-5">Publish<br />Listings</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="feature-one__box-content">
                                        <div className="text-center pb-4"><AutoGraphOutlinedIcon fontSize='large' color='error' />
                                        </div>
                                        <h3 className="text-center fw-medium fs-5">Get<br />Exposure</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks