import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8.02" cy="12" r="1.99" />
    <path
      fill="none"
      d="M6,12c-.31-2.37,2.4-4.46,6.06-4.67a10,10,0,0,1,3.24.35"
    />
    <circle fill="none" cx="15.98" cy="12" r="1.99" />
    <path
      fill="none"
      d="M18,12c.31,2.37-2.4,4.46-6.05,4.67a10,10,0,0,1-3.25-.35"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="8.02" cy="12" r="1.99" />
    <path
      fill="none"
      d="M6,12c-.31-2.37,2.4-4.46,6.06-4.67a10,10,0,0,1,3.24.35"
    />
    <circle cx="15.98" cy="12" r="1.99" />
    <path
      fill="none"
      d="M18,12c.31,2.37-2.4,4.46-6.05,4.67a10,10,0,0,1-3.25-.35"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="8.02" cy="12" r="1.99" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,12c-.31-2.37,2.4-4.46,6.06-4.67a10,10,0,0,1,3.24.35"
    />
    <circle fill="none" cx="15.98" cy="12" r="1.99" />
    <path
      fill="none"
      d="M18,12c.31,2.37-2.4,4.46-6.05,4.67a10,10,0,0,1-3.25-.35"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="8.02" cy="12" r="1.99" />
    <path
      fill="none"
      d="M6,12c-.31-2.37,2.4-4.46,6.06-4.67a10,10,0,0,1,3.24.35"
    />
    <circle fill="none" stroke={secondaryColor} cx="15.98" cy="12" r="1.99" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,12c.31,2.37-2.4,4.46-6.05,4.67a10,10,0,0,1-3.25-.35"
    />
  </Fragment>
);

const ZodiacCancer = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacCancer;
