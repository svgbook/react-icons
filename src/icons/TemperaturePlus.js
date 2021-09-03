import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.76,2.76,0,0,1,1,1A2.67,2.67,0,0,1,10.67,17.64Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
    <line x1="15.34" y1="8" x2="15.34" y2="12.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.76,2.76,0,0,1,1,1A2.67,2.67,0,0,1,10.67,17.64Z" />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
    <line x1="15.34" y1="8" x2="15.34" y2="12.01" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.76,2.76,0,0,1,1,1A2.67,2.67,0,0,1,10.67,17.64Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
    <line x1="15.34" y1="8" x2="15.34" y2="12.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10.67,17.64A2.67,2.67,0,1,1,8,13V10h2.68v3a2.76,2.76,0,0,1,1,1A2.67,2.67,0,0,1,10.67,17.64Z"
    />
    <path fill="none" d="M10.67,7.33V10H8V7.33a1.34,1.34,0,0,1,2.68,0Z" />
    <line stroke={secondaryColor} x1="13.34" y1="10.01" x2="17.35" y2="10.01" />
    <line stroke={secondaryColor} x1="15.34" y1="8" x2="15.34" y2="12.01" />
  </Fragment>
);

const TemperaturePlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TemperaturePlus;
