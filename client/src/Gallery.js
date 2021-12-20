const Gallery = () => {
  document.querySelectorAll('.gallery-item img').forEach((image) => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block'
      document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
    document.querySelector('.popup-image').onclick = () => {
      document.querySelector('.popup-image').style.display = 'none'
    }
  })
  return (
    <>
      <section className='gallery py-5' id='gallery'>
        <div className='container'>
          {/* <!-- section title --> */}
          <div className='row mb-5'>
            <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
              <h1 className='font-weight-bold align-self-center mx-1'>our</h1>
              <h1 className='section-title--special mx-1'>gallery</h1>
            </div>
          </div>

          {/* <!-- end of section title --> */}

          <div className='row'>
            <div className='col-sm-6 yo'>
              <div className='gallery-item'>
                <img
                  src='img/car-american-1.jpeg'
                  alt='car'
                  className='img-fluid gallery-img '
                />
              </div>
            </div>
            {/* <!-- end of first column --> */}
            <div className='col-sm-6 d-flex flex-column justify-content-between'>
              <div className='row'>
                {/* <!-- first item --> */}
                <div className='col-sm-6'>
                  <div className='gallery-item'>
                    <img
                      src='img/car-american-2.jpeg'
                      alt='car'
                      className='img-fluid gallery-img '
                    />
                  </div>
                </div>
                {/* <!-- second item --> */}
                <div className='col-sm-6'>
                  <div className='gallery-item'>
                    <img
                      src='img/car-american-3.jpeg'
                      alt='car'
                      className='img-fluid gallery-img'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                {/* <!-- first item --> */}
                <div className='col-sm-6'>
                  <div className='gallery-item'>
                    <img
                      src='img/car-american-4.jpeg'
                      alt='car'
                      className='img-fluid gallery-img'
                    />
                  </div>
                </div>
                {/* <!-- second item --> */}
                <div className='col-sm-6'>
                  <div className='gallery-item'>
                    <img
                      src='img/car-american-5.jpeg'
                      alt='car'
                      className='img-fluid gallery-img'
                    />
                  </div>
                </div>
              </div>
              {/* <!-- gallery-modal --> */}
              <div className='row '>
                <div className='col-sm-6 '>
                  <div className='popup-image'>
                    <img
                      src='img/car-american-5.jpeg'
                      alt='car'
                      className='img-fluid '
                    />
                  </div>
                </div>
              </div>

              {/* <!--end of gallery-modal --> */}
            </div>
            {/* <!-- end of second column --> */}
          </div>
        </div>
      </section>
      {/* <!-- end of row --> */}
    </>
  )
}

export default Gallery
