import React from 'react'
import Banner from './Banner/Banner'
import ProductGroupCopy from './ProductsGroup-copy/ProductsGroup'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import ProductOffer from './ProductsOffer/ProductsOffer'
import ProductGroup from './ProductsGroup/ProductsGroup'
import Footer from './Footer/Footer'
import MoreProducts from './MoreProducts/MoreProducts'
import SuperNav from './SuperNav/SuperNav'

const Home = () => {
  return (
    <>
      <SuperNav />
      <Navbar className='sticky-navbar' />
      <Banner />
      <MoreProducts />
      <div className='container-fluid container-home'>
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9'>
            <ProductGroup />
          </div>
        </div>
      </div>
      <ProductOffer />
      <ProductGroupCopy />
      <ProductOffer />
      <ProductGroupCopy />

      <Footer />
    </>
  )
}

export default Home
