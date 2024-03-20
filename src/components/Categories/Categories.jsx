import { Link } from 'react-router-dom'

import './Categories.scss'
import { Cleansers, EyeCare, Masks, New, Sets, Cream } from './img'

const Categories = () => {
  return (
    <section className='categories'>
      <div className='col'>
        <div className='row'>
          <img src={Cream} alt='' />
          <button className='btn'>
            <Link className='link' to='/collections/1'>
              Moisturizers
            </Link>
          </button>
        </div>
        <div className='row'>
          <img src={Sets} alt='' />
          <button className='btn'>
            <Link className='link' to='/collections/1'>
              Travel sets
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img src={New} alt='' />
          <button className='btn'>
            <Link className='link' to='/collections/1'>
              New
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img src={EyeCare} alt='' />
              <button className='btn'>
                <Link className='link' to='/collections/1'>
                  Eye Care
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img src={Masks} alt='' />
              <button className='btn'>
                <Link className='link' to='/collections/1'>
                  Cleansers
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img src={Cleansers} alt='' />{' '}
          <button className='btn'>
            <Link className='link' to='/collections/1'>
              Masks
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Categories
