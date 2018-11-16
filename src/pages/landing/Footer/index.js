import React, { memo } from 'react'


import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './Footer.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Row>
        <Col span="8">
        </Col>
        <Col>
          <Row>
            <Col span="6">
            `1
            </Col>
            <Col span="6">
            2
            </Col>
            <Col span="6">
            3
            </Col>
            <Col span="6">
            4
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}


export default memo(Footer)
