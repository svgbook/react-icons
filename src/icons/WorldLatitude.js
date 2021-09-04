import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="7.07" y1="8.67" x2="16.93" y2="8.67" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="7.07" y1="15.33" x2="16.93" y2="15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path stroke="none" d="M17.24,15.83a6.48,6.48,0,0,1-10.48,0Z" />
    <path
      stroke="none"
      d="M18.48,12.5a6.12,6.12,0,0,1-.64,2.33H6.16a6.12,6.12,0,0,1-.64-2.33Z"
    />
    <path
      stroke="none"
      d="M18.48,11.5h-13a6.12,6.12,0,0,1,.64-2.33H17.84A6.12,6.12,0,0,1,18.48,11.5Z"
    />
    <path stroke="none" d="M17.24,8.17H6.76a6.48,6.48,0,0,1,10.48,0Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="7.07" y1="8.67" x2="16.93" y2="8.67" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="7.07" y1="15.33" x2="16.93" y2="15.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="7.07" y1="8.67" x2="16.93" y2="8.67" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="7.07" y1="15.33" x2="16.93" y2="15.33" />
  </Fragment>
);

const WorldLatitude = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WorldLatitude;
