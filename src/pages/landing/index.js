import React, { Component, Fragment } from 'react'
import {
  scroller
} from 'react-scroll'
import Header from './Header'
import MainSection from './MainSection'

import Layout from './Layout'
import HeadingArea from './HeadingArea'
import BackgroundImg from './HeadingArea/BackgroundImg'
import StepArea from './StepArea'
import TrianglesLayout from './TrianglesLayout'
import ClientBox from './ClientBox'
import ClientBoxLayout from './TrianglesLayout/ClientBoxLayout'
import TestimonialArea from './TestimonialArea'
import CostumerBox from './TestimonialArea/CostumerBox'
import ProcessArea from './ProcessArea'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const menuConfig = [
  {
    label: 'About us',
    href: "#",
    onClick: () => {
      scroller.scrollTo('About', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuint',
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
            width: '100%'
          },
          container: {
            height: '100vh',
            width: '100%'
          }
        }}>
          <Row>
            <Col span="24">
              <MainSection
              title='Software. Architected'
                body={
                  <span>
                    We are a creative software agency with a focus on business <br />
                    processes and cloud infrastructure.
                  </span>
                }
                Header={<Header menuConfig={menuConfig} />}
              >
              </MainSection>
            </Col>
          </Row>
        </Layout>
        <Layout styles={{
          container: {
            background: 'transparent',
            width: '100%'
          },
          body: {
            background: 'white',
            width: '100%'
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
            background: 'white',
            width: '100%'
          },
          container: {
            background: 'white',
            width: '100%'
          },
        }}
        >
          <Row>
            <Col span="24">
              <HeadingArea title='Qualities of our services' id='qualities'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </HeadingArea>
            </Col>
            <Col span="24">
              <StepArea 
                title="Durable"
                imgUri='/public/images/Group3.png'
                num={'01'}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam
              </StepArea>
              <StepArea 
                title="Scalable"
                imgUri='/public/images/Group3.png'
                num={'02'}
                reverse
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam
              </StepArea>
              <StepArea 
                title="Reliable"
                imgUri='/public/images/Group3.png'
                num={'03'}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam
              </StepArea>
            </Col>
          </Row>
        </Layout>
        <Row>
          <Col span="24">
            <TrianglesLayout Heading={
              <HeadingArea title='Past Client' id='qualities' propsStyles={{
                paddingBottom: 60,
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </HeadingArea>
            }>
            <ClientBoxLayout>
              <ClientBox />
              <ClientBox />
              <ClientBox />

              <ClientBox />
              <ClientBox />
              <ClientBox />
            </ClientBoxLayout>
            </TrianglesLayout>
          </Col>
          <Col span="24" style={{
            // display: 'flex',
            // width: "100%",
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column'
          }}>
            <TestimonialArea
              title="Testimonial"
              Body={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </span>
              }
            >
             <Row gutter={32}>
              <Col sm={24} md={25} lg={12}>
                  <CostumerBox avatar='' name='Glade stella' position='CEO Founder Google'>
                    "Lorem ipsum dolor sit amet,
                    consectetur adipiing elit, sed
                    do eiusmod tempor dor
                    incididunt ut labore 
                  </CostumerBox>
                </Col>
                <Col sm={24} md={25} lg={12}>
                  <CostumerBox avatar='' name='Glade stella' position='CEO Founder Google'>
                    "Lorem ipsum dolor sit amet,
                    consectetur adipiing elit, sed
                    do eiusmod tempor dor
                    incididunt ut labore 
                  </CostumerBox>
                </Col>
                <Col sm={24} md={25} lg={12}>
                  <CostumerBox avatar='' name='Glade stella' position='CEO Founder Google'>
                    "Lorem ipsum dolor sit amet,
                    consectetur adipiing elit, sed
                    do eiusmod tempor dor
                    incididunt ut labore 
                  </CostumerBox>
                </Col>
                <Col sm={24} md={25} lg={12}>
                  <CostumerBox avatar='' name='Glade stella' position='CEO Founder Google'>
                    "Lorem ipsum dolor sit amet,
                    consectetur adipiing elit, sed
                    do eiusmod tempor dor
                    incididunt ut labore 
                  </CostumerBox>
                </Col>
             </Row>
            </TestimonialArea>
          </Col>
        </Row>
        <Row span="25">
          <ProcessArea />
        </Row>
      </Fragment>
    )
  }
}
