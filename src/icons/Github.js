import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.33,16.66c-2.88.94-2.88-1.67-4-2m8,3.35V15.66c0-.67.07-.94-.33-1.34,1.87-.2,3.68-.94,3.68-4a3.05,3.05,0,0,0-.87-2.14A2.78,2.78,0,0,0,16.75,6s-.73-.21-2.34.87a8.11,8.11,0,0,0-4.15,0C8.65,5.81,7.92,6,7.92,6a2.78,2.78,0,0,0-.07,2.14A3.05,3.05,0,0,0,7,10.3c0,3.08,1.81,3.82,3.68,4a1.39,1.39,0,0,0-.33,1.34V18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M10.33,16.66c-2.88.94-2.88-1.67-4-2m8,3.35V15.66c0-.67.07-.94-.33-1.34,1.87-.2,3.68-.94,3.68-4a3.05,3.05,0,0,0-.87-2.14A2.78,2.78,0,0,0,16.75,6s-.73-.21-2.34.87a8.11,8.11,0,0,0-4.15,0C8.65,5.81,7.92,6,7.92,6a2.78,2.78,0,0,0-.07,2.14A3.05,3.05,0,0,0,7,10.3c0,3.08,1.81,3.82,3.68,4a1.39,1.39,0,0,0-.33,1.34V18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.33,16.66c-2.88.94-2.88-1.67-4-2m8,3.35V15.66c0-.67.07-.94-.33-1.34,1.87-.2,3.68-.94,3.68-4a3.05,3.05,0,0,0-.87-2.14A2.78,2.78,0,0,0,16.75,6s-.73-.21-2.34.87a8.11,8.11,0,0,0-4.15,0C8.65,5.81,7.92,6,7.92,6a2.78,2.78,0,0,0-.07,2.14A3.05,3.05,0,0,0,7,10.3c0,3.08,1.81,3.82,3.68,4a1.39,1.39,0,0,0-.33,1.34V18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M10.33,16.66c-2.88.94-2.88-1.67-4-2m8,3.35V15.66c0-.67.07-.94-.33-1.34,1.87-.2,3.68-.94,3.68-4a3.05,3.05,0,0,0-.87-2.14A2.78,2.78,0,0,0,16.75,6s-.73-.21-2.34.87a8.11,8.11,0,0,0-4.15,0C8.65,5.81,7.92,6,7.92,6a2.78,2.78,0,0,0-.07,2.14A3.05,3.05,0,0,0,7,10.3c0,3.08,1.81,3.82,3.68,4a1.39,1.39,0,0,0-.33,1.34V18'
    />
  </Fragment>
)

const Github = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Github
