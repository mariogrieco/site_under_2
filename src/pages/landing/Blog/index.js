import React from 'react'

import HeadingArea from '../HeadingArea'
import BlogCard from './BlogCard'

import styles from './Blog.scss'

// import Row from 'antd/lib/row'
// import Col from 'antd/lib/col'

import Swiper from 'react-id-swiper';

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
}

const Blog = () => {
  return (
    <div className={styles.Blog}>
      <HeadingArea title='Blog'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </HeadingArea>
      <Swiper {...params} className={styles.CaseStudySwiper}>
        <div>
          <BlogCard
            title='Consectetur adipiscing elit, sed do eiusmod tempo adipiscing elit,' 
            imgUrl='/public/images/demo2.png'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniamLorem ipsum
            dolor sit amet, consectetur adipiscing
            <button>
              Read more
            </button>
          </BlogCard>
        </div>
        <div>
          <BlogCard
            title='Consectetur adipiscing elit, sed do eiusmod tempo adipiscing elit,' 
            imgUrl='/public/images/demo2.png'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniamLorem ipsum
            dolor sit amet, consectetur adipiscing
            <button>
              Read more
            </button>
          </BlogCard>
        </div>
        <div>
          <BlogCard
            title='Consectetur adipiscing elit, sed do eiusmod tempo adipiscing elit,' 
            imgUrl='/public/images/demo2.png'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniamLorem ipsum
            dolor sit amet, consectetur adipiscing
            <button>
              Read more
            </button>
          </BlogCard>
        </div>
        <div>
          <BlogCard
            title='Consectetur adipiscing elit, sed do eiusmod tempo adipiscing elit,' 
            imgUrl='/public/images/demo2.png'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniamLorem ipsum
            dolor sit amet, consectetur adipiscing
            <button>
              Read more
            </button>
          </BlogCard>
        </div>
      </Swiper>
    </div>
  )
}


export default Blog
