import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,6.67H10L11.33,10,9.67,11A7.26,7.26,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18,10.67,10.67,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67"
    />
    <path fill="none" d="M14,8.67A1.32,1.32,0,0,1,15.33,10" />
    <path fill="none" d="M14,6a4,4,0,0,1,4,4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.33,6.67H10L11.33,10,9.67,11A7.26,7.26,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18,10.67,10.67,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67" />
    <path fill="none" d="M14,8.67A1.32,1.32,0,0,1,15.33,10" />
    <path fill="none" d="M14,6a4,4,0,0,1,4,4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,6.67H10L11.33,10,9.67,11A7.26,7.26,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18,10.67,10.67,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14,8.67A1.32,1.32,0,0,1,15.33,10"
    />
    <path fill="none" strokeOpacity=".2" d="M14,6a4,4,0,0,1,4,4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,6.67H10L11.33,10,9.67,11A7.26,7.26,0,0,0,13,14.33l1-1.66L17.33,14v2.67A1.33,1.33,0,0,1,16,18,10.67,10.67,0,0,1,6,8,1.33,1.33,0,0,1,7.33,6.67"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14,8.67A1.32,1.32,0,0,1,15.33,10"
    />
    <path fill="none" stroke={secondaryColor} d="M14,6a4,4,0,0,1,4,4" />
  </Fragment>
);

const PhoneCall = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhoneCall;
