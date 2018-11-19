import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './MainSection.scss'

const MainSection = ({
  title, 
  body,
  Header
}) => {
  return (
    <div className={styles.MainSection}>
      <span className={styles.MainSectionHeader}>
        {Header}
      </span>
      <div className={styles.MainSectionContainer}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={13}>
            <span className={styles.MainSectionTitle}>
              {title}
            </span>
            <span className={styles.MainSectionBody}>
              {body}
            </span>
          </Col>
          {/* <Col span="6">
          &nbsp;
          </Col> */}
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <Button className={styles.MainSectionBtn}>
              Read more
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

MainSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children:  PropTypes.element
}

export default memo(MainSection)
