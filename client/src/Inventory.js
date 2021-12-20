import React, { useState } from 'react'
import Catagories from './Catagories'
import items from './data'
import Menu from './Menu'

const Inventory = () => {
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <section className='inventory py-5' id='inventory'>
        <div className='container'>
          {/* <!-- section title --> */}
          <div className='row mb-5'>
            <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
              <h1 className='font-weight-bold align-self-center mx-1'>our</h1>
              <h1 className='section-title--special mx-1'>inventory</h1>
            </div>
          </div>
          <Catagories filterItems={filterItems} />
          <div className='row inventory-container'>
            <Menu items={menuItems} />
          </div>
          {/* <!-- end of section title --> */}
        </div>
      </section>
      {/* <!--end of  inventory section --> */}
    </>
  )
}

export default Inventory
