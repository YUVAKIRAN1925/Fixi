import React, { useState } from 'react'
import dlogo from '../assets/images/dlogo.png'
import axios from 'axios'
import { appointmentUrl, queryUrl } from '../API/Api'
import Swal from 'sweetalert2'
import AutoScrollSlider from './AutoScrollSlider'
import { Link, useParams } from 'react-router-dom'

const CompanyDetails = ({ company_name, mobile_number, image1, image2, image3, image4, image5, image6, service_name, description_image, long_description1, long_description2,slug }) => {
    const queryDeatils = {
        name: "",
        email: "",
        query: ""
    }
    const appointDetails = {
		name: "",
		email: "",
		phone: "",
		location: "",
		address: "",
		date: "",
		text: ""
	}
    const [queryForm, setQueryForm] = useState(queryDeatils)
    const [appointment, setAppointment] = useState(appointDetails);
    const { serviceName } = useParams()

    const submitQuery = (e) => {
        e.preventDefault()
        axios.post(queryUrl, queryForm)
            .then(res => {
                setQueryForm(queryDeatils)
                Swal.fire("success", "Your Query Successfully Posted", "success")
            })
            .catch(error => {
            })
    }

    
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

    const handleInputChange = (e) => {
        setQueryForm({ ...queryForm, [e.target.name]: e.target.value })
    }

    const handleWhatsAppButton = () => {
        window.open('https://api.whatsapp.com/send?phone=+91 9641556241 &text=Hi, I wanted to know about the services that you offer. I believe you have something special.')
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <>
            <div className="bg-white">
                <div className="container">
                    <div className="row p-3 mt-3 mb-3">
                        <div className="col-lg-7">
                            <nav style={{ '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")' }}
                                aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item breadcrumbs" onClick={handleClick}>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item breadcrumbs " aria-current="page" onClick={handleClick}>
                                        <Link to={`/${serviceName}`}> {service_name}</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-danger breadcrumbs" aria-current="page">
                                        {company_name}</li>
                                </ol>
                            </nav>
                            <h4 className="card-title mb-2 text-dark" id='companymain-ver'>
                                <span className='d-flex align-items-center' id='company-name'>
                                    <img src={dlogo} alt="" className='me-2' id='dlogo'/>
                                    {company_name}
                                    <span className="fs-6 text-success" id='company-name-sub'>
                                        <i className="bi bi-check2-circle mx-2"></i>
                                        Silver Verified
                                    </span>
                                </span>
                            </h4>
                            <p>{long_description1}</p>
                            <p>{long_description2}</p>
                            <span>
                                <a href="tel:7095011268"><button className="btn btn-danger btn-w-p-e"><i className="bi bi-telephone"></i> {mobile_number}</button></a>
                                <span className="">
                                    <button className="btn btn-success mx-2 btn-w-p-e" onClick={handleWhatsAppButton}><i className="bi bi-whatsapp"></i> Whatsapp</button>
                                </span>

                                <button type="button" className="btn btn-outline-danger btn-w-p-e" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">
                                    <i className="bi bi-chat-left"></i>   Send Enquiry
                                </button>

                                <button type="button" className="btn btn-outline-danger btn-w-p-e ms-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2">
                                    <i className="bi bi-calendar-check"></i>   Make Appointment
                                </button>
                            </span>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <img src={description_image} alt="" className='rounded' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ======================= Search START --> */}

            {/* <!-- ======================= Titles START --> */}
            <div className="container mt-3" id='reviews' style={{overflow:'hidden'}}>
                <div className="d-flex mt-5">
                    <AutoScrollSlider image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} image6={image6} />
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send Query</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitQuery}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" required className="form-control" id="name" name="name" value={queryForm.name} aria-describedby="name" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" required className="form-control" id="exampleInputEmail1" name="email" value={queryForm.email} aria-describedby="emailHelp" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="query" className="form-label">Message</label>
                                    <textarea required name="query" className="form-control" id="query" cols="30" rows="3" value={queryForm.query} onChange={handleInputChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* Appointment Modal */}
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Make Appointment</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className="card-body form-control-border p-3 p-sm-4" onSubmit={handleSubmit}>
											{/* <!-- Tabs START --> */}
											<div className="row">
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Name</label>
														<input required type="text" className="form-control form-control-lg" name='name' value={appointment.name} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Email</label>
														<input required type="email" className="form-control form-control-lg" name='email' value={appointment.email} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Phone</label>
														<input required type="tel" className="form-control form-control-lg" name='phone' value={appointment.phone} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Location</label>
														<input required type="text" className="form-control form-control-lg" name='location' value={appointment.location} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Address</label>
														<input required type="text" className="form-control form-control-lg" name='address' value={appointment.address} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-6 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Date</label>
														<input required type="date" className="form-control form-control-lg" name='date' value={appointment.date} onChange={handleChange} />
													</div>
												</div>
												<div className="col-xl-12 mb-2">
													<div className="form-fs-md">
														<label className="form-label">Message</label>
														<textarea required name="text" className="form-control" id="query" cols="30" rows="3" value={appointment.text} onChange={handleChange}></textarea>
													</div>
												</div>
												<div className="col-xl-12 mt-3">
													<button className="btn btn-danger w-100">Make An Appointment</button>
												</div>
											</div>
										</form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails