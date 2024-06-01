import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dlogo from '../assets/images/dlogo.png'
import state4 from '../assets/images/state4.svg'
import { queryUrl } from '../API/Api'
import axios from 'axios'
import Swal from 'sweetalert2'
import StarRating from '../Star Rating/StarRating'

const ServicesCompanies = ({ company }) => {
    const number = '7095411268'
    const queryDeatils = {
        name: "",
        email: "",
        query: ""
    }

    const [queryForm, setQueryForm] = useState(queryDeatils)
    const [enquiryCount, setEnquiryCount] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const words = company.long_description1.split(' ');
    const preview = words.slice(0, 30).join(' ');
    const remaining = words.slice(30).join(' ');

    useEffect(() => {
        setEnquiryCount(getRandomInt(100, 1000));
    }, [company.company_name]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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

    const handleInputChange = (e) => {
        setQueryForm({ ...queryForm, [e.target.name]: e.target.value })
    }

    const handleWhatsAppButton = () => {
        window.open('https://api.whatsapp.com/send?phone=+91 9641556241 &text=Hi, I wanted to know about the services that you offer. I believe you have something special.')
    }

    const handleClick = () => {
        window.open(`${company.website_link}`)
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            {/* <!-- Cab item START -->  */}
            <div className="card border px-4 py-2" id='cad-mainmain'>
                {/* <!-- Card body START --> */}
                <div className="card-body p-0" id='card-main'>
                    <div className="row g-sm-4 mb-4">
                        {/* {/* <!-- Card image start--> */}
                        <div className="col-sm-3 col-md-3 col-xl-3">
                            <img src={company.description_image} alt="Helloo" className='object-fit-cover rounded-2'/>
                        </div>
                        {/* <!-- Card image end-->
                                            <!-- Card title and rating --> */}
                        <div className="col-sm-9 col-md-9 col-xl-9">
                            <h4 className="card-title" id='company-main'>
                                {/* <Link className="stretched-link" to={'/'} > */}
                                <span className='company-names'>
                                    <img src={dlogo} alt="" className='me-2' id='dlogo' />
                                    <Link to={`/${company.service_slug}/${company.slug}`} onClick={scrollToTop} className='text-dark' id='company-name' style={{fontSize:'25px'}}>{company.company_name}</Link>
                                    <span className="fs-6 text-success mx-2 company-names-sub">
                                        <i className="bi bi-check2-circle circle-icon"></i>
                                        Verified</span>
                                </span>
                                {/* </Link> */}
                            </h4>
                            <ul className="list-inline mb-0" id='lists-subsub'>
                                <li className="list-inline-item h6 fw-normal me-1 mb-0">
                                    <span className="bg-danger-subtle text-danger badge p-2 service-name">{company.service_name}</span> |</li>
                                <li className="list-inline-item me-0">
                                    <span className="badge text-bg-success"> {company.average_rating === null ? 0 : company.average_rating}</span>
                                </li>
                                <li className="list-inline-item ms-1">
                                    <StarRating rating={company.average_rating} />
                                </li>
                                <li className="list-inline-item">
                                    ({company.count === null ? 0 : company.count} reviews)
                                </li>
                                <li className="list-inline-item" id='responsive-button'>
                                    <span className="badge rounded-4 p-2 sub-categories m-3"><i className="bi bi-lightning-charge-fill text-warning pe-1"></i>Responsive</span>
                                </li>
                            </ul>
                            <p className="text paragraph">
                                {preview}
                                {!isExpanded && words.length > 20 && '...'}
                                {isExpanded && remaining}
                                {words.length > 30 && (
                                    <span onClick={() => setIsExpanded(!isExpanded)} style={{ color: 'blue', cursor: 'pointer' }}>
                                        {isExpanded ? ' Show Less' : ' Read More'}
                                    </span>
                                )}
                            </p>
                            <div className="row">
                            <div className='col-sm col-md col-xl'>
                                <div className='row'>
                                    <div className='col-sm-7 col-md-7 col-xl-7'>
                                        <ul className="nav h6 fw-normal" id='subservice-ul'>
                                            {
                                                company.sub_service.map(({ subservice_name }, index) => {
                                                    return (
                                                        <li key={index} className="nav-item text-success sub-services my-1" id='sub-service-main'>
                                                            <span className="badge p-2 sub-categories mx-2">{subservice_name}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-sm-5 col-md-5 col-xl-5 text-sm-end" id='enquired'>
                                        <p className="text paragraph "><img src={state4} alt="" className="pe-1" />{enquiryCount} people recently enquired</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <!-- Nav divider --> */}
                            {/* <!-- Rating Star --> */}
                        </div>
                        {/* <!-- Button --> */}
                    </div>
                    {/* <!-- Row END --> */}
                </div>
                {/* <!-- Card body END --> */}
                {/* <!-- Card footer START --> */}
                <div className="card-footer border-top p-0 pt-3 buttons-card" id='border-top'>
                    <div className="row">
                        {/* <!-- List --> */}
                        <div className="col-md-8" id='buttons-main'>
                            <span>
                                <button className="btn btn-danger btn-w-p-e"><i className="bi bi-telephone"></i> <a href={`tel:${number}`} className='text-light'>{company.mobile_number}</a></button>
                                <span className="mx-2">
                                    <button className="btn btn-success mx-2 btn-w-p-e" onClick={handleWhatsAppButton}><i className="bi bi-whatsapp"></i> Whatsapp</button>
                                </span>

                                <button type="button" className="btn border btn-w-p-e text-dark" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <i className="bi bi-chat-left text-dark"></i>   Send Enquiry
                                </button>
                            </span>
                        </div>
                        {/* <!-- Info --> */}
                        <div className="col-md-4 d-flex align-items-center justify-content-center info">
                            <ul className="nav nav-divider h6 fw-normal mb-2 pe-2" id='view-pro-website'>
                                <li className="nav-item text-dark fw-medium profile-text paragraph">
                                    <i className="bi bi-person-circle me-2"></i>
                                    <Link to={`/${company.service_slug}/${company.slug}`} onClick={scrollToTop}>View Profile</Link></li>
                                {
                                    company.website_link === null ? null : (
                                        <li className="nav-item text-dark fw-medium profile-text paragraph" style={{ cursor: "pointer" }} onClick={handleClick}>
                                            <i className="bi bi-globe me-2"></i>
                                            Website</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- card footer END --> */}
            </div>
        </>
    )
}

export default ServicesCompanies