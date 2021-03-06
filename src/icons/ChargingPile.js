import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='16.59' y1='8.47' x2='15.88' y2='9.18' />
    <path
      fill='none'
      d='M13.76,11.29h.71a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.77'
    />
    <rect fill='none' x='6.71' y='9.18' width='7.05' height='8.47' />
    <path
      fill='none'
      d='M6.71,9.18V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.41,1.41,0,0,1,1.41,1.41V9.18'
    />
    <path fill='none' d='M10.24,11.65,9.18,13.41h2.11l-1,1.77' />
    <line x1='14.47' y1='17.65' x2='13.76' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.35,9.53,16.94,8.12l-.7-.71a.51.51,0,0,0-.71,0,.5.5,0,0,0,0,.71l.35.35-.35.35a.5.5,0,0,0,0,.71.49.49,0,0,0,.35.15.51.51,0,0,0,.36-.15l.35-.35.91.91v4.73a.56.56,0,0,1-1.12,0V12.71a1.92,1.92,0,0,0-1.91-1.92h-.21v-3a1.92,1.92,0,0,0-1.91-1.91H8.12A1.92,1.92,0,0,0,6.21,7.76v9.39H6a.5.5,0,0,0,0,1h8.47a.5.5,0,0,0,0-1h-.21V11.79h.21a.92.92,0,0,1,.91.92v2.11a1.56,1.56,0,1,0,3.12,0V9.88A.47.47,0,0,0,18.35,9.53Zm-6.63,4.14-1.06,1.76a.5.5,0,0,1-.43.25.59.59,0,0,1-.25-.07.5.5,0,0,1-.17-.69l.6-1H9.18a.5.5,0,0,1-.44-.25.49.49,0,0,1,0-.51l1.06-1.76a.49.49,0,0,1,.68-.17.48.48,0,0,1,.17.68l-.6,1h1.23a.51.51,0,0,1,.44.26A.47.47,0,0,1,11.72,13.67Zm1.54-5h-6V7.76a.91.91,0,0,1,.91-.91h4.23a.91.91,0,0,1,.91.91Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='16.59' y1='8.47' x2='15.88' y2='9.18' />
    <path
      fill='none'
      d='M13.76,11.29h.71a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.77'
    />
    <rect fillOpacity='.2' x='6.71' y='9.18' width='7.05' height='8.47' />
    <path
      fill='none'
      d='M6.71,9.18V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.41,1.41,0,0,1,1.41,1.41V9.18'
    />
    <path fill='none' d='M10.24,11.65,9.18,13.41h2.11l-1,1.77' />
    <line x1='14.47' y1='17.65' x2='13.76' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='16.59' y1='8.47' x2='15.88' y2='9.18' />
    <path
      fill='none'
      d='M13.76,11.29h.71a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.77'
    />
    <rect fill={secondaryColor} x='6.71' y='9.18' width='7.05' height='8.47' />
    <path
      fill='none'
      d='M6.71,9.18V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.41,1.41,0,0,1,1.41,1.41V9.18'
    />
    <path fill='none' d='M10.24,11.65,9.18,13.41h2.11l-1,1.77' />
    <line x1='14.47' y1='17.65' x2='13.76' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
  </Fragment>
)

const ChargingPile = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChargingPile
