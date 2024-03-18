import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import './Slider.scss'
import Hero from './img/hero.jpg'
import Hero1 from './img/hero1.jpg'
import Hero2 from './img/hero2.jpg'
import { useState } from 'react'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [Hero, Hero1, Hero2]

  const prevSlide = () => {
    // Option 1
    // setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)

    //Option 2
    setCurrentSlide((slide) => {
      const newSlide = (slide - 1 + images.length) % images.length

      return newSlide
    })
  }
  const nextSlide = () => {
    // Option 1
    // setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)

    //Option 2
    setCurrentSlide((slide) => {
      const newSlide = (slide + 1) % images.length

      return newSlide
    })
  }

  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={images[0]} alt='' />
        <img src={images[1]} alt='' />
        <img src={images[2]} alt='' />
      </div>
      <section className='icons'>
        <div className='icon' onClick={prevSlide}>
          <SlArrowLeft />
        </div>
        <div className='icon' onClick={nextSlide}>
          <SlArrowRight />
        </div>
      </section>
    </div>
  )
}
export default Slider
