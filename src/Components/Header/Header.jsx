import React from 'react'
import logo from '../assets/services/logo.svg'
import loc from '../assets/images/loc.svg'
import { Link } from 'react-router-dom'

const Header = () => {

    const handleClick = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }
    return (
        <>
            {/* <!-- Header START --> */}
            <header className="navbar-light sticky-top header-shadow">
                {/* <!-- Logo Nav START --> */}
                <nav className="navbar navbar-dark navbar-expand-xl">
                    <div className="container">
                    <button className="navbar-toggler me-3 p-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        {/* <!-- Logo START --> */}
                            <Link to={'/'} className="navbar-brand"><img className="navbar-brand-item" src={logo} alt="logo" onClick={handleClick}/></Link>
                        {/* <!-- Logo END -->
				<!-- Responsive navbar toggler --> */}
                    
                        {/* <!-- Main navbar START --> */}
                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll mx-auto">
                                {/* <!-- Nav item Link --> */}
                                <li className="nav-item"> <Link className="nav-link" to={'/'} onClick={handleClick}>HOME</Link></li>
                                <li className="nav-item"> <Link to={'/about-us'} onClick={handleClick} className="nav-link">ABOUT US </Link></li>
                                {/* <li className="nav-item"> <Nav.Link href="#services" className="nav-link" >SERVICES</Nav.Link> </li> */}
                                <li className="nav-item"> <Link to={'/find-experts'} onClick={handleClick} className="nav-link">FIND EXPERTS</Link> </li>
                                <li className="nav-item"> <Link to={'/partners'} onClick={handleClick} className="nav-link">PARTNERS</Link> </li>
                                <li className="nav-item"> <Link to={'/contact-us'} onClick={handleClick} className="nav-link">CONTACT US</Link> </li>
                            </ul>
                        </div>
                        {/* <!-- Main navbar END -->
				<!-- Profile and Notification START --> */}
                        <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto" id='location'>
                            {/* <!-- Notification dropdown START -->

					<!-- Notification dropdown END --> */}

                          <li className="mx-2 d-flex header_">
                                <img src={loc} className="ms-3" alt="" />
                                <div className="ms-2">
                                    <p className='my-1'>Call Anytime</p>
                                    <h6><a href='tel:+91 73823 73824'>+91 73823 73824</a></h6>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- Profile and Notification START --> */}
                    </div>
                </nav>
                {/* <!-- Logo Nav END --> */}
            </header>
            {/* <!-- Header END -->
	<!-- **************** MAIN CONTENT START **************** --> */}
        </>
    )
}

export default Header