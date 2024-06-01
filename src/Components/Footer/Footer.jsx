import React, { useEffect } from 'react'
import mainlogo from '../assets/images/main-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	useEffect(() => {
		window.scrollTo({
		  top : 0,
		  behavior : 'smooth'
		})
	  },[])

	const handleClick = () => {
		window.scrollTo({
			top : 0,
			behavior : 'smooth'
		})
	}
  return (
    <>
        {/* <!-- =======================
Footer START --> */}
					<footer className="pt-5 footer">
						<div className="container">
							{/* <!-- Row START --> */}
							<div className="row g-4">
								{/* <!-- Widget 1 START --> */}
								<div className="col-lg-3">
									{/* <!-- logo --> */}
                                    <Link to={'/'} onClick={handleClick}><img className="h-40px" src={mainlogo} alt="logo" /></Link>
									<p className="my-3 text-body-secondary">Experience top-notch home repairs and services with Fixi – where quality meets speed.</p>
								</div>
								{/* <!-- Widget 1 END -->
				<!-- Widget 2 START --> */}
								<div className="col-lg-9 ms-auto">
									<div className="row g-4">
										{/* <!-- Link block --> */}
										<div className="col-6 col-md-3">
											<h5 className="color-white mb-2 mb-md-4">Useful Links</h5>
											<ul className="nav flex-column text-primary-hover">
												<li className="nav-item"><Link onClick={handleClick} className="nav-link text-body-secondary" to={'/'}><i className="bi bi-chevron-double-right text-danger"></i> Home</Link></li>
												<li className="nav-item"> <Link onClick={handleClick} to={'/about-us'} className="nav-link text-body-secondary" href='#aboutus'><i className="bi bi-chevron-double-right text-danger"></i> About Us</Link></li>
												<li className="nav-item"><Link onClick={handleClick}  className="nav-link text-body-secondary" to={'/contact-us'}><i className="bi bi-chevron-double-right text-danger"></i> Contact Us</Link></li>
											</ul>
										</div>
										{/* <!-- Link block --> */}
										<div className="col-6 col-md-3">
											{/* <!-- <h5 className="color-white mb-2 mb-md-4">Link</h5> --> */}
											<ul className="nav flex-column text-primary-hover mt-5">
												<li className="nav-item"><Link onClick={handleClick}  className="nav-link text-body-secondary" to={'/partners'}><i className="bi bi-chevron-double-right text-danger"></i> Partners</Link></li>
												<li className="nav-item"><Link onClick={handleClick}  className="nav-link text-body-secondary" to={'/terms-and-conditions'}><i className="bi bi-chevron-double-right text-danger"></i> Terms And Conditions</Link></li>
												<li className="nav-item"><Link onClick={handleClick}  className="nav-link text-body-secondary" to={'/privacy-policy'}><i className="bi bi-chevron-double-right text-danger"></i> Privacy Policy</Link></li>
											</ul>
										</div>
										{/* <!-- Link block --> */}
										<div className="col-6 col-md-3">
											<h5 className="color-white mb-2 mb-md-4">Services</h5>
											<ul className="nav flex-column text-primary-hover">
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/ac-repairs'}><i className="bi bi-chevron-double-right text-danger"></i> AC Repairs</Link></li>
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/fridge-repairs'}><i className="bi bi-chevron-double-right text-danger"></i> Fridge Repairs</Link></li>
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/geyser-repairs'}> <i className="bi bi-chevron-double-right text-danger"></i> Geyser Repairs</Link></li>
											</ul>
										</div>
										{/* <!-- Link block --> */}
										<div className="col-6 col-md-3 ">
											{/* <!-- <h5 className="text-white mb-2 mb-md-4">Booking</h5> --> */}
											<ul className="nav flex-column text-primary-hover mt-5">
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/tv-repairs'}><i className="bi bi-chevron-double-right text-danger"></i> TV Repairs</Link></li>
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/water-proofing'}><i className="bi bi-chevron-double-right text-danger"></i> Water Proofing</Link></li>
												<li className="nav-item"><Link className="nav-link text-body-secondary" onClick={handleClick} to={'/pest-control-services'}><i className="bi bi-chevron-double-right text-danger "></i> Pest Control Services</Link></li>
											</ul>
										</div>
									</div>
								</div>
								{/* <!-- Widget 2 END --> */}
							</div>
							{/* <!-- Row END --> */}
							{/* <!-- Tops Links -->

			<!-- Payment and card --> */}

							{/* <!-- Divider --> */}
							<hr className="mt-4 mb-0" />
							{/* <!-- Bottom footer --> */}
							<div className="row">
								<div className="container">
									<div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
										{/* <!-- copyright text --> */}
										<div className="text-body-secondary text-primary-hover">All Rights Reserved © fixi.in</div>
										{/* <!-- copyright links--> */}
										<div className="nav mt-2 mt-lg-0">
											<ul className="list-inline text-primary-hover mx-auto mb-0">
												<li className="list-inline-item me-0"><a href='#' className="nav-link text-body-secondary py-1"><i className="bi bi-twitter fs-5"></i></a></li>
												<li className="list-inline-item me-0"><a href='#' className="nav-link text-body-secondary py-1"><i className="bi bi-facebook fs-5"></i></a></li>
												<li className="list-inline-item me-0"><a href='#' className="nav-link text-body-secondary py-1 pe-0"><i className="bi bi-youtube fs-5 mx-2"></i></a></li>
												<li className="list-inline-item me-0"><a href='#' className="nav-link text-body-secondary py-1 pe-0"><i className="bi bi-linkedin fs-5"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
    </>
  )
}

export default Footer