import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.67,6.67h2.66L11.67,10,10,11a7.31,7.31,0,0,0,3.33,3.33l1-1.66L17.67,14v2.67A1.34,1.34,0,0,1,16.33,18a10.67,10.67,0,0,1-10-10A1.33,1.33,0,0,1,7.67,6.67"
    />
    <line x1="17.67" y1="6" x2="17.67" y2="8.67" />
    <line x1="15" y1="6" x2="15" y2="8.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.67,6.67h2.66L11.67,10,10,11a7.31,7.31,0,0,0,3.33,3.33l1-1.66L17.67,14v2.67A1.34,1.34,0,0,1,16.33,18a10.67,10.67,0,0,1-10-10A1.33,1.33,0,0,1,7.67,6.67" />
    <line x1="17.67" y1="6" x2="17.67" y2="8.67" />
    <line x1="15" y1="6" x2="15" y2="8.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.67,6.67h2.66L11.67,10,10,11a7.31,7.31,0,0,0,3.33,3.33l1-1.66L17.67,14v2.67A1.34,1.34,0,0,1,16.33,18a10.67,10.67,0,0,1-10-10A1.33,1.33,0,0,1,7.67,6.67"
    />
    <line strokeOpacity=".2" x1="17.67" y1="6" x2="17.67" y2="8.67" />
    <line strokeOpacity=".2" x1="15" y1="6" x2="15" y2="8.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.67,6.67h2.66L11.67,10,10,11a7.31,7.31,0,0,0,3.33,3.33l1-1.66L17.67,14v2.67A1.34,1.34,0,0,1,16.33,18a10.67,10.67,0,0,1-10-10A1.33,1.33,0,0,1,7.67,6.67"
    />
    <line stroke={secondaryColor} x1="17.67" y1="6" x2="17.67" y2="8.67" />
    <line stroke={secondaryColor} x1="15" y1="6" x2="15" y2="8.67" />
  </Fragment>
);

const PhoneHold = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhoneHold;
