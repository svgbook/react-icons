import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
    <path fill="none" d="M10,13.34V12a.64.64,0,0,1,.66-.67H14" />
    <path fill="none" d="M12.67,10,14,11.33l-1.33,1.34" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18,10.65,13.35,6a2,2,0,0,0-2.7,0L6,10.65a2,2,0,0,0,0,2.7L10.65,18a2,2,0,0,0,2.7,0L18,13.35A2,2,0,0,0,18,10.65Zm-3.5.87h0a.57.57,0,0,1-.08.13l0,0h0L13,13a.49.49,0,0,1-.35.15.51.51,0,0,1-.36-.15.51.51,0,0,1,0-.71l.48-.48H10.66c-.11,0-.16.05-.16.17v1.34a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5V12a1.14,1.14,0,0,1,1.16-1.17h2.13l-.48-.48A.5.5,0,0,1,13,9.64L14.36,11a.44.44,0,0,1,.1.16.47.47,0,0,1,0,.38Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
    <path fill="none" d="M10,13.34V12a.64.64,0,0,1,.66-.67H14" />
    <path fill="none" d="M12.67,10,14,11.33l-1.33,1.34" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
    <path fill="none" d="M10,13.34V12a.64.64,0,0,1,.66-.67H14" />
    <path fill="none" d="M12.67,10,14,11.33l-1.33,1.34" />
  </Fragment>
);

const RoadSign = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RoadSign;
