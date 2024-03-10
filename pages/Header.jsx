import React, { useState } from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../dataa/navListData'
import Search from '../components/Search'
import Button from '../components/Button'

import { useMediaQuery } from 'react-responsive';
const Header = ({scroll, close}) => {
  // ======================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSidebar , setShowSidebar] = useState(false)
  function closeSidebar() {
    setShowSidebar(false);
  }
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  // Function to handle the opening and closing of the navbar
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   // ======================
  const[navList , setNavList] = useState(navListData)
  const handleNavOnClick = id =>{
    const newNavList = navList.map(nav => {
      nav.active = false;
      if(nav._id === id) nav.active= true;
    })
    setNavList(newNavList);
  }
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`} >
     
        <a href="/" className="logo"> Cinema </a>
        <ul className={`nav ${isMenuOpen ? 'menu-open' : ''}`}  >
            {
                navListData.map(nav => (
                    <NavListItem key={nav.id} nav={nav} navOnClick={handleNavOnClick} />
                ))
            }
        </ul>
        <Search/>
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign In'/>
        
          <button className="navbar-toggle" onClick={handleMenuToggle}  >
        {isSmallScreen && !isMenuOpen && <span className="menu-icon" >&#9776;</span>}
        {isSmallScreen && isMenuOpen && <span className="close-icon">&#10006;</span>}
      </button>
     
    </header>
  )
}

export default Header




