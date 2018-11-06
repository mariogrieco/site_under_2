import React, { memo } from 'react'
import AppBrand from '../../../AppBrand/components/AppBrand'

import styles from './Header.scss'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const Header = ({
  children,
  menuConfig
}) => {
  return (
    <div className={styles.Header}>
      <Row>
        <Col span="4">
          <AppBrand />
        </Col>

        <Col span="20">
          <nav>
            <ul>
              {menuConfig.map(item => (
                <li key={item.label} onClick={item.onClick||(()=>{})}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </Row>
      
    </div>
  )
}

export default memo(Header)
