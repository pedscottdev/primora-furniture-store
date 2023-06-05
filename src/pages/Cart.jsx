import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Col, Row } from 'reactstrap'

import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlices'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <Helmet title={'Cart'}>
      <CommonSection title=" Shopping Cart"/>
      <section className="cart">
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length===0 ? (
                <h2 className='fs-4 text-center'>No item added to the cart</h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>...</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index)=>(
                          <Tr item={item} key={index}/>
                        ))
                      }
                    </tbody>
                  </table>
                )
              }
              
            </Col>

            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal 
                <span className='fs-4 fw-bold'>${totalAmount}</span></h6>
              </div>
              <p className='fs-6 mt-2'>Note: Taxes and shipping will calculate in checkout</p>
              <div>
                <motion.button whileTap={{scale:1.2}} className="buy_btn mt-4 w-100"><Link to='/shop'>Continue Shopping</Link></motion.button>
                <motion.button whileTap={{scale:1.2}} className="buy_btn mt-3 w-100"><Link to='/checkout'>Checkout</Link></motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item})=> {

  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.quantity}</td>
    <td><motion.i
    onClick={deleteProduct} 
    whileTap={{scale:1.2}} 
    class="ri-delete-bin-line"></motion.i></td>
  </tr>
}
export default Cart