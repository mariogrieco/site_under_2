import React from 'react'

import styles from './BlogCard.scss'

const BlogCard = ({
  title,
  children,
  imgUrl
}) => {
  return (
    <div className={styles.BlogCard}>
      <div>
        <img alt='' url={imgUrl} />
      </div>
      <div>
        <span>
          {title}
        </span>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
