import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.33,6.67H16A1.32,1.32,0,0,1,17.33,8v6.67" />
    <path fill="none" d="M13.81,11.14a2,2,0,0,0-1-1" />
    <path
      fill="none"
      d="M10.59,10.58a2,2,0,0,0,2.81,2.85l0,0L17,16.94a1.34,1.34,0,0,1-.95.39H8A1.32,1.32,0,0,1,6.67,16V8a1.32,1.32,0,0,1,.39-.94Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M9.33,6.67H16A1.32,1.32,0,0,1,17.33,8v6.67" />
    <path fill="none" d="M13.81,11.14a2,2,0,0,0-1-1" />
    <path d="M10.59,10.58a2,2,0,0,0,2.81,2.85l0,0L17,16.94a1.34,1.34,0,0,1-.95.39H8A1.32,1.32,0,0,1,6.67,16V8a1.32,1.32,0,0,1,.39-.94Z" />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.33,6.67H16A1.32,1.32,0,0,1,17.33,8v6.67" />
    <path fill="none" d="M13.81,11.14a2,2,0,0,0-1-1" />
    <path
      fillOpacity=".2"
      d="M10.59,10.58a2,2,0,0,0,2.81,2.85l0,0L17,16.94a1.34,1.34,0,0,1-.95.39H8A1.32,1.32,0,0,1,6.67,16V8a1.32,1.32,0,0,1,.39-.94Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M9.33,6.67H16A1.32,1.32,0,0,1,17.33,8v6.67" />
    <path fill="none" d="M13.81,11.14a2,2,0,0,0-1-1" />
    <path
      fill={secondaryColor}
      d="M10.59,10.58a2,2,0,0,0,2.81,2.85l0,0L17,16.94a1.34,1.34,0,0,1-.95.39H8A1.32,1.32,0,0,1,6.67,16V8a1.32,1.32,0,0,1,.39-.94Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

const MaskOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MaskOff;
