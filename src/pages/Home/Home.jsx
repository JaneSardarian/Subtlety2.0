import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='Bestsellers' />
      <Categories />
      <FeaturedProducts type='Must have' />
    </div>
  )
}
export default Home
