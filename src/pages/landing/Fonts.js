import React, { Component } from 'react'

import WebFont from 'webfontloader'
import {
  families
} from '../../../CONFIG'

class Fonts extends Component {
	componentDidMount () {
  	if (typeof window !== 'undefined') {
    	WebFont.load({
      	google: {
        	families
        }
      });
    }
  }

  render () {
  	return (<div className='FontsComponent'></div>)
  }
}

export default Fonts
