import React from 'react'
import { FaCar, FaComments, FaPeopleCarry, FaDollarSign } from 'react-icons/fa'
const Facilities = () => {
  return (
    <>
      <section className='skills py-5' id='skills'>
        <div className='container'>
          {/* <!-- section title --> */}
          <div className='row mb-5'>
            <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
              <h1 className='font-weight-bold align-self-center mx-1'>
                why choose
              </h1>
              <h1 className='section-title--special mx-1'>car dealer</h1>
            </div>
          </div>
          {/* <!-- end of section title --> */}
          <div className='row'>
            {/* <!-- single skill --> */}
            <div className='col-sm-6 col-lg-3 text-center my-3'>
              <a href='/'>
                <i>
                  <FaCar className='skills-icon p-3 rounded-circle' />
                </i>
              </a>
              <h6 className='text-uppercase font-weight-bold my-3'>
                all brands
              </h6>
              <div className='skills-underline'></div>
              <p className='w-75 mx-auto text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                aperiam!
              </p>
            </div>
            {/* <!-- end of single skill --> */}
            {/* <!-- single skill --> */}
            <div className='col-sm-6 col-lg-3 text-center my-3'>
              <a href='/'>
                <i>
                  <FaComments className='skills-icon p-2 rounded-circle' />
                </i>
              </a>
              <h6 className='text-uppercase font-weight-bold my-3'>
                free support
              </h6>
              <div className='skills-underline'></div>
              <p className='w-75 mx-auto text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                aperiam!
              </p>
            </div>
            {/* <!-- end of single skill --> */}
            {/* <!-- single skill --> */}
            <div className='col-sm-6 col-lg-3 text-center my-3'>
              <a href='/'>
                <i>
                  <FaPeopleCarry className='skills-icon p-2 rounded-circle' />
                </i>
              </a>
              <h6 className='text-uppercase font-weight-bold my-3'>caring</h6>
              <div className='skills-underline'></div>
              <p className='w-75 mx-auto text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                aperiam!
              </p>
            </div>
            {/* <!-- end of single skill --> */}
            {/* <!-- single skill --> */}
            <div className='col-sm-6 col-lg-3 text-center my-3'>
              <a href='/'>
                <i>
                  <FaDollarSign className='skills-icon p-2 rounded-circle' />
                </i>
              </a>
              <h6 className='text-uppercase font-weight-bold my-3'>
                affordable
              </h6>
              <div className='skills-underline'></div>
              <p className='w-75 mx-auto text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                aperiam!
              </p>
            </div>
            {/* <!-- end of single skill --> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Facilities
