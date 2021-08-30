import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.89,13.44A10.63,10.63,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67H10L11.33,10,9.67,11c.07.15.15.29.23.43"
    />
    <path
      fill="none"
      d="M11.06,13A7.37,7.37,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18a10.71,10.71,0,0,1-6.9-3.1Z"
    />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M7.89,13.44A10.63,10.63,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67H10L11.33,10,9.67,11c.07.15.15.29.23.43"
    />
    <path d="M11.06,13A7.37,7.37,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18a10.71,10.71,0,0,1-6.9-3.1Z" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M7.89,13.44A10.63,10.63,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67H10L11.33,10,9.67,11c.07.15.15.29.23.43"
    />
    <path
      fillOpacity=".2"
      d="M11.06,13A7.37,7.37,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18a10.71,10.71,0,0,1-6.9-3.1Z"
    />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M7.89,13.44A10.63,10.63,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67H10L11.33,10,9.67,11c.07.15.15.29.23.43"
    />
    <path
      fill={secondaryColor}
      d="M11.06,13A7.37,7.37,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18a10.71,10.71,0,0,1-6.9-3.1Z"
    />
    <line x1="6" y1="18" x2="18" y2="6" />
  </Fragment>
);

const PhoneOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhoneOff;
