import React from 'react'

import Aatta from './Assets/Aatta.png'
import Oil from './Assets/Oil.png'
import Rice from './Assets/Rice.png'
import Sugar from './Assets/Sugar.png'

// Sofdrinks
import baking from './Assets/baking.png'
import biscuits from './Assets/biscuits.png'
import chocolate from './Assets/chocolate.png'
import drinks from './Assets/coldrink.png'

//Treanding NearBy
import parrota from './Assets/parrota.png'
import './slider.css'

const Slider = () => {
  return (
    <div className='container-fluid'>
      {/* section one start */}
      <section className=' mt-3'>
        <div className='row'>
          <div className='col'>
            <h1>Grocery kitchen</h1>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-1 mt-3'>
            <a href='#/' className='text-success'>
              See all
            </a>
          </div>
        </div>
        <div className='row mt-3'>
          <div class='card col-2 ms-2' style={{ backgroundColor: '#FFC6C8' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div className=''>
              <p className=' fw-bold text-center'>Atta, Maida</p>
            </div>
          </div>
          {/* SECONDCARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EEEE' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Oil, Ghee & Butter</p>
            </div>
          </div>
          {/* THIRD CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#EEE6D6' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Sugar} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Sugar, Jaggery</p>
            </div>
          </div>
          {/* FOURTH CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EED8' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Rice} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Rice,Dals & Grains</p>
            </div>
          </div>
          {/* FIFTH CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EEEE' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Oil, Ghee & Butter</p>
            </div>
          </div>
          {/* Sixth Card */}
        </div>
        <div className='row mt-3'>
          <div class='card col-2 ms-2' style={{ backgroundColor: '#FFC6C8' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div className=''>
              <p className=' fw-bold text-center'>Atta, Maida</p>
            </div>
          </div>
          {/* SECONDCARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EEEE' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Oil, Ghee & Butter</p>
            </div>
          </div>
          {/* THIRD CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#EEE6D6' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Sugar} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Sugar, Jaggery</p>
            </div>
          </div>
          {/* FOURTH CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EED8' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Rice} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Rice,Dals & Grains</p>
            </div>
          </div>
          {/* FIFTH CARD */}
          <div class='card col-2 ms-2' style={{ backgroundColor: '#D6EEEE' }}>
            <div class='card-body'>
              <img class='card-img-top' src={Oil} width={150} alt=' cap' />
            </div>
            <div>
              <p className='text-center fw-bold'>Oil, Ghee & Butter</p>
            </div>
          </div>
          {/* Sixth Card */}
        </div>
      </section>
      {/* section one end */}
    </div>
  )
}

export default Slider
