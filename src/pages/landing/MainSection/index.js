import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './MainSection.scss'

const MainSection = ({
  title, 
  body,
  Header,
  children
}) => {
  return (
    <div className={styles.MainSection}>
      <span className={styles.MainSectionHeader}>
        {Header}
      </span>
      <Row>
        <Col span="18">
          <span className={styles.MainSectionTitle}>
            {title}
          </span>
          <span className={styles.MainSectionBody}>
            {body}
          </span>
        </Col>
        <Col span="6">
        </Col>
      </Row>
      <Row>
        <Col span="24">
          {children}
        </Col>
      </Row>
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
