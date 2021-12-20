import { FaCar, FaSearch } from 'react-icons/fa'

const FeaturedCar = ({ items }) => {
  return (
    <>
      <section className='featured py-5' id='featured'>
        <div className='container'>
          {/* <!-- section title --> */}
          <div className='row mb-5'>
            <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
              <h1 className='font-weight-bold align-self-center mx-1'>
                featured
              </h1>
              <h1 className='section-title--special mx-1'>cars</h1>
            </div>
          </div>
          {/* end of section title */}

          <div className='row'>
            <div className='col-10 mx-auto col-lg-6 featured-info my-3'>
              {items.map((imgItem) => {
                const { id, make, model } = imgItem
                return (
                  <div
                    className='featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap'
                    key={id}
                  >
                    <span className='featured-icon mr-2'>
                      <i className='fas fa-car'>
                        <FaCar />
                      </i>
                    </span>

                    <h5 className='font-weight-bold mx-1'>{make}</h5>
                    <h5 className='mx-1'>{model}</h5>
                  </div>
                )
              })}
            </div>

            {/* featured img */}
            <div className='col-10 mx-auto col-lg-6 featured-img align-self-center my-3'>
              {/* <!-- img container --> */}
              <div className='img-container'>
                <img
                  src='img/featured.jpeg'
                  alt=''
                  className='img-fluid featured-photo'
                />
                <a href='/' className='featured-link'>
                  <i className='fas fa-search'>
                    <FaSearch />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedCar
