import React, { Component, Fragment } from 'react'
import {
  scroller
} from 'react-scroll'
import Header from './Header'
import MainSection from './MainSection'

import Layout from './Layout'
import HeadingArea from './HeadingArea'
import BackgroundImg from './HeadingArea/BackgroundImg'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const menuConfig = [
  {
    label: 'About us',
    href: "#",
    onClick: () => {
      scroller.scrollTo('About', {
        duration: 1200,
        delay: 50,
        smooth: 'easeInOutCubic',
        offset: 80,
        // containerId: 'AboutContainer'
      })
    }
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
  shouldComponentUpdate () {
    return false
  }
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
              title='Software. Architected'
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
          body: {
            background: 'white'
          },
        }}
        imgBackground={<BackgroundImg />}
        >
          <Row>
            <Col span="24" id="AboutContainer">
              <HeadingArea title='About us' id='About'>
                BitCraft is a creative software development agency based in Atlanta, Georgia. We design world-class infrastructures to support the tech products of
                tomorrow. We pride ourselves on our engineering standards, our understanding of our clients' business needs, and our desire to impact and power-up
                any business or individual that we interact with. Our team is proficient in designing and developing cloud infrastructures to power cross-platform mobile
                apps, interactive web apps, and fully automated systems.
              </HeadingArea>
            </Col>
          </Row>
        </Layout>
        <Layout styles={{
          body: {
            background: 'white'
          },
          container: {
            background: 'white'
          },
        }}
        >
          <Row>
            <Col span="24">
              <HeadingArea title='Qualities of our services' id='qualities'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </HeadingArea>
            </Col>
          </Row>
        </Layout>
      </Fragment>
    )
  }
}
