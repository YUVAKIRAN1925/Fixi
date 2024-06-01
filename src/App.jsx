import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AcServiceTechnicians from "./Components/AC Service Technicians/AcServiceTechnicians";
import AcServiceTechniciansDetail from "./Components/Ac Service Technicians Detail/AcServiceTechniciansDetail";
import Fixi from "./Components/Fixi/Fixi";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Helmet } from 'react-helmet';
import SearchresultsCompanies from './Components/Search Details/SearchResultsCompanies';
import NotFound from './Components/Not Found/NotFound';
import HowItWorks from './Components/How It Works/HowItWorks';
import ContactUs from './Components/Contact Us/ContactUs';
import AboutUs from './Components/About Us/AboutUs';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import FindExperts from './Components/Find Experts/FindExperts';

function App() {
  useEffect(() => {
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  },[])
  
  return (
    <>
    <Helmet>
      <title>Fixi</title>
    </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/notfound" element={<NotFound />} />
          <Route exact path="/" element={<Fixi />} />
          <Route exact path='/:slug' element={<AcServiceTechnicians />} />
          <Route exact path='/:serviceName/:companyName' element={<AcServiceTechniciansDetail />} />
          <Route exact path='/search-results' element={<SearchresultsCompanies />}/>
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/find-experts' element={<FindExperts />}/>
          <Route exact path='/contact-us' element={<ContactUs />}/>
          <Route exact path='/partners' element={<HowItWorks />}/>
          <Route exact path='/terms-and-conditions' element={<TermsAndConditions />}/>
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
