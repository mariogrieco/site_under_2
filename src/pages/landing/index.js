import React, { Component } from 'react'
import Header from './Header'
import MainSection from './MainSection'

import Layout from './Layout'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'

export default class Landing extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col span="24">
            <MainSection
              title='Get the right products to market, faster.'
              body={`
                  productboard is the product excellence system that helps you understand what users need,
                  prioritize what to build, and rally everyone around your roadmap.
              `}
              Header={<Header />}
            >
              <Button>
                Try Now
              </Button>
            </MainSection>
          </Col>
        </Row>
      </Layout>
    )
  }
}
