import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/primora-logo.png'

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4'>
          <div className='logo'>
            <img src={logo} alt="primora-logo" />
            <div>
              <h1 className='text-white'>PRIMORA</h1>
            </div>
          </div>
          <p className="footer_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias adipisci aperiam eaque accusantium ratione aliquid rem, id nulla nam!</p>
        </Col>

        <Col lg='3'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Chairs</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Sofas</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Decors</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Others</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Useful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>About</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className='footer_contact mb-3'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>District 8, Ho Chi Minh City</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>(+84)981 325 542</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                <p>pedscottdev@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer_copyright">Copyright {year} by PEDROJECT. All rights reserved. </p>
        </Col>
        
      </Row>
    </Container>
  </footer>
}

export default Footer