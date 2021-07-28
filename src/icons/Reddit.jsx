import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12.33,9.33a7.14,7.14,0,0,1,4.45,1.43,1.67,1.67,0,0,1,1.55,2.91c0,2.39-2.68,4.33-6,4.33s-5.89-1.87-6-4.2l-.66-.13a1.67,1.67,0,0,1,1.55-2.91,7.16,7.16,0,0,1,4.45-1.43Z'
    />
    <path fill='none' d='M12.33,9.33,13,6l4,.67' />
    <circle fill='none' cx='17' cy='6.67' r='0.67' />
    <circle fill='none' cx='10.33' cy='12.67' r='0.33' />
    <circle fill='none' cx='14.33' cy='12.67' r='0.33' />
    <path
      fill='none'
      d='M11,15.33a2.86,2.86,0,0,0,1.33.34,2.9,2.9,0,0,0,1.34-.34'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.17,6.67c0,.18-.34.18-.34,0a.17.17,0,0,1,.34,0Z'
    />
    <path
      stroke='none'
      d='M19.38,11.62a2.18,2.18,0,0,0-2.49-1.41,7.63,7.63,0,0,0-4-1.36l.46-2.28L15.88,7A1.16,1.16,0,1,0,16,6l-3-.49a.49.49,0,0,0-.57.39l-.59,2.93h-.25a7.84,7.84,0,0,0-4.56,1.38A2.18,2.18,0,0,0,4.93,11a2.21,2.21,0,0,0-.41,1.61,2.14,2.14,0,0,0,.85,1.43.61.61,0,0,0,.2.09l.3.06C6.24,16.65,9,18.5,12.33,18.5s6.33-2,6.5-4.6A2.15,2.15,0,0,0,19.38,11.62ZM17,6.5a.17.17,0,0,1,.17.17c0,.18-.34.18-.34,0A.17.17,0,0,1,17,6.5ZM9.5,12.67a.84.84,0,0,1,.83-.84.85.85,0,0,1,.84.84.84.84,0,0,1-.84.83A.83.83,0,0,1,9.5,12.67Zm4.39,3.11a3.43,3.43,0,0,1-1.56.39,3.39,3.39,0,0,1-1.55-.39.5.5,0,0,1-.23-.67.49.49,0,0,1,.67-.22,2.36,2.36,0,0,0,2.22,0,.5.5,0,0,1,.45.89Zm.44-2.28a.83.83,0,0,1-.83-.83.84.84,0,0,1,.83-.84.85.85,0,0,1,.84.84A.84.84,0,0,1,14.33,13.5Z'
    />
    <path
      stroke='none'
      d='M10.33,12.33a.34.34,0,1,0,.34.34A.34.34,0,0,0,10.33,12.33Zm-.16.34a.16.16,0,0,1,.16-.17.17.17,0,0,1,.17.17C10.5,12.85,10.17,12.85,10.17,12.67Z'
    />
    <path
      stroke='none'
      d='M14.33,12.33a.34.34,0,1,0,.34.34A.34.34,0,0,0,14.33,12.33Zm-.16.34a.16.16,0,0,1,.16-.17.17.17,0,0,1,.17.17C14.5,12.85,14.17,12.85,14.17,12.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12.33,9.33a7.14,7.14,0,0,1,4.45,1.43,1.67,1.67,0,0,1,1.55,2.91c0,2.39-2.68,4.33-6,4.33s-5.89-1.87-6-4.2l-.66-.13a1.67,1.67,0,0,1,1.55-2.91,7.16,7.16,0,0,1,4.45-1.43Z'
    />
    <path fill='none' d='M12.33,9.33,13,6l4,.67' />
    <circle fill='none' cx='17' cy='6.67' r='0.67' />
    <circle fill='none' cx='10.33' cy='12.67' r='0.33' />
    <circle fill='none' cx='14.33' cy='12.67' r='0.33' />
    <path
      fill='none'
      d='M11,15.33a2.86,2.86,0,0,0,1.33.34,2.9,2.9,0,0,0,1.34-.34'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12.33,9.33a7.14,7.14,0,0,1,4.45,1.43,1.67,1.67,0,0,1,1.55,2.91c0,2.39-2.68,4.33-6,4.33s-5.89-1.87-6-4.2l-.66-.13a1.67,1.67,0,0,1,1.55-2.91,7.16,7.16,0,0,1,4.45-1.43Z'
    />
    <path fill='none' d='M12.33,9.33,13,6l4,.67' />
    <circle fill='none' cx='17' cy='6.67' r='0.67' />
    <circle fill='none' cx='10.33' cy='12.67' r='0.33' />
    <circle fill='none' cx='14.33' cy='12.67' r='0.33' />
    <path
      fill='none'
      d='M11,15.33a2.86,2.86,0,0,0,1.33.34,2.9,2.9,0,0,0,1.34-.34'
    />
  </Fragment>
)

const Raddit = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Raddit
