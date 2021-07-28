import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M11.78,8a2.92,2.92,0,0,0-3.11,2.44,2,2,0,0,1,2.17-.91,2.57,2.57,0,0,1,1.19.82,3.64,3.64,0,0,0,2.86,1.32A2.94,2.94,0,0,0,18,9.22a2,2,0,0,1-2.18.92,2.62,2.62,0,0,1-1.18-.83A3.62,3.62,0,0,0,11.78,8ZM9.11,12.33A2.94,2.94,0,0,0,6,14.78a2,2,0,0,1,2.18-.92,2.62,2.62,0,0,1,1.18.83A3.62,3.62,0,0,0,12.22,16a2.92,2.92,0,0,0,3.11-2.44,2,2,0,0,1-2.17.91A2.57,2.57,0,0,1,12,13.65,3.62,3.62,0,0,0,9.11,12.33Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M11.78,8a2.92,2.92,0,0,0-3.11,2.44,2,2,0,0,1,2.17-.91,2.57,2.57,0,0,1,1.19.82,3.64,3.64,0,0,0,2.86,1.32A2.94,2.94,0,0,0,18,9.22a2,2,0,0,1-2.18.92,2.62,2.62,0,0,1-1.18-.83A3.62,3.62,0,0,0,11.78,8ZM9.11,12.33A2.94,2.94,0,0,0,6,14.78a2,2,0,0,1,2.18-.92,2.62,2.62,0,0,1,1.18.83A3.62,3.62,0,0,0,12.22,16a2.92,2.92,0,0,0,3.11-2.44,2,2,0,0,1-2.17.91A2.57,2.57,0,0,1,12,13.65,3.62,3.62,0,0,0,9.11,12.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M11.78,8a2.92,2.92,0,0,0-3.11,2.44,2,2,0,0,1,2.17-.91,2.57,2.57,0,0,1,1.19.82,3.64,3.64,0,0,0,2.86,1.32A2.94,2.94,0,0,0,18,9.22a2,2,0,0,1-2.18.92,2.62,2.62,0,0,1-1.18-.83A3.62,3.62,0,0,0,11.78,8ZM9.11,12.33A2.94,2.94,0,0,0,6,14.78a2,2,0,0,1,2.18-.92,2.62,2.62,0,0,1,1.18.83A3.62,3.62,0,0,0,12.22,16a2.92,2.92,0,0,0,3.11-2.44,2,2,0,0,1-2.17.91A2.57,2.57,0,0,1,12,13.65,3.62,3.62,0,0,0,9.11,12.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M11.78,8a2.92,2.92,0,0,0-3.11,2.44,2,2,0,0,1,2.17-.91,2.57,2.57,0,0,1,1.19.82,3.64,3.64,0,0,0,2.86,1.32A2.94,2.94,0,0,0,18,9.22a2,2,0,0,1-2.18.92,2.62,2.62,0,0,1-1.18-.83A3.62,3.62,0,0,0,11.78,8ZM9.11,12.33A2.94,2.94,0,0,0,6,14.78a2,2,0,0,1,2.18-.92,2.62,2.62,0,0,1,1.18.83A3.62,3.62,0,0,0,12.22,16a2.92,2.92,0,0,0,3.11-2.44,2,2,0,0,1-2.17.91A2.57,2.57,0,0,1,12,13.65,3.62,3.62,0,0,0,9.11,12.33Z'
    />
  </Fragment>
)

const Tailwind = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tailwind