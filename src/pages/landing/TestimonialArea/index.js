import React, { memo } from 'react'

import TriangleB from '../LayoutTriangleArea'
import Triangle from '../../../Triangle'
import styles from './TestimonialArea.scss'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'


const TestimonialArea = ({
  title,
  Body,
  children
}) => {
  return (
    <div className={styles.TestimonialArea}>
      <Triangle
        viewBox={'0 0 1000 90'}
        minHeight={'90px'}
        points={'1000 0 0 90 0 0 0 0'}
        fill="#edeefb"
      />
     <div className={styles.TestimonialAreaGrid}>
       <Row>
          <Col xs={24} sm={24} md={13}>
            {children}
          </Col>
          <Col xs={24} sm={24} md={9}>
            <div className={styles.TestimonialAreaContainer}>
              <div className={styles.TestimonialAreaTitle}>
                {title}
              </div>
              <div className={styles.TestimonialAreaBody}>
                {Body}
              </div>
            </div>
          </Col>
        </Row>
     </div>
     <TriangleB />
    </div>
  )
}

export default memo(TestimonialArea)
