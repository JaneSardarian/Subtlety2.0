import { Link } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'
import Flag from './img/USA.png'

const LeftLinks = () => {
  return (
    <>
      <div className='left'>
        <div className='item'>
          <img src={Flag} alt='' style={{ height: '16px' }} />
          <SlArrowDown style={{ fontSize: '12px' }} />
        </div>
        <div className='item'>
          <span style={{ fontSize: '16px' }}>USD</span>
          <SlArrowDown style={{ fontSize: '12px' }} />
        </div>
        <div className='item'>
          <Link className='link' to='collections/new'>
            New
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='collections/bestsellers'>
            Bestsellers
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='collections/skin'>
            Skincare
          </Link>
        </div>
        <div className='item'>
          <Link className='link' to='collections/sets'>
            Sets
          </Link>
        </div>
      </div>
    </>
  )
}
export default LeftLinks
