import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='7.33' r='1.33' />
    <path
      fill='none'
      d='M17.33,12.33V15.5a.42.42,0,0,1,0,.22.53.53,0,0,1-.23.24l-3.65,1.72a3.29,3.29,0,0,1-2.84,0L6.94,16a.46.46,0,0,1-.27-.46V12.33'
    />
    <path
      fill='none'
      d='M7,12.14l3.76-1.55a3.39,3.39,0,0,1,2.58,0l3.76,1.55a.47.47,0,0,1,.25.61.53.53,0,0,1-.23.24l-3.65,1.7a3.36,3.36,0,0,1-2.84,0L6.94,13a.45.45,0,0,1-.23-.61A.47.47,0,0,1,7,12.14Z'
    />
    <line x1='12' y1='8.67' x2='12' y2='12.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='7.33' r='1.33' />
    <path
      fill='none'
      d='M17.33,12.33V15.5a.42.42,0,0,1,0,.22.53.53,0,0,1-.23.24l-3.65,1.72a3.29,3.29,0,0,1-2.84,0L6.94,16a.46.46,0,0,1-.27-.46V12.33'
    />
    <path d='M7,12.14l3.76-1.55a3.39,3.39,0,0,1,2.58,0l3.76,1.55a.47.47,0,0,1,.25.61.53.53,0,0,1-.23.24l-3.65,1.7a3.36,3.36,0,0,1-2.84,0L6.94,13a.45.45,0,0,1-.23-.61A.47.47,0,0,1,7,12.14Z' />
    <line x1='12' y1='8.67' x2='12' y2='12.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='7.33' r='1.33' />
    <path
      fill='none'
      d='M17.33,12.33V15.5a.42.42,0,0,1,0,.22.53.53,0,0,1-.23.24l-3.65,1.72a3.29,3.29,0,0,1-2.84,0L6.94,16a.46.46,0,0,1-.27-.46V12.33'
    />
    <path
      fillOpacity='.2'
      d='M7,12.14l3.76-1.55a3.39,3.39,0,0,1,2.58,0l3.76,1.55a.47.47,0,0,1,.25.61.53.53,0,0,1-.23.24l-3.65,1.7a3.36,3.36,0,0,1-2.84,0L6.94,13a.45.45,0,0,1-.23-.61A.47.47,0,0,1,7,12.14Z'
    />
    <line x1='12' y1='8.67' x2='12' y2='12.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='7.33' r='1.33' />
    <path
      fill='none'
      d='M17.33,12.33V15.5a.42.42,0,0,1,0,.22.53.53,0,0,1-.23.24l-3.65,1.72a3.29,3.29,0,0,1-2.84,0L6.94,16a.46.46,0,0,1-.27-.46V12.33'
    />
    <path
      fill={secondaryColor}
      d='M7,12.14l3.76-1.55a3.39,3.39,0,0,1,2.58,0l3.76,1.55a.47.47,0,0,1,.25.61.53.53,0,0,1-.23.24l-3.65,1.7a3.36,3.36,0,0,1-2.84,0L6.94,13a.45.45,0,0,1-.23-.61A.47.47,0,0,1,7,12.14Z'
    />
    <line x1='12' y1='8.67' x2='12' y2='12.67' />
  </Fragment>
)

const AppleArcade = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AppleArcade
