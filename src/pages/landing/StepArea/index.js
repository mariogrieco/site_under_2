import React, { memo } from 'react'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Layout from './Layout'
import styles from './StepArea.scss'

const StepArea = ({
  title,
  imgUri,
  num,
  reverse,
  children
}) => {
  return (
    <div className={styles.StepArea}>
      <Row>
      <Layout
        reverse={reverse}
        LeftArea={
          <Col xs={24} sm={12} md={12} style={{
            textAlign: reverse ? 'right' : 'left'
          }}>
            <span className={styles.StepAreaNum}>
              {num}
            </span>
            <span className={styles.StepAreaTitle}>
              {title}
            </span>
            <p className={styles.StepAreaP}>
              {children}
            </p>
          </Col>
        }
        RightArea={
          <Col xs={24} sm={12} md={12}>
            <div data-url={imgUri} className={styles.StepAreaImgContainer} style={{
              float: reverse ? 'left' : 'right'
            }}>
              <div
                className={styles.StepAreaImgBody}
                style={{
                  backgroundImage: `url(${imgUri})`,
                }}>
                &nbsp;
              </div>
            </div>
          </Col>
        }
      />
      </Row>
    </div>
  )
}

export default memo(StepArea)
