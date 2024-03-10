import React from 'react'

const NavListItem = ({nav,navOnClick}) => {
  return (
    <>
    <li> <a href={nav.link} OnClick={() => {
      navOnClick(nav._id)
    }} className={`${nav.active ? 'active' : undefined}`} >{nav.name}</a> </li>
    </>
    
  )
}

export default NavListItem