import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="16.74" cy="12.95" r="1.26" />
    <circle fill="none" cx="7.26" cy="15.47" r="1.26" />
    <circle fill="none" cx="12.95" cy="15.47" r="1.26" />
    <line x1="12.95" y1="16.74" x2="7.26" y2="16.74" />
    <path
      fill="none"
      d="M13,11.05v1.27H9.79V9.16h1.26A1.9,1.9,0,0,1,13,11.05Z"
    />
    <path fill="none" d="M13,12.32v1.89h-5V13a.63.63,0,0,1,.63-.63Z" />
    <path fill="none" d="M16.74,11.68V7.26L13,11.68" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="16.74" cy="12.95" r="1.26" />
    <circle cx="7.26" cy="15.47" r="1.26" />
    <circle cx="12.95" cy="15.47" r="1.26" />
    <line x1="12.95" y1="16.74" x2="7.26" y2="16.74" />
    <path d="M13,11.05v1.27H9.79V9.16h1.26A1.9,1.9,0,0,1,13,11.05Z" />
    <path d="M13,12.32v1.89h-5V13a.63.63,0,0,1,.63-.63Z" />
    <path fill="none" d="M16.74,11.68V7.26L13,11.68" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="16.74" cy="12.95" r="1.26" />
    <circle fill="none" cx="7.26" cy="15.47" r="1.26" />
    <circle fill="none" cx="12.95" cy="15.47" r="1.26" />
    <line x1="12.95" y1="16.74" x2="7.26" y2="16.74" />
    <path
      fillOpacity=".2"
      d="M13,11.05v1.27H9.79V9.16h1.26A1.9,1.9,0,0,1,13,11.05Z"
    />
    <path fillOpacity=".2" d="M13,12.32v1.89h-5V13a.63.63,0,0,1,.63-.63Z" />
    <path fill="none" d="M16.74,11.68V7.26L13,11.68" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="16.74" cy="12.95" r="1.26" />
    <circle fill="none" cx="7.26" cy="15.47" r="1.26" />
    <circle fill="none" cx="12.95" cy="15.47" r="1.26" />
    <line x1="12.95" y1="16.74" x2="7.26" y2="16.74" />
    <path
      fill={secondaryColor}
      d="M13,11.05v1.27H9.79V9.16h1.26A1.9,1.9,0,0,1,13,11.05Z"
    />
    <path
      fill={secondaryColor}
      d="M13,12.32v1.89h-5V13a.63.63,0,0,1,.63-.63Z"
    />
    <path fill="none" d="M16.74,11.68V7.26L13,11.68" />
  </Fragment>
);

const WreckingBallCrane = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WreckingBallCrane;
