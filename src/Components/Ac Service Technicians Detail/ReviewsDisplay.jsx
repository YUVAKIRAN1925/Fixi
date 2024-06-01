import React from 'react'
import StarRating from '../Star Rating/StarRating'

const ReviewsDisplay = ({ reviewer_image, rating, reviewer_name, review_para }) => {
    return (
        <>
            <div
                className="card mt-3 mb-3"
                style={{ boxShadow: "0px 32px 64px 0px #1018281A" }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="d-flex">
                                <img
                                    src={reviewer_image}
                                    alt=""
                                    style={{ width: "80px", height: "80px" }}
                                    className="mt-2" />
                                <div className="ms-2">
                                    <ul className="list-inline mb-3">
                                        <li className="list-inline-item me-0">
                                            <StarRating rating={rating} />
                                        </li>
                                    </ul>
                                    <h6>{reviewer_name}
                                        <i className="bi bi-check-all text-success"></i>
                                    </h6>
                                    {/* <p>{review_date}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            {/* <h6>{review_title}</h6> */}
                            <p>{review_para}</p>
                        </div>
                        <div className="col-lg-2">
                            <span>Helpful?
                                <span className="text-danger mx-2">Yes</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewsDisplay