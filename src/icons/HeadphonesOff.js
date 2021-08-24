import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <rect fill="none" x="6.67" y="12.67" width="3.33" height="4.67" rx="1.33" />
    <path fill="none" d="M15.33,12.67H16A1.32,1.32,0,0,1,17.33,14v.67" />
    <path
      fill="none"
      d="M6.67,14V12A5.29,5.29,0,0,1,8.23,8.23M9.81,7.14A5.33,5.33,0,0,1,17.33,12v2"
    />
    <path
      fill="none"
      d="M16.94,16.94a1.32,1.32,0,0,1-.94.39h-.67A1.33,1.33,0,0,1,14,16V14Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <rect x="6.67" y="12.67" width="3.33" height="4.67" rx="1.33" />
    <path fill="none" d="M15.33,12.67H16A1.32,1.32,0,0,1,17.33,14v.67" />
    <path
      fill="none"
      d="M6.67,14V12A5.29,5.29,0,0,1,8.23,8.23M9.81,7.14A5.33,5.33,0,0,1,17.33,12v2"
    />
    <path d="M16.94,16.94a1.32,1.32,0,0,1-.94.39h-.67A1.33,1.33,0,0,1,14,16V14Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <rect
      fillOpacity=".2"
      x="6.67"
      y="12.67"
      width="3.33"
      height="4.67"
      rx="1.33"
    />
    <path fill="none" d="M15.33,12.67H16A1.32,1.32,0,0,1,17.33,14v.67" />
    <path
      fill="none"
      d="M6.67,14V12A5.29,5.29,0,0,1,8.23,8.23M9.81,7.14A5.33,5.33,0,0,1,17.33,12v2"
    />
    <path
      fillOpacity=".2"
      d="M16.94,16.94a1.32,1.32,0,0,1-.94.39h-.67A1.33,1.33,0,0,1,14,16V14Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <rect
      fill={secondaryColor}
      x="6.67"
      y="12.67"
      width="3.33"
      height="4.67"
      rx="1.33"
    />
    <path fill="none" d="M15.33,12.67H16A1.32,1.32,0,0,1,17.33,14v.67" />
    <path
      fill="none"
      d="M6.67,14V12A5.29,5.29,0,0,1,8.23,8.23M9.81,7.14A5.33,5.33,0,0,1,17.33,12v2"
    />
    <path
      fill={secondaryColor}
      d="M16.94,16.94a1.32,1.32,0,0,1-.94.39h-.67A1.33,1.33,0,0,1,14,16V14Z"
    />
  </Fragment>
);

const HeadphonesOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default HeadphonesOff;
