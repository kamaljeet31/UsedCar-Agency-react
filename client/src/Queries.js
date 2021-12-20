import React from 'react'
import { FaSearch, FaDollarSign } from 'react-icons/fa'
const Queries = () => {
  return (
    <>
      <div className='section question py-5' id='question'>
        <div className='container'>
          <div className='row'>
            {/* <!-- single question first--> */}
            <div className='col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-grey p-4'>
              {/* <!-- first flexbox child --> */}
              <a href='/' className='question-icon mr-3'>
                <i className='fas fa-search fa-fw'>
                  <FaSearch />
                </i>
              </a>
              {/* <!-- second flexbox child --> */}
              <div className='question-text w-75'>
                <h4 className='question-title text-capitalize font-weight-bold'>
                  are yo looking for a car?
                </h4>
                <p className='question-info'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam, quis!
                </p>
              </div>
            </div>
            {/* <!-- single question second--> */}
            <div className='col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-yellow p-4'>
              {/* <!-- first flexbox child --> */}
              <a href='/' className='question-icon mr-3'>
                <i className='fas fa-dollar-sign fa-fw'>
                  <FaDollarSign />
                </i>
              </a>
              {/* <!-- second flexbox child --> */}
              <div className='question-text w-75'>
                <h4 className='question-title text-capitalize font-weight-bold'>
                  do you want to sell a car?
                </h4>
                <p className='question-info'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam, quis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Queries
