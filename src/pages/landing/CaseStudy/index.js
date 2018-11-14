import React from 'react'

import styles from './CaseStudy.scss'
import StudyBox from './StudyBox'
import HeadingArea from '../HeadingArea'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

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
  slidesPerView: 2,
  centeredSlides: true,
}

function CaseStudy () {
  return (
  <div className={styles.CaseStudyContainer}>
    <Row span="24" className={styles.CaseStudy}>
      <Col xs={24} sm={24} md={10}>
        <HeadingArea title='Case study' propsStyles={{
          backgroundColor: 'transparent',
          padding: '0px'
        }} textAlignleft={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam
        </HeadingArea>
      </Col>
    </Row>
   <Row style={{
     position: 'static'
   }}>
    <Col xs={24} sm={24} md={14} className={styles.CaseStudySwiperContainer}>
      <Swiper {...params} className={styles.CaseStudySwiper}>
        <div className={styles.CaseStudyItem}>
          <StudyBox imgUrl='' title='Dolore sit amet consecure'>
            Lorem ipsum dolor sit amet, dola
            eiusmod tempor doras.
            consectetur adipiing elit, sed do
          </StudyBox>
        </div>
        <div className={styles.CaseStudyItem}>
          <StudyBox imgUrl='' title='Consecture dolore amet'>
            Lorem sed ipsum dosedlor sit amet, dola
            consectetur sed adipiing elit, sed do
            eiusmod tempor doras.
          </StudyBox>
        </div>
        <div className={styles.CaseStudyItem}>
          <StudyBox imgUrl='' title='Dolore sed consecure'>
            Lorem ipsum sit dolor sit amet, dola
            consectetur ipsum adipiing elit, sed do
            eiusmod.
          </StudyBox>
        </div>
        </Swiper>
      </Col>
    </Row>
  </div>
  )
}

export default CaseStudy
