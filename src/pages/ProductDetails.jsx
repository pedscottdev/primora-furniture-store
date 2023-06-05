import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductList from '../components/UI/ProductList'
import '../styles/product-details.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import cartSlices, { cartActions } from '../redux/slices/cartSlices'
import { toast } from 'react-toastify'

const ProductDetails = () => {

  const [ tab, setTab ] = useState('desc');
  const [ rating, setRating ] = useState(null);
  const {id} = useParams();
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id)
  
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } 
  = product;

  const relatedProducts = products.filter(item => item.category === category)
  const submitHandler = (e)=> {
    e.preventDefault()

    const reviewUserName =  reviewUser.current.value
    const reviewUserMsg =  reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj)
    toast.success('Review submitted!')
  };  

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success('Product added successfully!')
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return <Helmet title={productName} >
    <CommonSection title={productName} />
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>

          <Col lg='6'>
            <div className="product_details">
              <span>Category: {category}</span>
              <h2 className='mt-4'>{productName}</h2>
              <div className="product_rating d-flex align-items-center gap-5 mb-3">
                <div>
                  <span><i class="ri-star-fill"></i></span>

                  <span><i class="ri-star-fill"></i></span>

                  <span><i class="ri-star-fill"></i></span>

                  <span><i class="ri-star-fill"></i></span>

                  <span><i class="ri-star-half-line"></i></span>
                </div>
                <p>(<span>{avgRating}</span> ratings)</p>
              </div>

            </div>
            <span className='product_price'>${price}</span>
            <p className='mt-3'>{shortDesc}</p>

            <motion.button whileTap={{ scale:1.2 }} className='buy_btn' onClick={addToCart}>Add to Cart</motion.button>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'> 
            <div className="tab_wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === "desc" ? "active_tab" : " "}`}
              onClick={()=> setTab('desc')}>
                Description
              </h6>

              <h6 className={`${tab === "rev" ? "active_tab" : " "}`}
              onClick={()=> setTab('rev')}>
                Reviews ({reviews.length})
              </h6>
            </div>
            {
              tab === 'desc' ? <div className="tab_content mt-4">
              <p>{description}</p>
            </div> : <div className='product_review mt-5'>
              <div className="review_wrapper">
                <ul>
                  {
                    reviews?.map((item, index) => (
                      <li key={index} className='mb-4'>
                        <h6>Phuoc Nguyen</h6>
                        <span>{item.rating}</span>
                        <p>{item.text}</p>
                      </li>                     
                    ))
                  }
                </ul>

                <div className="review_form">
                  <h4>Leave your experience</h4>
                  <form action="" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input type="text" placeholder='Enter Name' ref={reviewUser} />
                    </div>

                    <div className="form_group d-flex align-items-center gap-5 rating_group">
                      <motion.span whileTap={{ scale:1.2 }} onClick={()=> setRating(1)}>1 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{ scale:1.2 }} onClick={()=> setRating(2)}>2 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{ scale:1.2 }} onClick={()=> setRating(3)}>3 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{ scale:1.2 }} onClick={()=> setRating(4)}>4 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{ scale:1.2 }} onClick={()=> setRating(5)}>5 <i class="ri-star-fill"></i></motion.span>
                    </div>
                    <div className="form_group">
                      <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message...' />
                    </div>

                    <button className="buy_btn" type='submit'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
            }
          </Col>

          <Col lg='12' className='mt-5'>
            <h2 className='related_title'>You may also like</h2>
          </Col>

          <ProductList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails