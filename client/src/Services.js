import React from 'react'
import video from '../src/video/videoBcg.mp4'

import { FaCogs, FaCarBattery, FaCarCrash } from 'react-icons/fa'
const Services = () => {
  return (
    <>
      <div className='container'>
        {/* <!-- section title --> */}
        <div className='row my-5'>
          <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
            <h1 className='font-weight-bold align-self-center mx-1'>our</h1>
            <h1 className='section-title--special mx-1'>services</h1>
          </div>
        </div>
        {/* <!-- end of section title --> */}
      </div>
      <section
        className='services py-5 d-flex align-items-center'
        id='services'
      >
        {/* <!-- video container --> */}
        <div className='video-container'>
          <video className='video-item' autoPlay loop muted>
            <source src={video} type='video/mp4' />
            Your browser does not support video tag
          </video>
        </div>
        {/* <!-- end of video container --> */}
        {/* <!-- video overlay --> */}
        <div className='video-overlay'></div>
        {/* <!-- end of video overlay --> */}
        {/* <!-- service content --> */}
        <div className='container py-5'>
          <div className='row my-3'>
            {/* <!-- col --> */}
            <div className='col-8 mx-auto col-lg-6 col-md-4 my-3'>
              <div className='service py-5 pl-4'>
                <span className='service-icon'>
                  <i className='fas fa-cogs'>
                    <FaCogs />
                  </i>
                </span>
                <h6 className='text-capitalize service-title'>vehicle</h6>
                <h5 className='text-uppercase font-weight-bold'>repair</h5>
              </div>
            </div>
            {/* <!-- end col --> */}
            {/* <!-- col --> */}
            <div className='col-8 mx-auto col-lg-6 col-md-4 my-3'>
              <div className='service py-5 pl-4'>
                <span className='service-icon'>
                  <i className='fas fa-car-battery'>
                    <FaCarBattery />
                  </i>
                </span>
                <h6 className='text-capitalize service-title'>battery</h6>
                <h5 className='text-uppercase font-weight-bold'>replacement</h5>
              </div>
            </div>
            {/* <!-- end col --> */}
            {/* <!-- col --> */}
            <div className='col-8 mx-auto col-lg-6 col-md-4 my-3'>
              <div className='service py-5 pl-4'>
                <span className='service-icon'>
                  <i className='fas fa-car-crash'>
                    <FaCarCrash />
                  </i>
                </span>
                <h6 className='text-capitalize service-title'>roadside</h6>
                <h5 className='text-uppercase font-weight-bold'>assistance</h5>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
