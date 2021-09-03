import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M17.78,11H12.67V7.74C15.5,8,17.21,9.32,17.78,11Z" />
    <path
      fill="none"
      d="M12.67,7.74V11H9.33V7.67h2A11.42,11.42,0,0,1,12.67,7.74Z"
    />
    <rect fill="none" x="6" y="7.67" width="3.33" height="3.33" />
    <path
      fill="none"
      d="M18,12.33a1.34,1.34,0,0,1-1.33,1.34H6V11H17.78A4,4,0,0,1,18,12.33Z"
    />
    <line x1="6" y1="16.33" x2="18" y2="16.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M17.78,11H12.67V7.74C15.5,8,17.21,9.32,17.78,11Z" />
    <path d="M12.67,7.74V11H9.33V7.67h2A11.42,11.42,0,0,1,12.67,7.74Z" />
    <rect x="6" y="7.67" width="3.33" height="3.33" />
    <path d="M18,12.33a1.34,1.34,0,0,1-1.33,1.34H6V11H17.78A4,4,0,0,1,18,12.33Z" />
    <line x1="6" y1="16.33" x2="18" y2="16.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17.78,11H12.67V7.74C15.5,8,17.21,9.32,17.78,11Z"
    />
    <path
      fillOpacity=".2"
      d="M12.67,7.74V11H9.33V7.67h2A11.42,11.42,0,0,1,12.67,7.74Z"
    />
    <rect fillOpacity=".2" x="6" y="7.67" width="3.33" height="3.33" />
    <path
      fillOpacity=".2"
      d="M18,12.33a1.34,1.34,0,0,1-1.33,1.34H6V11H17.78A4,4,0,0,1,18,12.33Z"
    />
    <line strokeOpacity=".2" x1="6" y1="16.33" x2="18" y2="16.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M17.78,11H12.67V7.74C15.5,8,17.21,9.32,17.78,11Z" />
    <path
      fill={secondaryColor}
      d="M12.67,7.74V11H9.33V7.67h2A11.42,11.42,0,0,1,12.67,7.74Z"
    />
    <rect fill={secondaryColor} x="6" y="7.67" width="3.33" height="3.33" />
    <path
      fill={secondaryColor}
      d="M18,12.33a1.34,1.34,0,0,1-1.33,1.34H6V11H17.78A4,4,0,0,1,18,12.33Z"
    />
    <line stroke={secondaryColor} x1="6" y1="16.33" x2="18" y2="16.33" />
  </Fragment>
);

const Train = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Train;
