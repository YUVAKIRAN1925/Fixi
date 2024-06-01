import React, { useState } from 'react'
import slider1 from '../assets/images/carousel.jpg'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import axios from 'axios'
import { appointmentUrl } from '../API/Api'

const ContactUs = () => {
    const appointDetails = {
		name: "",
		phone: "",
        email: "",
        subject : "",
		text: ""
	}
    const [appointment, setAppointment] = useState(appointDetails);

    const handleChange = (e) => {
		setAppointment({ ...appointment, [e.target.name]: e.target.value });
	};

    const isValidPhoneNumber = (phoneNumber) => {
		// Regular expression for a basic phone number format (10 digits)
		const phoneRegex = /^\d{10}$/;
		return phoneRegex.test(phoneNumber);
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidPhoneNumber(appointment.phone)) {
			axios.post(appointmentUrl, appointment)
				.then((res) => {
					setAppointment(res.data.data);
					setAppointment(appointDetails)
					Swal.fire("success", "Appointment Successfull", "success")
				})
				.catch((error) => {
				});
		} else {
			Swal.fire("error", "Invalid Phone Number", "error")
		}
	};
    return (
        <>
            <Helmet><title>Contact Us</title></Helmet>
            <div className='container-fluid-row'>
                <div id="carouselExampleSlidesOnly" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="w-100 carousel-img" alt="..." style={{ maxHeight: '370px' }} />
                            <div className="carousel-caption">
                                <h1 className="text-center text-light title fw-bold explore-the-world"><span>Contact Fixi</span></h1>
                                <p className='fw-medium people-people'>Get Your Electronics Fixed in 1..2..3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-7 mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" required name='name' placeholder="Your Name" className="form-control bg-light" value={appointment.name} onChange={handleChange}/>
                                    <input type="email" required name='email' placeholder="Email Address" className="form-control bg-light mt-4 mb-4" value={appointment.email} onChange={handleChange}/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="tel" required name='phone' className="form-control bg-light" placeholder="Phone Number" value={appointment.phone} onChange={handleChange}/>
                                    <input type="text" required name='subject' placeholder="Subject" className="form-control bg-light mt-4" value={appointment.subject} onChange={handleChange}/>
                                </div>
                                <div className="col-lg-12">
                                    <textarea name="text" required cols="30" rows="8" className="form-control mt-4 bg-light"
                                        placeholder="Write a Message" id="" value={appointment.text} onChange={handleChange}></textarea>
                                    <button className="btn mt-4 " style={{backgroundColor:'#E90B35',color:'#FFFFFF'}}> Send a Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5">
                        <div className="card p-3 mt-1 " style={{boxShadow:"0px 10px 60px 0px rgba(0, 0, 0,0.1)",border:"none"}}>
                            <div className="card-body">
                                <h3 className='mb-3'>Our Offices</h3>
                                <div className="row">
                                    <div className="col-lg-2 col-3 pt-2">
                                            <i className="bi bi-telephone-outbound-fill p-2 rounded-2 fs-5" style={{color:'white',backgroundColor:'#E90B35'}}></i>
                                    </div>
                                    <div className="col-lg-10 col-9">
                                        <span className='fw-bold'>HAVE ANY QUESTIONS?</span>
                                        <p className="fw-medium">+91 73823 73824</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-3 pt-2">
                                            <i className="bi bi-envelope-fill p-2 rounded-2 fs-5" style={{color:'white',backgroundColor:'#E90B35'}}></i>
                                    </div>
                                    <div className="col-lg-10 col-9">
                                        <span className='fw-bold'>SEND EMAIL</span>
                                        <p className="fw-medium">fix@fixi.in</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-3 pt-2">
                                            <i className="bi bi-geo-alt-fill p-2 rounded-2 fs-5 " style={{color:'white',backgroundColor:'#E90B35'}}></i>
                                    </div>
                                    <div className="col-lg-10 col-9">
                                        <span className='fw-bold'>VISIT ANY TIME</span>
                                        <p className="fw-medium">
                                            303, Block – A, The Platina,
                                            <br />
                                            Kothaguda Road, Gachibowli,
                                            <br />
                                            Hyderabad – 500032
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex ">
                                        <a href="#"><i className="bi bi-twitter fs-5 text-secondary p-2 rounded bg-secondary-one"></i></a>
                                        <a href="#"><i className="bi bi-facebook fs-5 mx-2 text-secondary p-2 rounded  bg-secondary-one"></i></a>
                                        <a href="#"><i className="bi bi-instagram fs-5 text-secondary p-2 rounded bg-secondary-one"></i></a>
                                        <a href="#"><i className="bi bi-pinterest fs-5 mx-2 text-secondary p-2 rounded  bg-secondary-one"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs