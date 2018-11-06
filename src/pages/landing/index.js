import React, { Component, Fragment } from 'react'
import Header from './Header'
import MainSection from './MainSection'

import Layout from './Layout'
import About from './About'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const menuConfig = [
  {
    label: 'About us',
    href: "#"
  },
  {
    label: 'Past clients',
    href: '#'
  },
  {
    label: 'Case studies',
    href: '#'
  },
  {
    label: 'BLog',
    href: '#'
  },
  {
    label: 'Team',
    href: '#'
  },
  {
    label: 'Press',
    href: '#'
  },
  {
    label: 'Poke us',
    href: '#'
  },
]

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Layout img decorator styles={{
          body: {
            // 'overflow-y': 'auto',
            // minHeight: '100vh'
          },
          container: {
            height: '100vh'
          }
        }}>
          <Row>
            <Col span="24">
              <MainSection
                title='Software Architected'
                body={`
                  We are a creative software agency with a focus on business
                  processes and cloud infrastructure.
                `}
                Header={<Header menuConfig={menuConfig} />}
              >
              </MainSection>
            </Col>
          </Row>
        </Layout>
        <Layout styles={{
          container: {
            background: 'transparent'
          },
        }}>
          <Row>
            <Col span="24">
              <About />
            </Col>
          </Row>
        </Layout>
      </Fragment>
    )
  }
}
