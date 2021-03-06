import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18'
    />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='10' y1='9.33' x2='10.67' y2='9.33' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='10' y1='14.67' x2='10.67' y2='14.67' />
    <line x1='13.33' y1='9.33' x2='14' y2='9.33' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='13.33' y1='14.67' x2='14' y2='14.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18,17.5h-.83V7.33A1.84,1.84,0,0,0,15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33V17.5H6a.5.5,0,0,0,0,1H18a.5.5,0,0,0,0-1Zm-7.33-2.33H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.67a.5.5,0,0,1,.5.5A.51.51,0,0,1,10.67,15.17Zm0-2.67H10a.5.5,0,0,1,0-1h.67a.5.5,0,1,1,0,1Zm0-2.67H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.67a.51.51,0,0,1,.5.5A.5.5,0,0,1,10.67,9.83ZM14,15.17h-.67a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5H14a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,15.17Zm0-2.67h-.67a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Zm0-2.67h-.67a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5H14a.5.5,0,0,1,.5.5A.5.5,0,0,1,14,9.83Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18'
    />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='10' y1='9.33' x2='10.67' y2='9.33' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='10' y1='14.67' x2='10.67' y2='14.67' />
    <line x1='13.33' y1='9.33' x2='14' y2='9.33' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='13.33' y1='14.67' x2='14' y2='14.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18'
    />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='10' y1='9.33' x2='10.67' y2='9.33' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='10' y1='14.67' x2='10.67' y2='14.67' />
    <line x1='13.33' y1='9.33' x2='14' y2='9.33' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='13.33' y1='14.67' x2='14' y2='14.67' />
  </Fragment>
)

const Building = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Building
