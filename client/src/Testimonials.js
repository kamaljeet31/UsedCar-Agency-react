import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <>
      <section className='quotes py-5 my-5' id='quotes'>
        <div className='container'>
          {/* <!-- section title --> */}
          <div className='row mb-5'>
            <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
              <h1 className='font-weight-bold align-self-center mx-1'>
                what they
              </h1>
              <h1 className='section-title--special mx-1'>say</h1>
            </div>
          </div>
          {/* <!-- end of section title --> */}
          <div className='row'>
            {/* <!-- single card --> */}
            <div className='col-10 mx-auto my-5 col-md-6 col-lg-4'>
              <div className='card'>
                <img
                  src='img/car-american-1.jpeg'
                  alt='car'
                  className='card-img-top'
                />
                {/* <!-- card body --> */}
                <div className='card-body text-center customer-card-body'>
                  <img
                    src='img/customer-1.jpg'
                    className='rounded-circle customer-img'
                    alt='customer img'
                  />
                  <div className='card-title'>
                    <h5 className='customer-name text-capitalize'>
                      customer name
                    </h5>
                  </div>
                  <h6 className='customer-job text-capitalize text-dark'>
                    customer job
                  </h6>
                  <p className='customer-quote text-centre mx-auto text-dark'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, praesentium?
                  </p>
                  <span className='customer-icon'>
                    <i className='fas fa-quote-left'>
                      <FaQuoteLeft />
                    </i>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- end of single card --> */}
            {/* <!-- single card --> */}
            <div className='col-10 mx-auto my-5 col-md-6 col-lg-4'>
              <div className='card'>
                <img
                  src='img/car-american-2.jpeg'
                  alt='car'
                  className='card-img-top'
                />
                {/* <!-- card body --> */}
                <div className='card-body text-center customer-card-body'>
                  <img
                    src='img/customer-2.jpg'
                    className='rounded-circle customer-img'
                    alt='customer img'
                  />
                  <div className='card-title'>
                    <h5 className='customer-name text-capitalize'>
                      customer name
                    </h5>
                  </div>
                  <h6 className='customer-job text-capitalize text-dark'>
                    customer job
                  </h6>
                  <p className='customer-quote text-centre mx-auto text-dark'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, praesentium?
                  </p>
                  <span className='customer-icon'>
                    <i className='fas fa-quote-left'>
                      <FaQuoteLeft />
                    </i>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- end of single card --> */}
            {/* <!-- single card --> */}
            <div className='col-10 mx-auto my-5 col-md-6 col-lg-4'>
              <div className='card'>
                <img
                  src='img/car-american-3.jpeg'
                  alt='car'
                  className='card-img-top'
                />
                {/* <!-- card body --> */}
                <div className='card-body text-center customer-card-body'>
                  <img
                    src='img/customer-3.jpg'
                    className='rounded-circle customer-img'
                    alt='customer img'
                  />
                  <div className='card-title'>
                    <h5 className='customer-name text-capitalize'>
                      customer name
                    </h5>
                  </div>
                  <h6 className='customer-job text-capitalize text-dark'>
                    customer job
                  </h6>
                  <p className='customer-quote text-centre mx-auto text-dark'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, praesentium?
                  </p>
                  <span className='customer-icon'>
                    <i className='fas fa-quote-left'>
                      <FaQuoteLeft />
                    </i>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- end of single card --> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
