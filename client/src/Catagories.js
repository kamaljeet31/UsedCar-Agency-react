import React from 'react'

const Catagories = ({ filterItems }) => {
  return (
    <div>
      <div className='row mb-5'>
        <div className='col-10 mx-auto col-md-12 d-flex justify-content-end'>
          <button
            className='btn btn-outline-secondary text-uppercase mx-1 filter-btn'
            onClick={() => filterItems('all')}
          >
            all
          </button>
          <button
            className='btn btn-outline-secondary text-uppercase mx-1 filter-btn'
            onClick={() => filterItems('american')}
          >
            american
          </button>
          <button
            className='btn btn-outline-secondary text-uppercase mx-1 filter-btn'
            onClick={() => filterItems('german')}
          >
            german
          </button>
        </div>
      </div>
    </div>
  )
}

export default Catagories
