import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import tree from '../assets/images/tree.svg'
import { servicesUrl } from '../API/Api';
import axios from 'axios';
import ServicesDisplay from '../AC Service Technicians/ServicesDisplay';
import { Helmet } from 'react-helmet';

const FindExperts = () => {
    const [findExperts, setFindExperts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(servicesUrl);
                setFindExperts(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
             <Helmet><title>Find Experts</title></Helmet>
            <div className="container py-5" style={{marginTop:'50px',marginBottom:'50px'}}>
                <div className="row mb-4 brud pb-5">
                    <div className="card card-body border" id='card-body'>
                        <img src={tree} alt="" width={24} height={20} id='card-body-img' />
                        <div>
                            <h4 className="card-title mb-0 text-uppercase" id='services'>Our Services</h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4 g-md-5">
                    {
                        findExperts.map(({ name, image, services }, index) => {
                            return <ServicesDisplay key={index} name={name} image={image} services={services} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FindExperts