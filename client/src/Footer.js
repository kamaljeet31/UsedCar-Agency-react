import React from 'react'

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
  }
  return (
    <>
      <footer className='footer py-3'>
        <div className='row  d-flex justify-content-center'>
          <div>
            <p className='m-0 text-center text-white footer-icon'>
              Copyright &copy;
              <span> {getYear()} KamaljeetSingh.com </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
