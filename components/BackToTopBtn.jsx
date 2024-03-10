import React from 'react'
import './backToTopBtn.css'
const BackToTopBtn = ({scroll}) => {
    const backToTop =() => {
        window.scrollTo(0,0);
    };
  return (
    <a href="#" className={`back-to-top ${scroll > 100 ? 'acrive' : undefined}`}
     onClick={backToTop}
    >
        <ion-icon name="arrow-back-outline"></ion-icon>
    </a>
  )
}

export default BackToTopBtn