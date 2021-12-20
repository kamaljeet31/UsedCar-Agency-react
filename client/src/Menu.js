import React from 'react'
import { FaCar, FaCogs, FaGasPump } from 'react-icons/fa'

const Menu = ({ items }) => {
  return (
    <>
      {/* category, special, */}
      {items.map((menuItem) => {
        const { id, make, img, model, price, type, trans, gas } = menuItem
        return (
          <div className='col-10 mx-auto my-3 col-md-6 col-lg-4' key={id}>
            <div className='card car-card'>
              <img src={img} className='card-img-top car-img' alt='' />
              {/* <!-- card body --> */}
              <div className='card-body'>
                <div className='car-info d-flex justify-content-between'>
                  {/* <!-- first flex child --> */}
                  <div className='car-text text-uppercase'>
                    <h6 className='font-weight-bold'>{make}</h6>
                    <h6>{model}</h6>
                  </div>
                  {/* <!-- second flex child --> */}
                  <h5 className='car-value align-self-center py-2 px-3'>
                    $<span className='car-price'>{price}</span>
                  </h5>
                </div>
              </div>
              {/* <!-- end of card --> */}
              <div className='card-footer text-capitalize d-flex justify-content-between align-items-centre'>
                <p className='d-flex align-items-centre'>
                  <span>
                    <i>
                      <FaCar />
                    </i>
                    &nbsp;
                  </span>
                  {type}
                </p>
                <p>
                  <span className='mb-2'>
                    <i className='fas fa-cogs mb-2 '>
                      <FaCogs size={20} />
                    </i>
                    &nbsp;
                  </span>
                  {trans}
                </p>
                <p>
                  <span>
                    <i className='fas fa-gas-pump'>
                      <FaGasPump />
                    </i>
                    &nbsp;
                  </span>
                  {gas}
                </p>
                {/* &nbsp; used for space between span and p tag*/}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Menu
