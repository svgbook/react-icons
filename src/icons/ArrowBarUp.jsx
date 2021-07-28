import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='6' x2='15' y2='9' />
    <line x1='12' y1='6' x2='9' y2='9' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='6' x2='15' y2='9' />
    <line x1='12' y1='6' x2='9' y2='9' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='6' x2='15' y2='9' />
    <line x1='12' y1='6' x2='9' y2='9' />
    <line strokeOpacity='.2' x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='6' x2='15' y2='9' />
    <line x1='12' y1='6' x2='9' y2='9' />
    <line stroke={secondaryColor} x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

const ArrowBarUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBarUp
