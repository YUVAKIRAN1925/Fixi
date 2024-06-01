import React from 'react'
import { Link } from 'react-router-dom'

const ServicesDisplay = ({ name, image ,services}) => {
    const handleClick = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }
    return (
        <>
            {/* <!-- Card item START --> */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                <div className="card bg-transparent text-center p-1 h-100 align-items-center">
                    {/* <!-- Image --> */}
                    <Link to={`/${services}`}><img src={image} className="w10" alt="" onClick={handleClick}/></Link>
                    <div className="card-body p-0 pt-3">
                        <p className='card-title' style={name === 'Pest Control Services' ? { fontSize: "15px" } : {}}>{name}</p>
                    </div>
                </div>
            </div>
            {/* <!-- Card item END --> */}
        </>
    )
}

export default ServicesDisplay