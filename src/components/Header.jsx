import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import menuBtn from '../imgs/menu.png'
import close from '../imgs/close.png'

function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
      setMenu(prevState => !prevState)
    }

    console.log(menu)

  return (
    <header>
      <div className="logo">
        <a href='#home'>
          <h3>acorbillo</h3>
        </a>
      </div>
      <nav>
        <a href='#about' className='nav-link'>About Me</a>
        <a href='#projects' className='nav-link'>Projects</a>
        <a href='#contact' className='nav-link'>Contact</a>
      </nav>
      <img src={menuBtn} alt="" className={menu ? "close" : "menu-btn"} onClick={toggleMenu} />
      {menu && <Menu menu={menu} set={setMenu} handleClick={toggleMenu}/>}
    </header>
  )
}

function Menu({menu, set, handleClick}) {
  return (
    <nav className={menu ? "open side-menu" : "close"}>
        <img src={close} className='close-btn' onClick={handleClick}/>
        <a href='#home' className='nav-link' onClick={handleClick}>Home</a>
        <a href='#about' className='nav-link' onClick={handleClick}>About Me</a>
        <a href='#projects' className='nav-link' onClick={handleClick}>Projects</a>
        <a href='#contact' className='nav-link' onClick={handleClick}>Contact</a>
    </nav>
  )
}

export default Header