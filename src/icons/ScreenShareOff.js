import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12v2a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66h6"
    />
    <line x1="8.67" y1="17.33" x2="15.33" y2="17.33" />
    <line x1="10" y1="14.67" x2="10" y2="17.33" />
    <line x1="14" y1="14.67" x2="14" y2="17.33" />
    <path d="M15.33,9.33,18,6.67" />
    <line x1="15.33" y1="6.67" x2="18" y2="9.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,12v2a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66h6"
    />
    <line x1="8.67" y1="17.33" x2="15.33" y2="17.33" />
    <line x1="10" y1="14.67" x2="10" y2="17.33" />
    <line x1="14" y1="14.67" x2="14" y2="17.33" />
    <path d="M15.33,9.33,18,6.67" />
    <line x1="15.33" y1="6.67" x2="18" y2="9.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12v2a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66h6"
    />
    <line x1="8.67" y1="17.33" x2="15.33" y2="17.33" />
    <line x1="10" y1="14.67" x2="10" y2="17.33" />
    <line x1="14" y1="14.67" x2="14" y2="17.33" />
    <path strokeOpacity=".2" d="M15.33,9.33,18,6.67" />
    <line strokeOpacity=".2" x1="15.33" y1="6.67" x2="18" y2="9.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,12v2a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66h6"
    />
    <line x1="8.67" y1="17.33" x2="15.33" y2="17.33" />
    <line x1="10" y1="14.67" x2="10" y2="17.33" />
    <line x1="14" y1="14.67" x2="14" y2="17.33" />
    <path stroke={secondaryColor} d="M15.33,9.33,18,6.67" />
    <line stroke={secondaryColor} x1="15.33" y1="6.67" x2="18" y2="9.33" />
  </Fragment>
);

const ScreenShareOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ScreenShareOff;
