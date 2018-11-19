import React, { Component, createRef } from 'react'

import HeadingArea from '../HeadingArea'
import StudyBox from '../CaseStudy/StudyBox'

import Swiper from 'react-id-swiper'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './PressArea.scss'

class PressArea extends Component {
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
   spaceBetween: 25,
   slidesPerView: 'auto',
  //  centeredSlides: true,
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

  render() {
    return (
      <div className={styles.PressArea}>
        <div className={styles.PressAreaBody}>
          <HeadingArea whiteStyle propsStyles={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '340px 0px 65px 0px',
          }} title='Press' textAlignleft>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam.
        </HeadingArea>
        </div>
        <Row>
          <Col span="4">
          </Col>
          <Col span="20" className={styles.PressAreaSwiperContainer}>
            <Swiper key={'Swiper2'} ref={this.swiperRef}>
            <span className={styles.PressAreaSwiperSlide}>
              <StudyBox imgUrl='/public/images/demo.png' title='Dolore sit amet consecure'>
                  Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
              </StudyBox>
            </span>
            <span className={styles.PressAreaSwiperSlide}>
              <StudyBox
                title='Dolore sit amet consecure'
                tags={['Dolore', 'AMETN', 'Team']}
              >
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
              </StudyBox>
            </span>
            <span className={styles.PressAreaSwiperSlide}>
              <StudyBox imgUrl='/public/images/demo.png' title='Dolore sit amet consecure'>
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
              </StudyBox>
            </span>
            <span className={styles.PressAreaSwiperSlide}>
              <StudyBox
                title='Dolore sit amet consecure'
              // tags={['Dolore', 'AMETN', 'Team']}
              >
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
                Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
              </StudyBox>
            </span>
          </Swiper>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PressArea
