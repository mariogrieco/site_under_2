import React, { memo, Fragment } from 'react'

import LayoutTriangleArea from './LayoutTriangleArea'
import defaultStyles from './Layout.scss'
// import cd from 'classnames'

const Layout = ({
    children,
    img,
    styles,
    decorator,
    imgBackground
  }) => {
    styles = styles ? styles : {}
  return (
    <Fragment>
      <div className={defaultStyles.Layout} style={styles.container}>
        <div className={defaultStyles.LayoutBody} style={styles.body}>
          {children}
        </div>
        {img && <span className={defaultStyles.LayoutImg}></span>}
        {decorator && <LayoutTriangleArea />}
        {imgBackground}
      </div>
    </Fragment>
  )
}

export default memo(Layout)
