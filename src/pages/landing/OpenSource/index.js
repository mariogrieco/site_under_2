import React from 'react'
import HeadingArea from '../HeadingArea'

import styles from './OpenSource.scss'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const OpenSource = ({
  children
}) => {
  return (
    <div className={styles.OpenSource}>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <div className={styles.OpenSourceImgContainer}>
            <div className={styles.OpenSourceImg}>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <HeadingArea title='Open source project' textAlignleft>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam
          </HeadingArea>
        </Col>
      </Row>
      {children}
    </div>
  )
}

export default OpenSource
