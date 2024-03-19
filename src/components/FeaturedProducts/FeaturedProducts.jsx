import Card from '../Card/Card'
import './FeaturedProducts.scss'
import { featuredProducts } from './data'
const FeaturedProducts = ({ type }) => {
  return (
    <section className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et
          fugit esse numquam, sapiente nam iusto praesentium perferendis impedit
          eum quod neque possimus reiciendis hic a officiis veniam ut obcaecati.
        </p>
      </div>
      <div className='bottom'>
        {featuredProducts.map((item) => {
          return <Card item={item} key={item.id} />
        })}
      </div>
    </section>
  )
}
export default FeaturedProducts
