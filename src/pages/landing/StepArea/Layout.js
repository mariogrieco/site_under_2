import React, {
  Fragment
} from 'react'

export default ({
  LeftArea,
  RightArea,
  reverse
}) => {
  return (
    <Fragment>
      {reverse? RightArea : LeftArea}
      {reverse? LeftArea : RightArea}
    </Fragment>
  )
}
