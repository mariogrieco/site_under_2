import React, { memo, Fragment } from 'react'

import Triangle from '../../Triangle'
import defaultStyles from './Layout.scss'

const Layout = ({
    children,
    img,
    styles,
    decorator
  }) => {
    styles = styles ? styles : {}
  return (
    <Fragment>
      <div className={defaultStyles.Layout} style={styles.container}>
        <div className={defaultStyles.LayoutBody} style={styles.body}> 
          {children}
        </div>
        {img &&
          <span className={defaultStyles.LayoutImg}>
            &nbsp;
          </span>
        }
        {decorator &&
        <div className={defaultStyles.LayoutTriangleArea}>
          <Triangle
            viewBox={'0 0 1000 90'}
            minHeight={'90px'}
            points={'1000 0 1000 90 0 90'}
            fill="#ebebfb"
          />
          <Triangle
            viewBox={'0 0 1000 50'}
            minHeight={'200px'}
            points={'1000 0 1000 50 0 50'}
            fill="white"
          />
        </div>
        }
      </div>
    </Fragment>
  )
}

export default memo(Layout)
