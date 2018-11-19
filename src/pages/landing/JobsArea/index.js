import React from 'react'

import HeadingArea from '../HeadingArea'
import JobPost from './JobPost'

import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './JobsArea.scss'

 const JobsArea = () => {
  return (
    <div className={styles.JobsArea}>
      <HeadingArea title='Jobs'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor.
      </HeadingArea>
      <div className={styles.JobsAreaContainer}>
        <Row className={styles.JobsAreaRow}>
          <Col lg={8} xs={25} md={12} sm={25}>
            <JobPost
              title='Developer'
              description='Jakarta Indonesia'
              imgUrl='/public/images/Group.png'
              btnLabel={'View Job'}
              />
          </Col>
          <Col lg={8} xs={25} md={12} sm={25}>
            <JobPost
              orange
              title='Accounting'
              description='Jakarta Indonesia'
              imgUrl='/public/images/accounting-symbol.png'
              btnLabel={'View Job'}
              />
          </Col>
          <Col lg={8} xs={25} md={12} sm={25}>
            <JobPost
              pink
              title='Marketing'
              description='Jakarta Indonesia'
              imgUrl='/public/images/marketing-symbol.png'
              btnLabel={'View Job'}
              />
          </Col>
        </Row>
      </div>
      <Button className={styles.JobAreaBtn}>
        SEE ALL JOBS
      </Button>
    </div>
  )
}

export default JobsArea
