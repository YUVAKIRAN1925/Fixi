import React, { useEffect, useState } from 'react'
import acmain from '../assets/images/ac-main-pic.png'
import axios from 'axios'
import { bannerUrl, companiesUrl } from '../API/Api'
import AcServiceCompanies from './AcServiceCompanies'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../Loader/Loader'

const AcServiceTechnicians = () => {
    const [fetchedCompanies, setFetchedCompanies] = useState([]);
    const [banner, setBanner] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [count , setCount] = useState(0);
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${companiesUrl}${slug}`);
                if (res.data.data && res.data.data.length > 0) {
                    setFetchedCompanies(res.data.data);
                    setCount(res.data.count)
                    setNextPageUrl(res.data.next);
                    setLoading(false);
                } else {
                    navigate('/notfound');
                }
            } catch (error) {
                navigate('/notfound');
                setLoading(false);
            }
        };
        fetchCompanies();
    }, [navigate, slug]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get(`${bannerUrl}${slug}`);
                setBanner(res.data.data);
            } catch (error) {
            }
        };

        fetchBanner();
    }, [slug]);

    if (loading) {
		return <Loader />;
	}

    const handleClickLoadMore = async () => {
        if (!nextPageUrl) return;
        try {
            const response = await axios.get(nextPageUrl);
            setFetchedCompanies(prevCompanies => [...prevCompanies, ...response.data.data]); // Concatenate new data
            setNextPageUrl(response.data.next); // Update next page URL if available
        } catch (error) {
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const capitalizedServiceName = slug
        .split("-") // Splitting by hyphen assuming it separates words
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ) // Capitalizing first letter of each word
        .join(" ");

    return (
        <>
            <Helmet>
                <title>{capitalizedServiceName}</title>
            </Helmet>
            {/* <!-- **************** MAIN CONTENT START **************** --> */}
            <main>
                {/* <!-- ======================= Main banner START -->
                <!-- ======================= Search START --> */}
                <section className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
                                {fetchedCompanies.length > 0 && (
                                    <h2 id='verified-prof'>Top Verified Professional {fetchedCompanies[0].service_name} </h2>
                                )}
                                <h4 id='verified'> Technicians in Hyderabad</h4>
                                <span className="badge text-bg-danger rounded-4 p-2">{count} Technicians Listed</span>
                            </div>

                            <div className="col-lg-5">
                                <img src={acmain} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ======================= Search START -->
                <!-- ======================= Titles START --> */}
                <section className="pt-6">
                    <div className="container position-relative ">
                        {/* <!-- Title and button START --> */}
                        <div className="row ">
                            <div className="col-12 ">
                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                    {/* <!-- Title --> */}
                                    <div className="mb-2 mb-sm-0">
                                        {/* <!-- <h1 className="fs-3 mb-2">5 Cabs Available</h1> -->
                                        <!-- Divider --> */}
                                        <ul className="nav h6 mb-0">
                                            <Link to={'/'}><li className="nav-item" onClick={handleClick}>Home</li></Link>
                                            <i className="bi bi-chevron-right fw-bold"></i>
                                            {fetchedCompanies.length > 0 && (
                                                <li className="nav-item text-danger">{fetchedCompanies[0].service_name}</li>
                                            )}
                                            {/* <!-- <li className="nav-item">2 Adults</li> --> */}
                                        </ul>
                                    </div>
                                    {/* <!-- Offcanvas Button --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Title and button END --> */}
                    </div>
                </section>
                {/* <!-- ======================= Titles END -->
                <!-- ======================= Cab list START --> */}
                <section className="pt-0">
                    <div className="container" data-sticky-container="data-sticky-container">
                        <div className="row">
                            {/* <!-- Left sidebar START --> */}
                            <aside className="col-xl-4 col-xxl-3 banner-main">
                                <div data-sticky="data-sticky" data-margin-top="80" data-sticky-for="1199">
                                    {/* <!-- Responsive offcanvas body START --> */}
                                    {
                                        banner.map(({ image }, index) => {
                                            return <img key={index} src={image} alt="" className='rounded' />
                                        })
                                    }
                                    {/* <!-- Buttons --> */}
                                </div>
                                {/* <!-- Responsive offcanvas body END --> */}
                            </aside>
                            <div className="col-xl-8 col-xxl-9">
                                <div className="vstack gap-4">
                                    {/* <!-- Alert box START --> */}
                                    {/* <!-- Alert box END --> */}
                                    {
                                        fetchedCompanies.map((company, index) => {
                                            return <AcServiceCompanies key={index} company={company} />
                                        })
                                    }
                                    {/* <!-- Pagination -->  */}
                                    {
                                        nextPageUrl && (
                                            <nav className="d-flex justify-content-center" aria-label="navigation">
                                                <button className="btn btn-outline-success w-100 rounded-4" onClick={handleClickLoadMore}>Load More</button>
                                            </nav>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <!-- Left sidebar END -->
                     <!-- Main content START --> */}
                        {/* <!-- Main content END --> */}
                    </div>
                    {/* <!-- Row END --> */}
                    {/* </div> */}
                </section >
            </main >
            {/* <!-- **************** MAIN CONTENT END **************** --> */}
        </>
    )
}

export default AcServiceTechnicians