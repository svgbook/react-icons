import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.33,6.33H10l1.33,3.34-1.66,1A7.31,7.31,0,0,0,13,14l1-1.67,3.33,1.34v2.66A1.33,1.33,0,0,1,16,17.67a10.67,10.67,0,0,1-10-10A1.34,1.34,0,0,1,7.33,6.33"
    />
    <path fill="none" d="M14,7.67,15.33,9,18,6.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.33,6.33H10l1.33,3.34-1.66,1A7.31,7.31,0,0,0,13,14l1-1.67,3.33,1.34v2.66A1.33,1.33,0,0,1,16,17.67a10.67,10.67,0,0,1-10-10A1.34,1.34,0,0,1,7.33,6.33" />
    <path fill="none" d="M14,7.67,15.33,9,18,6.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.33,6.33H10l1.33,3.34-1.66,1A7.31,7.31,0,0,0,13,14l1-1.67,3.33,1.34v2.66A1.33,1.33,0,0,1,16,17.67a10.67,10.67,0,0,1-10-10A1.34,1.34,0,0,1,7.33,6.33"
    />
    <path fill="none" strokeOpacity=".2" d="M14,7.67,15.33,9,18,6.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.33,6.33H10l1.33,3.34-1.66,1A7.31,7.31,0,0,0,13,14l1-1.67,3.33,1.34v2.66A1.33,1.33,0,0,1,16,17.67a10.67,10.67,0,0,1-10-10A1.34,1.34,0,0,1,7.33,6.33"
    />
    <path fill="none" stroke={secondaryColor} d="M14,7.67,15.33,9,18,6.33" />
  </Fragment>
);

const PhoneCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PhoneCheck;
