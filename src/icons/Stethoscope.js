import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.9,7H7.26A1.26,1.26,0,0,0,6,8.21v2.21H6a3.48,3.48,0,0,0,7,0V8.21A1.26,1.26,0,0,0,11.68,7h-.63"
    />
    <path fill="none" d="M9.16,13.89a3.79,3.79,0,0,0,7.58,0V12" />
    <path fill="none" d="M11.05,6.32V7.58" />
    <path fill="none" d="M7.9,6.32V7.58" />
    <circle fill="none" cx="16.74" cy="10.74" r="1.26" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M7.9,7H7.26A1.26,1.26,0,0,0,6,8.21v2.21H6a3.48,3.48,0,0,0,7,0V8.21A1.26,1.26,0,0,0,11.68,7h-.63"
    />
    <path fill="none" d="M9.16,13.89a3.79,3.79,0,0,0,7.58,0V12" />
    <path fill="none" d="M11.05,6.32V7.58" />
    <path fill="none" d="M7.9,6.32V7.58" />
    <circle cx="16.74" cy="10.74" r="1.26" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.9,7H7.26A1.26,1.26,0,0,0,6,8.21v2.21H6a3.48,3.48,0,0,0,7,0V8.21A1.26,1.26,0,0,0,11.68,7h-.63"
    />
    <path fill="none" d="M9.16,13.89a3.79,3.79,0,0,0,7.58,0V12" />
    <path fill="none" d="M11.05,6.32V7.58" />
    <path fill="none" d="M7.9,6.32V7.58" />
    <circle fill="none" strokeOpacity=".2" cx="16.74" cy="10.74" r="1.26" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M7.9,7H7.26A1.26,1.26,0,0,0,6,8.21v2.21H6a3.48,3.48,0,0,0,7,0V8.21A1.26,1.26,0,0,0,11.68,7h-.63"
    />
    <path fill="none" d="M9.16,13.89a3.79,3.79,0,0,0,7.58,0V12" />
    <path fill="none" stroke={secondaryColor} d="M11.05,6.32V7.58" />
    <path fill="none" stroke={secondaryColor} d="M7.9,6.32V7.58" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="16.74"
      cy="10.74"
      r="1.26"
    />
  </Fragment>
);

const Stethoscope = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Stethoscope;
