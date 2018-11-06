import React from 'react'

export default function Triangle ({
  minHeight,
  viewBox,
  points,
  fill
}) {
  return (
    <svg x="0" y="0" fill={fill} viewBox={viewBox} preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points={points}></polygon>
    </svg>
  )
}
