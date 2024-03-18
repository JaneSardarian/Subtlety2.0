import { Link } from 'react-router-dom'

import './Navbar.scss'

import LeftLinks from './LeftLinks'
import RightLinks from './RightLinks'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <LeftLinks />
        <div className='center'>
          <Link className='link' to='/'>
            SUBTLETY
          </Link>
        </div>
        <RightLinks />
      </div>
    </div>
  )
}
export default Navbar
