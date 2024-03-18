import { Link } from 'react-router-dom'

import {
  IoSearchOutline,
  IoPersonOutline,
  IoBagOutline,
  IoHeartOutline,
  // IoMenuOutline,
} from 'react-icons/io5'

const RightLinks = () => {
  return (
    <>
      <div className='right'>
        <div className='item'>
          <Link className='link' to='/'>
            Home
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='about'>
            About
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='/services'>
            Services
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='/stores'>
            Stores
          </Link>
        </div>
        <div className='icons'>
          <IoSearchOutline />
          <IoPersonOutline />
          <IoHeartOutline />
          <div className='cartIcon'>
            <IoBagOutline />
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default RightLinks
