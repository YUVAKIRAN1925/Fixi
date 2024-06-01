import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ServicesCompanies from "./ServicesCompanies";
import { advertisingUrl, searchResultsUrl } from "../API/Api";
import { Helmet } from "react-helmet";
import Loader from "../Loader/Loader";
import Carousel from "../Carousel/Carousel";


const SearchresultsCompanies = () => {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const findQuery = searchParams.get('query'); // Get pre-populated query from URL
  const [responseData, setResponseData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null); // State to store the next page URL
  const [loading, setLoading] = useState(true);
  const [advertising, setAdvertising] = useState({});

  const fetchData = async () => {
    try {
      const queryParams = { query: findQuery || query };
      const response = await axios.get(searchResultsUrl, { params: queryParams });
      setResponseData(response.data.data || []);
      setNextPageUrl(response.data.next);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAdvertisement = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${advertisingUrl}`);
        setAdvertising(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchAdvertisement();
  }, [])

  if (loading) {
    return <Loader />;
  }

  const handleClickLoadMore = async () => {
    if (!nextPageUrl) return; // Prevent unnecessary requests if no next page
    try {
      const response = await axios.get(nextPageUrl);
      setResponseData(prevCompanies => [...prevCompanies, ...response.data.data]); // Concatenate new data
      setNextPageUrl(response.data.next); // Update next page URL if available
    } catch (error) {
    }
  };

  return (
    <>
      <Helmet><title>Services</title></Helmet>
      <section className="pt-0" id="cards-section-main" style={{marginTop:'50px'}}>
        <div className="container mb-5">
          <div className="row">
            {
              Object.keys(advertising)?.length > 0 && (<Carousel advertising={advertising}/>)
            }
          </div>
        </div>
        <div className="container" data-sticky-container="data-sticky-container">
          <div className="row">
            <div className="col-xl col-xxl">
              <div className="vstack gap-4">
                {/* <!-- Alert box START --> */}
                {/* <!-- Alert box END --> */}
                {
                  responseData.length === 0 ? <div className="container pb-8 pt-5">
                    <h1 className="text-center">No Data Found</h1>
                    <p className="text-center">We couldn't find any data matching your criteria. Please try again with different search terms.</p>
                    {/* <a href="#">Go Back</a> */}
                  </div> : (
                    responseData.map((company, index) => (
                      <ServicesCompanies key={index} company={company} />
                    ))
                  )
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
    </>
  );
};

export default SearchresultsCompanies;