import React, { useState } from 'react'
import '../styles/login.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Col, Row, Form, FormGroup } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from "../firebase.config";

import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const signIn = async (e) =>{
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user)
      setLoading(false)
      toast.success("Successfully log in")
      navigate("/checkout")

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return <Helmet title="Login">
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>
            : <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Login</h3>

            <Form className='auth_form' onSubmit={signIn}>
              <FormGroup className='form_group'>
                <input type="text" placeholder='Enter your email' value={email}
                onChange={e => setEmail(e.target.value)} />
              </FormGroup>

              <FormGroup className='form_group'>
                <input type="password" placeholder='Enter your password' value={password}
                onChange={e => setPassword(e.target.value)} />
              </FormGroup>

              <button type="submit" className="buy_btn login_btn">Login</button>
              <p>Don't have an account? {" "}
                <Link to="/signup">Create one.</Link>
              </p>
            </Form>

          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login