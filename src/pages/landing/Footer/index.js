import React, { memo } from 'react'
import AppBrand from '../../../AppBrand/components/AppBrand'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import styles from './Footer.scss'

const liItems = [ 
  ['About', 'Leadership', 'Blog', 'Careers', 'Referral Program', 'Events', 'Press', 'Security', 'Legal'],
  ['Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'Contact Support', 'Contact Support'],
  ['Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'Contact Support', 'Contact Support'],
  ['Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'FAQ', 'Privacy Police', 'Contact Support', 'Contact Support', 'Contact Support']
];

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Row>
        <Col md={25} lg={10}>
          <div className={styles.FooterSummaryGrid}>
            <div className={styles.FooterAppBrand}>
              <AppBrand />
            </div>
            <div className={styles.FooterTitle}>
              © 2018 Bitcraft 
            </div>
            <div className={styles.FooterIcons}>
            </div>
          </div>
        </Col>
        <Col md={25} lg={14}>
          <Row>
            <Col lg={6} sm={24} xs={24} md={12}>
              <div className={styles.FooterHeading}>
                Pages
              </div>
              <nav>
                <ul>
                  {
                    liItems[0].map(item => (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </Col>
            <Col lg={6} sm={24} xs={24} md={12}>
              <div className={styles.FooterHeading}>
                Support
              </div>
              <nav>
                <ul>
                  {
                    liItems[1].map(item => (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </Col>
            <Col lg={6} sm={24} xs={24} md={12}>
              <div className={styles.FooterHeading}>
                Menu
              </div>
              <nav>
                <ul>
                  {
                    liItems[2].map(item => (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </Col>
            <Col lg={6} sm={24} xs={24} md={12}>
              <div className={styles.FooterHeading}>
                Menu
              </div>
              <nav>
                <ul>
                  {
                    liItems[3].map(item => (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}


export default memo(Footer)
