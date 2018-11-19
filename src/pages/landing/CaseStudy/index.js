import React, { createRef, PureComponent } from 'react'

import styles from './CaseStudy.scss'
import StudyBox from './StudyBox'
import HeadingArea from '../HeadingArea'
import Btn from './Btn'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import Swiper from 'react-id-swiper';

class CaseStudy extends PureComponent {
   swiperRef = createRef()
   params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: false,
    // {
      // nextEl: '.swiper-button-next-custom',
      // prevEl: '.swiper-button-prev-custom'
    // },
    grabCursor: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    on: {
      reachEnd: () => {
        this.handleReachEnd()
      },
      reachBeginning: () => {
        this.handleBeginning()
      },
      progress: (process) => {
        this.handleProgress(process)
      }
    }
  }

  state = {
    progress: 0,
    init: true,
    end: false
  }

  handleProgress = (progress) => {
    this.setState({
      progress: progress,
      init: progress <= 0 ? true : false,
      end: progress >= 1 ? true : false,
    })
  }

  handleBeginning = () => {
    this.handleProgress(0)
  }

   handleReachEnd = () => {
    this.handleProgress(1)
   }

   onNext = () => {
    if (this.swiperRef.current && this.swiperRef.current.swiper) {
      this.swiperRef.current.swiper.slideNext()
    }
   }
   
   onBack = () => {
    if (this.swiperRef.current && this.swiperRef.current.swiper) {
     this.swiperRef.current.swiper.slidePrev()
    }
   }

   render () {
     let end = this.state.end
     return (
      <div className={styles.CaseStudyContainer}>
        <Row span="24" className={styles.CaseStudy}>
          <Col xs={24} sm={24} md={24} lg={10}>
            <HeadingArea title='Case study' propsStyles={{
              backgroundColor: 'transparent',
              padding: '0px'
            }} textAlignleft={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam
            </HeadingArea>
            <div className={styles.BtnLayout}>
                <Btn left disabled={!end} onClick={this.onBack} className='swiper-button-prev-custom' />
                <Btn disabled={end} onClick={this.onNext} className='swiper-button-next-custom' />
            </div>
          </Col>
        </Row>
        <Row style={{
          position: 'static'
        }}>
        <Col xs={24} sm={24} lg={14} md={24} className={styles.CaseStudySwiperContainer}>
          <Swiper {...this.params} className={styles.CaseStudySwiper} ref={this.swiperRef}>
            <div className={styles.CaseStudyItem}>
              <StudyBox imgUrl='/public/images/demo.png' title='Dolore sit amet consecure'>
                Lorem ipsum dolor sit amet, dola
                eiusmod tempor doras.
                consectetur adipiing elit, sed do
              </StudyBox>
            </div>
            <div className={styles.CaseStudyItem}>
              <StudyBox imgUrl='/public/images/demo.png' title='Consecture dolore amet'>
                Lorem sed ipsum dosedlor sit amet, dola
                consectetur sed adipiing elit, sed do
                eiusmod tempor doras.
              </StudyBox>
            </div>
            <div className={styles.CaseStudyItem}>
              <StudyBox imgUrl='/public/images/demo.png' title='Dolore sed consecure'>
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
}

export default CaseStudy
