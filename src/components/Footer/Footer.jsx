import { Form, Link } from 'react-router-dom'

import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoYoutube,
  IoLogoTiktok,
} from 'react-icons/io5'

import './Footer.scss'
import FormInput from './FormInput'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Shop</h1>
          <Link className='footer-link' to='collections/new'>
            New
          </Link>
          <Link className='footer-link' to='collections/bestsellers'>
            Bestsellers
          </Link>
          <Link className='footer-link' to='collections/skin'>
            Skincare
          </Link>
          <Link className='footer-link' to='collections/sets'>
            Sets
          </Link>
        </div>
        <div className='item'>
          <h1>Support</h1>
          <Link className='footer-link' to='services'>
            Services
          </Link>
          <Link className='footer-link' to='account'>
            Account
          </Link>
          <Link className='footer-link' to='stores'>
            Stores
          </Link>
          <Link className='footer-link' to='faqs'>
            FAQs
          </Link>
        </div>
        <div className='item'>
          <h1>Stay Connected</h1>
          <Form className='form' method=''>
            <FormInput type='text' label='Your name' name='name' />
            <FormInput type='email' label='Your email' name='email' />
          </Form>
          <button className='btn btn-hover'>Subscribe</button>
        </div>
        <div className='item'>
          <h1>Connect</h1>
          <div className='icons'>
            <IoLogoInstagram />
            <IoLogoPinterest />
            <IoLogoTiktok />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>
            <Link className='link' to='/'>
              SUBTLETY
            </Link>
          </span>
          <span className='copyright'>
            &copy; Copyright {` `}
            <span id='date'>{new Date().getFullYear()}</span>
            {` `}
            All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}
export default Footer
