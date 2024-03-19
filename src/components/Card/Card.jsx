import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <section className='card'>
        <div className='image'>
          {item.isNew && <span>New</span>}
          <img src={item.img} alt={item.title} className='mainImage' />
          <img src={item.img2} alt={item.title} className='secondImage' />
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </section>
    </Link>
  )
}
export default Card
