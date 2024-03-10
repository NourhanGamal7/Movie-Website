import React from 'react'
import './trendCard.css'
// import IIMage from '../data/image/65.jpg'
const TrendCard = ({slide}) => {
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={slide.previewImg} />
        <a href="#">
            Add to calendar <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard