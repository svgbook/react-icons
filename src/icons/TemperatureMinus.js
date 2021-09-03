import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.68,2.68,0,0,1,0,4.63Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.68,2.68,0,0,1,0,4.63Z" />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.68,2.68,0,0,1,0,4.63Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line strokeOpacity=".2" x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.68,2.68,0,0,1,0,4.63Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line stroke={secondaryColor} x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
  </Fragment>
);

const TemperatureMinus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TemperatureMinus;
