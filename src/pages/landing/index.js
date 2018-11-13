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
import ProcessBox from './ProcessArea/ProcessBox'

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
        <Row span="24">
          <ProcessArea>
            <Row gutter={32}>
              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Understand' imgUrl='/public/images/Group119.png' arrow='right'>
                  We take the time to learn about your project, why it
                  matters, and why it will be a huge success and
                  provide a lot of value to its users. We make sure we
                  ask you the hard questions so that you can refine your
                  idea, and so we can become die-hard fans that will
                  care as much as you do.
                </ProcessBox>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Research' imgUrl='/public/images/Group99.png' arrow='bottom'>
                  We learn about your business; not only what your
                  product is, but also what your business story is, how
                  your teams are structured, which tools you use to
                  operate your business, and how to better integrate
                  with the systems you already have in place.
                </ProcessBox>
              </Col>

              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Architect' imgUrl='/public/images/Group119.png' arrow='bottom'>
                  We fine-tune the entire technical ecosystem that will
                  surround your app. Based on your product needs,
                  your budget, and your urgency, we define how you
                  can leverage existing cloud tools to minimize
                  downtime and accelerate development speed.
                </ProcessBox>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Brainstorm' imgUrl='/public/images/Group102.png' arrow='left'>
                  We deliberate with the team what the best
                  languages, frameworks, tools, platforms, and
                  architecture patterns are for your needs. We debate
                  how to make your idea into a technical marvel, so that
                  you can keep focusing on ideating features that will
                  amaze your customers.
                </ProcessBox>
              </Col>

              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Develop' imgUrl='/public/images/Group101.png' arrow='right'>
                  We coordinate a balanced team of front-end
                  developers, back-end developers, mobile developers,
                  infrastructure developers, and UX designers to
                  execute and iterate on the architecture design that
                  we developed.
                </ProcessBox>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Collaborate' imgUrl='/public/images/Group109.png' arrow='bottom'>
                  We coordinate with the developers in your team to
                  design an automated continuous integration and
                  continuous delivery process that integrates with your
                  team's workflow, as well as finding out any possible
                  automations that could be injected into your current
                  development lifecycle.
                </ProcessBox>
              </Col>

              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Maintain' imgUrl='/public/images/Group113.png'>
                  We stay with you after development and deployment
                  to keep your services running as smoothly as
                  possible. We design the next steps when making
                  small or big structural changes to your app and do the
                  planning and plumbing to make it happen.
                </ProcessBox>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <ProcessBox title='Deploy' imgUrl='/public/images/Group122.png' arrow='left'>
                    We work with our infrastructure developers to setup
                    an automated deployment process for every piece of
                    your app, so that your developers do not have to
                    worry on how they can get their code into production,
                    and can instead focus on shipping new features.
                </ProcessBox>
              </Col>
            </Row>
          </ProcessArea>
        </Row>
      </Fragment>
    )
  }
}
