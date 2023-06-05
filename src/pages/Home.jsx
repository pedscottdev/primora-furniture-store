import React, { useState, useEffect} from 'react'
import '../styles/home.css'

import heroImg  from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'

import ProductList from '../components/UI/ProductList'
import Clock from '../components/UI/Clock'
import products from '../assets/data/products'
import Services from '../services/Services'
import Helmet from '../components/Helmet/Helmet'

import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [newArrivals, setNewArrivals] = useState([])

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredNewArrivals = products.filter(
      (item) => item.category === "decor"
    );

    setTrendingProducts(filteredTrendingProducts);

    setBestSalesProducts(filteredBestSalesProducts);

    setNewArrivals(filteredNewArrivals);
  }, []);
  return <Helmet title={'Home'}> 
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_content'>
              <p className='hero_subtible'>Trending products in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In velit magnam perspiciatis sint dignissimos iusto saepe quis totam deleniti cumque.</p>
              <motion.button whileTap={{ scale:1.2 }} className="buy_btn shop_btn"><Link to="/shop">SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="hero-img" />
            </div>
          </Col>
        </Row>
      </Container>     
    </section>

    <Services />

    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best_sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer_count_promotion">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count_down-content'>
            <div className="clock_top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{ scale:1.2 }} className="store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter-img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>New Arrivals</h2>
          </Col>
          <ProductList data={newArrivals}/>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home