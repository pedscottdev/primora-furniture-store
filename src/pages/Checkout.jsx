import React from 'react'
import '../styles/checkout.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Col, Row, Form, FormGroup } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'

import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state=> state.cart.totalAmount)

  return <Helmet title="Checkout">
    <CommonSection title="Checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold'>Billing Information</h6>
            <Form className="billing_form">
              <FormGroup className="form_group">
                <input type="text" placeholder='Enter Your Name'/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder='Enter Your Email'/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder='Phone Number'/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder='Address'/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder='Postal Code'/>
              </FormGroup>
            </Form>
            
          </Col>

          <Col lg='4'>
            <div className="checkout_cart">
              <h6>Total Quantity: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>${totalAmount}</span></h6>
              <h6>
                <span>
                Shipping: <br/>
                freeship
                </span>             
                <span>$120</span>
              </h6>
              <h4>Total Cost: <span>$</span></h4>
              <motion.button
              whileTap={{scale:1.05}} 
                className="buy_btn auth_btn w-100">Place an order
              </motion.button>
            </div>
            
          </Col>

        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout