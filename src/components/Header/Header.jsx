import React, {useRef, useEffect} from 'react'
import './header.css'
import logo from '../../assets/images/primora-logo.png'
import defaultUser  from '../../assets/images/user-icon.png'

import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'

const nav_link = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }, 
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      } else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })
  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className='nav_wrapper'>
          <div className='logo'>
            <img src={logo} alt="primora-logo" />
            <div>
              <h1>PRIMORA</h1>
            </div>
          </div>

          <div className='navigation'>
            <ul className='menu'>
              {
                nav_link.map((item, index) =>(
                  <li className='nav_items' key={index}>
                    <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav_active' : ''} >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='nav_icons'>
            <span className='fav_icon'>
              <i class="ri-heart-line"></i>
              <span className="badge">0</span>
            </span>
            <span className='cart_icon'>
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span>
            </span>
            <span><motion.img whileTap={{ scale:1.2 }} src={defaultUser} alt="" /></span>
          </div>

          <div className="mobile_menu">
            <span><i class="ri-menu-line"></i></span>
          </div>

        </div>     
      </Row>
    </Container>
  </header>
}

export default Header