import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { randomCompaniesUrl, reviewsUrl } from '../API/Api'
import { detailUrl } from '../API/Api'
import ReviewsDisplay from './ReviewsDisplay'
import CompanyDetails from './CompanyDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import RelatedComapaniesScroll from './RelatedCompaniesScroll'
import Loader from '../Loader/Loader'
import { Nav } from 'react-bootstrap'

const REVIEWS_PER_PAGE = 5;

const AcServiceTechniciansDetail = () => {
  const [reviewsData, setReviewsData] = useState([])
  const [companyDetails, setCompanyDetails] = useState({})
  const [relatedCompanies, setRelatedCompanies] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // For highlighting current page number
  const { companyName, serviceName } = useParams()
  const navigate = useNavigate()
  const isReviewsDataArray = Array.isArray(reviewsData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    if (companyDetails.id) {
      fetchReviews(currentPage);
    }
  }, [companyDetails, currentPage]);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${detailUrl}${companyName}`);
        if (res.data.data && Object.keys(res.data.data)?.length > 0) {
          setCompanyDetails(res.data.data);
          setLoading(false)
        } else {
          navigate('/notfound');
        }
      } catch (error) {
        setLoading(false)
      }
    };
    fetchCompanyDetails();
  }, [companyName, navigate]);

  const fetchReviews = (page) => {
    axios.get(`${reviewsUrl}${companyDetails.id}?page=${page}`)
      .then(res => {
        setReviewsData(Array.isArray(res.data.data) ? res.data.data : []);
        const totalReviews = res.data.count || 0;
        setTotalPages(Math.ceil(totalReviews / REVIEWS_PER_PAGE));
      })
      .catch(error => {
      });
  };
  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchRelatedCompanies = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${randomCompaniesUrl}${serviceName}/${companyName}`);
        setRelatedCompanies(res.data.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    };
    fetchRelatedCompanies();
  }, [serviceName, companyName]);

  if (loading) {
    return <Loader />;
  }

  const renderPagination = () => {
    let pages = [];
    const startPage = Math.floor((currentPage - 1) / 3) * 3 + 1;
    const endPage = Math.min(startPage + 2, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <ul className="pagination mx-5">
        {currentPage > 1 && (
          <li className="page-item" onClick={handleClickPrevious}>
            <Nav.Link href='#reviews' className="page-link">Previous</Nav.Link>
          </li>
        )}
        {pages.map(page => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
            onClick={() => handleClickPage(page)}
          >
            <Nav.Link href='#reviews' className="page-link">{page}</Nav.Link>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item" onClick={handleClickNext}>
            <Nav.Link href='#reviews' className="page-link">Next</Nav.Link>
          </li>
        )}
      </ul>
    );
  };

  const capitalizedCompanyName = companyName
  .split("-") // Splitting by hyphen assuming it separates words
  .map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ) // Capitalizing first letter of each word
  .join(" ");

  return (
    <>
      <Helmet>
        <title>{capitalizedCompanyName}</title>
      </Helmet>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main >
        {/* <!-- ======================= Main banner START -->
                <!-- ======================= Search START --> */}
        {Object.keys(companyDetails)?.length > 0 && (

          <CompanyDetails
            company_name={companyDetails?.company_name}
            mobile_number={companyDetails?.mobile_number}
            image1={companyDetails?.image1}
            image2={companyDetails?.image2}
            image3={companyDetails?.image3}
            image4={companyDetails?.image4}
            image5={companyDetails?.image5}
            image6={companyDetails?.image6}
            slug={companyDetails?.slug}
            service_name={companyDetails?.service_name}
            description_image={companyDetails?.description_image}
            long_description1={companyDetails.long_description1}
            long_description2={companyDetails.long_description2}
          />
        )}
        {/* <CompanyDetails /> */}
        <div className="container mt-3">
          <div className="col-lg">
            <h4 style={{ fontWeight: "500" }}>Reviews</h4>
          </div>
          {
            !isReviewsDataArray || reviewsData.length === 0 ? (
              <p>No reviews</p>
            ) : (
              reviewsData.map(({ reviewer_image, rating, reviewer_name, review_date, review_title, review_para }, index) => {
                return <ReviewsDisplay key={index} reviewer_image={reviewer_image} rating={rating} reviewer_name={reviewer_name} review_date={review_date} review_title={review_title} review_para={review_para} />
              })
            )
          }
        </div>
        {/* Reviews pagination start */}
        <nav aria-label="Page navigation example">
          <div className="d-flex justify-content-center align-items-center">
            {renderPagination()}
          </div>
        </nav>
        {/* Reviews pagination end */}
        {/* <!-- ======================= Titles END -->
                <!-- ======================= Cab list START --> */}
        {/* Related Companies start */}
        <div className="container mt-4" style={{ overflow: 'hidden' }}>
          <h4 className='fw-medium'>Related Companies</h4>
          <div className="d-flex mt-3">
            {relatedCompanies.length > 0 && (
              <RelatedComapaniesScroll companies={relatedCompanies} />
            )}
          </div>
        </div>
        {/* Related Comapnies End */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  )
}

export default AcServiceTechniciansDetail