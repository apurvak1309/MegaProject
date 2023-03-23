import logo from './img/logo.png';
import './App.css';
import "./css/bootstrap.min.css"
import "./css/style.css";
import "./css/carousel.css";
import{Route, Routes ,Switch} from 'react-router-dom';
import { Login } from "./Login";
import  { Register } from "./Register";
import LoginBar from '../src/loginbar/LoginBar';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Detail_Docter } from './Detail_Docter';
import { useState } from 'react';

function App() {
  const i = require('./img/medicine.png')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  return (
  <div className='start'>
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <img src={logo} className="logoImg"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="price.html" className="nav-item nav-link">Pricing</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Welcome To MediChain</h5>
              <h1 className="display-1 text-white mb-md-4">India's Best Drug Tracking Portal</h1>
            </div>
          </div>
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<LoginBar/>} />
        <Route path="/registers/docter" element={<Login name = {"Docter"} />} />
        <Route path="/registers/patient" element={<Login  name = {"Patient"}/>} />
        <Route path="/registers/pharmasist" element={<Login name = {"Pharmasist"}/>} />
        <Route path="/login/docter" element={<Detail_Docter/>} />
      </Routes>
      {/* <div className="carousel">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000}>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Most psychotropic medications with the exception of anxiolytics, stimulants and hypnotics are not addictive. Addictive behaviour is defined by intense urges, obsessions, loss of control and behaviour to satisfy the addiction.</p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Because sleeping aids or pain medication offer quick relief, many people think psychotropic medication will act the same way. Instead, it can take 4 to 6 weeks or more at the right dosage to determine if a medication is alleviating symptoms.</p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Some medications can have long term (sometimes debilitating) side effects, such as weight gain, fatigue, loss of desire, and persistent dry mouth. </p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Failure to commit to a prescription plan is a major reason why medications do not work as intended. When medications are not used as prescribed, adequate drug blood levels are not achieved</p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Everyone's body is unique, this includes how our brains are wired. So medication will work differently in each person. </p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>The phrase “psychotropic drugs” is a technical term for psychiatric medicines that alter chemical levels in the brain which impact mood and behavior.</p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>Different drugs have different effects on people. That said, certain drugs do tend to cause more allergic reactions than others. </p>
          </div>
          </Item>
          <Item>
          <div className='slider1'>
          <div className='sliderImg'><img src={i} /></div>
          <p className='sliderPara'>A drug with high risk of adverse effects may be administered only by a healthcare provider.</p>
          </div>
          </Item>
        </Carousel>
      </div> */}
      
      <div className="container-fluid bg-dark text-light mt-5 py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+012 345 67890</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Latest Blog</a>
                  <a className="text-light" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                  <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Latest Blog</a>
                  <a className="text-light" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
              <div className='image1'>
                        <img src={i}/>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">© <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        
  </div>
    
  );
}

export default App;
