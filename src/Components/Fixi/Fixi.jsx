import React, { useEffect, useRef, useState } from 'react'
import sliderLeft from '../assets/images/sliderLeft.png'
import serviceRight from '../assets/services/serviceRight.png'
import servbello from '../assets/services/RIlPrYW - Imgur.png'
import quote2 from '../assets/services/quote2.png'
import sectionfive from '../assets/images/Sectionfive.png'
import before from '../assets/images/bg/before.png'
import twenty from '../assets/images/bg/before1.svg'
import footerbg from '../assets/images/about/footer.png'
import crd from '../assets/images/crd-bg.png'
import dot from '../assets/images/dot.png'
import tree from '../assets/images/tree.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { appointmentUrl, searchUrl, servicesUrl } from '../API/Api'
import ServicesDisplay from '../AC Service Technicians/ServicesDisplay'
import Swal from 'sweetalert2'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from 'react-helmet'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader'

const Fixi = () => {
	const appointDetails = {
		name: "",
		email: "",
		phone: "",
		location: "",
		address: "",
		date: "",
		text: ""
	}

	const [appointment, setAppointment] = useState(appointDetails);
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView();
	const [search, setSearch] = useState({ query: '' });
	const [responseData, setResponseData] = useState([]);
	const [routes, setRoutes] = useState([])
	const [loading, setLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef(null);
	const listRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await axios.get(servicesUrl);
				setRoutes(response.data.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target) && listRef.current && !listRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);
		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [inView]);

	if (loading) {
		return <Loader />;
	}

	const HandleSearch = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
		fetchResults(value);
		setIsOpen(value.trim() !== '');
	};


	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const fetchResults = (query) => {
		axios.post(searchUrl, { query })
			.then((res) => {
				const data = res.data.data;
				if (Array.isArray(data)) {
					setResponseData(data);
				} else {
				}
			})
			.catch((error) => {
			})
	}

	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			navigate(`/search-results?query=${search.query}`);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleChange = (e) => {
		setAppointment({ ...appointment, [e.target.name]: e.target.value });
	};

	const variants = {
		hidden: { x: "100%" }, // Initial position off-screen to the right
		visible: { x: 0 }, // Visible position (center)
	};

	const isValidPhoneNumber = (phoneNumber) => {
		// Regular expression for a basic phone number format (10 digits)
		const phoneRegex = /^\d{10}$/;
		return phoneRegex.test(phoneNumber);
	};

	const displayToast = () => {
		toast.error('Search should not be empty')
	}

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
			<Helmet>Fixi</Helmet>
			<ToastContainer position='top-left' transition={Bounce} autoClose={2000} style={{ marginTop: "90px" }} />
			<main>
				{/* <!-- =======================
Main banner START --> */}
				<section className="position-relative pt-lg-5 pt-2 pb-0 slider_bg" style={{
					backgroundImage: `url(${dot})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "left center",
					backgroundSize: "contain"
				}}>
					{/* <!-- Background dark overlay --> */}
					<div className="bg-overlay opacity-0 "></div>
					<div className="container z-index-9 position-relative">
						<div className="row">
							{/* <!-- Title desktopview start--> */}
							<div className="col-xl-8 align-self-center desktopview-title">
								<h3 className="display-6 text-white mb-0 text-uppercase" id='heading'>Find the experts
									<span className="position-relative z-index-9 d-block text-uppercase">to fix your electronics.
									</span>
								</h3>
								<div className="col-xl-9">
									<div
										className="bg-blur bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-4 mt-5">
										{/* <!-- Form START --> */}
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-12">
													<div className="input-group mb-0">
														<div >
														</div>
														<input className="form-control rounded-start"
															ref={inputRef}
															type="text"
															placeholder="What are you looking for.."
															name="query"
															onKeyUp={handleKeyUp}
															value={search.query}
															onChange={HandleSearch}
														/>
														{
															search.query === '' ? (<button className='btn btn-danger' onClick={displayToast} type='button' >
																<i className="fa fa-search" aria-hidden="true"></i>
															</button>) : (
																<Link to={`/search-results?query=${search.query}`} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
																	<button className='btn btn-danger' type='button' >
																		<i className="fa fa-search" aria-hidden="true"></i>
																	</button>
																</Link>
															)
														}
													</div>
												</div>
											</div>
											{/* Display response data */}
											{
												isOpen && (
													<div className="row justify-content-center poi_ab">
														<div className="col-lg-12">
															<ul className="list-group" ref={listRef} style={{ zIndex: '-99999' }}>
																{responseData.map((item, index) => (
																	<Link key={index} className='text-decoration-none text-dark' to={`${item.redirect}`} onKeyUp={(event) => handleKeyUp(event, item.redirect)} onClick={scrollToTop}><li className="list-group-item py-0">
																		<span>{item.name}</span>
																	</li></Link>
																))}
															</ul>
														</div>
													</div>
												)
											}
										</div>
										{/* <!-- Form END --> */}
									</div>
								</div>
								<div className='col-xl-3'></div>
							</div>
							<div className="col-xl-4 desktopview-title">
								{/* <img src={sliderLeft} className="card-img-top" alt='Card image' /> */}
								<AnimatePresence>
									<motion.img
										key="image" // Key is required for AnimatePresence to work
										src={sliderLeft}
										className="card-img-top"
										alt='Card image'
										initial="hidden"
										animate="visible"
										variants={variants}
										transition={{ duration: 1 }}
									/>
								</AnimatePresence>
							</div>
							{/* <!-- Title desktopview end--> */}

							{/* <!-- Title Mobileview start--> */}
							<div className="col-xl-8 align-self-center mobileview-title">
								<AnimatePresence>
									<motion.img
										key="image" // Key is required for AnimatePresence to work
										src={sliderLeft}
										className="card-img-top"
										alt='Card image'
										initial="hidden"
										animate="visible"
										variants={variants}
										transition={{ duration: 1 }}
									/>
								</AnimatePresence>

								<div className="col-xl-9">
									<div
										className="bg-blur bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-4 mt-5">
										{/* <!-- Form START --> */}
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-12">
													<div className="input-group mb-0">
														<div >
														</div>
														<input className="form-control rounded-start"
															ref={inputRef}
															type="text"
															placeholder="What are you looking for.."
															name="query"
															value={search.query}
															onChange={HandleSearch}
														/>
														{
															search.query === '' ? (<button className='btn btn-danger' onClick={displayToast} type='button' >
																<i className="fa fa-search" aria-hidden="true"></i>
															</button>) : (
																<Link to={`/search-results?query=${search.query}`}>
																	<button className='btn btn-danger' type='button' >
																		<i className="fa fa-search" aria-hidden="true"></i>
																	</button>
																</Link>
															)
														}
													</div>
												</div>
											</div>
											{/* Display response data */}
											{
												isOpen && (
													<div className="row justify-content-center poi_ab">
														<div className="col-lg-12">
															<ul className="list-group" ref={listRef}>
																{responseData.map((item, index) => (
																	<Link key={index} className='text-decoration-none text-dark' to={`${item.redirect}`} onClick={scrollToTop}><li className="list-group-item py-0">
																		<span>{item.name}</span>
																	</li></Link>
																))}
															</ul>
														</div>
													</div>
												)
											}
										</div>
										{/* <!-- Form END --> */}
									</div>
								</div>
								<div className='col-xl-3'></div>
							</div>
							<div className="col-xl-4 mobileview-title">
								{/* <img src={sliderLeft} className="card-img-top" alt='Card image' /> */}
								<h3 className="display-6 text-white my-4 text-uppercase" id='heading'>Find the experts
									<span className="">to fix your electronics.
									</span>
								</h3>
							</div>
							{/* <!-- Title Mobileview end--> */}

							{/* <!-- Search START -->
					<!-- Search END --> */}
						</div>
						{/* <!-- Row END --> */}
					</div>
				</section>
				{/* <!-- =======================
Main banner END -->
		<!-- =======================
Category START --> */}
				<section>
					<div className="container">
						{/* <!-- Title --> */}
						<div className="row mb-4 brud">
							<div className="card card-body border" id='card-body'>
								<img src={tree} alt="" width={24} height={20} id='card-body-img' />
								<div>
									<h4 className="card-title mb-0 text-uppercase" id='services'>Our Services</h4>
								</div>
							</div>
						</div>
						<div className="row g-4 g-md-5">
							{
								routes.slice(0, 6).map(({ name, image, services }, index) => {
									return <ServicesDisplay key={index} name={name} image={image} services={services} />;
								})
							}
						</div>
						{/* <!-- Row END --> */}
					</div>
				</section>
				<section className="position-relative py-1 py-lg-1"
					style={{
						backgroundImage: `url(${before})`,
						backgroundPosition: "center left",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat"
					}}>
					{/* <!-- Background dark overlay --> */}
					<div className="bg-overlay  opacity-9"></div>
					<div className="container z-index-9 position-relative">
						<div className="row py-sm-5">
							{/* <!-- Title --> */}
							<div className="col-xl-6 m-auto" id='heading2'>
								<div className="row mb-4 brud m-0">
									<div className="card card-body border" id='card-body'>
										<img src={tree} alt="" width={24} height={20} id='card-body-img' />
										<div>
											<h5 className="card-title mb-0 text-uppercase" id='aboutus' style={{ width: "max-content" }}>WHY CHOOSE FIXI </h5>
										</div>
									</div>
								</div>

								<p className="text-white fw-normal mb-3 paragraph-text">Fixi is your reliable partner for a wide range of home repair and maintenance services, including AC repairs, fridge repairs, geyser repairs, TV repairs, water proofing, and pest control. Our team of experienced professionals ensures top-quality service, quick response times, and customer satisfaction.</p>
								<ul className="d-grid mb-4 p-0" id='list-item-three'>
									<li className="list-inline-item my-2 list-item-three-sub"> <i
										className="bi bi-patch-check-fill text-danger me-2"></i>Expert Technicians </li>
									<li className="list-inline-item my-2 list-item-three-sub"> <i
										className="bi bi-patch-check-fill text-danger me-2"></i>Affordable Pricing </li>
									<li className="list-inline-item my-2 list-item-three-sub"> <i
										className="bi bi-patch-check-fill text-danger me-2"></i>Customer Satisfaction</li>
								</ul>
							</div>
							<div className="col-xl-6" ref={ref}>
								<motion.img
									src={serviceRight}
									alt=""
									initial={{ opacity: 0, x: -100 }}
									animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
									transition={{ duration: 1 }}
								/>
							</div>
						</div>
						{/* <!-- Row END --> */}
					</div>
				</section>
				<section className="position-relative py-1 py-lg-1"
					style={{
						backgroundImage: `url(${twenty})`,
						backgroundPosition: "center bottom",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat"
					}}
				>
					{/* <!-- Background dark overlay --> */}
					<div className="bg-overlay opacity-10"></div>
					<div className="container z-index-9 position-relative">
						<div className="row py-sm-5">
							{/* <!-- Title --> */}
							<div className="col-xl-6 m-auto" id='heading3'>
								<div className="row mb-4 brud m-0 card-one" id='we-help-you'>
									<div className="card card-body border" id='card-body'>
										<img src={tree} alt="" width={24} height={20} id='card-body-img' />
										<div>
											<h5 className="card-title mb-0 text-uppercase" style={{ width: " max-content" }}>We help fix your electronics</h5>
										</div>
									</div>
								</div>
								<h6 className="text-white fw-normal mb-3 paragraph-text">Your One-Stop Solution for Home Repairs and Services</h6>
								<div className="accordion accordion-icon accordion-bg-light" id="accordionFaq">
									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-1">
											<button className="accordion-button fw-bold rounded collapsed pe-5" type="button"
												data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true"
												aria-controls="collapse-1">
												What qualifications do Fixi technicians have?
											</button>
										</h6>
										{/* <!-- Body --> */}
										<div id="collapse-1" className="accordion-collapse collapse show"
											aria-labelledby="heading-1" data-bs-parent="#accordionFaq">
											<div className="accordion-body mt-3 pb-0 paragraph-text">
												Our technicians are certified professionals with extensive training and experience in their respective fields. They undergo regular training to stay updated with the latest repair techniques and industry standards.
											</div>
										</div>
									</div>
									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-2">
											<button className="accordion-button fw-bold rounded collapsed pe-5" type="button"
												data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false"
												aria-controls="collapse-2">
												How quickly can I expect service after booking a repair?
											</button>
										</h6>
										{/* <!-- Body --> */}
										<div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2"
											data-bs-parent="#accordionFaq">
											<div className="accordion-body mt-3 pb-0 paragraph-text">
												We strive to provide prompt service and typically respond within 24 hours of your booking. In emergencies, we prioritize urgent repairs to ensure your home is functional and comfortable as soon as possible.
											</div>
										</div>
									</div>
									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-3">
											<button className="accordion-button fw-bold collapsed rounded pe-5" type="button"
												data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false"
												aria-controls="collapse-3">
												What if I'm not satisfied with the service?
											</button>
										</h6>
										{/* <!-- Body --> */}
										<div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3"
											data-bs-parent="#accordionFaq">
											<div className="accordion-body mt-3 pb-0 paragraph-text">
												Your satisfaction is our top priority. If you're not completely satisfied with our service, we offer a guarantee to address and resolve any issues promptly. Our customer support team is available to ensure you receive the best possible experience with Fixi.
											</div>
										</div>
									</div>


								</div>
							</div>
							<div className="col-xl-6">
								<img src={servbello} className="" alt="" style={{ width: "-webkit-fill-available" }} />
							</div>
						</div>
						{/* <!-- Row END --> */}
					</div>
				</section>
				{/* <!-- =======================
Listing END -->
		<!-- =======================
Offer action box START -->
		<!-- =======================
Offer action box END -->
		<!-- =======================
Action box START --> */}
				<section className="my-md-0 py-9" style={{
					backgroundImage: `url(${sectionfive})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover'
				}}>
					<div className="container">
						<div className="row py-lg-7">
							<div className="col-md-5 ">
								<div>
									<div className="card shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">
										{/* <!-- Card header --> */}
										<div className="card-header border-bottom p-3 p-sm-4">
											<h5 className="card-title mb-0 text-center">Appointment</h5>
										</div>
										{/* <!-- Card body START --> */}
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
										{/* <!-- Card-body END --> */}
									</div>
								</div>
							</div>
							<div className="col-md-7  form_text">
								<div id='heading4'>
									<div className="row mb-4 brud m-0">
										<div className="card card-body border" id='providing'>
											<img src={tree} alt="" width={24} height={20} id='card-body-img' />
											<div>
												<h5 className="card-title mb-0 text-center text-uppercase" style={{ width: "max-content" }} id='providing-sub'>Professional & Quick <br /> Home Repair Services</h5>
											</div>
										</div>
									</div>

									<p className="color-white mt-2">At Fixi, we provide professional and quick home repair services to ensure your household runs smoothly. Whether you need AC repairs, fridge repairs, geyser repairs, TV repairs, water proofing, or pest control, our expert team is ready to assist you with top-notch support.</p>
								</div>
								<div className="row">
									<div className="mt-6">
										<div className="row g-2 g-md-3 align-items-center position-relative">
											{/* <!-- Image --> */}
											<div className="col-md-2 trained-workers">
												<img src={quote2} alt="" />
											</div>
											{/* <!-- Content --> */}
											<div className="col-md-10 trained-workers">
												<div className="p-2 p-md-0">
													<h5 className="mb-1 color-white">Reliable Support</h5>
													<span>Our dedicated customer support team is always ready to assist you, ensuring a seamless and hassle-free service experience from start to finish.</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="mt-5">
										<div className="row g-2 g-md-3 align-items-center position-relative">
											{/* <!-- Image --> */}
											<div className="col-md-2 trained-workers">
												<img src={quote2} alt="" />
											</div>
											{/* <!-- Content --> */}
											<div className="col-md-10 trained-workers">
												<div className="p-2 p-md-0">
													<h5 className="mb-1 color-white">Fast and Efficient</h5>
													<span>We pride ourselves on delivering fast and efficient services, minimizing downtime and getting your home back to normal in no time.</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section
					style={{
						backgroundImage: `url(${footerbg})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat"
					}} id='contactus'>
					<div className="container">
						<div className="row footer-main">
							<div
								className="card  rounded-3 h-100" style={{ backgroundImage: `url(${crd})` }}>
								<div className="card-body">
									<div className="row">
										<div className="col-md-4 col-xxl-4">
											<div className="d-flex rounded-3 h-100 p-4">
												<h3><i className="fa-solid fa-phone bg-body p-2 rounded-2"></i></h3>
												<div className="ms-3">
													<h5 className="text-white">Call Us Anytime</h5>
													<p className="mb-0 text-white">+91 732823 73824</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-xxl-4">
											<div className="d-flex rounded-3 h-100 p-4">
												<h3><i className="fa-solid fa-envelope bg-body p-2 rounded-2"></i></h3>
												<div className="ms-3">
													<h5>Send Mail</h5>
													<p className="mb-0 text-white">fix@fixi.in</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-xxl-4">
											<div className="d-flex rounded-3 h-100 p-4">
												<h3><i className="fa-solid fa-location-dot bg-body p-2 rounded-2"></i></h3>
												<div className="ms-3">
													<h5>Our Address</h5>
													<p className="mb-0 text-white">Gachibowli , Hyderabad</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main >
			{/* <!-- **************** MAIN CONTENT END **************** --> */}
		</>
	)
}

export default Fixi