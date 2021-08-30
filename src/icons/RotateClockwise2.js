import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.72,6.44a6,6,0,1,1,4.49,11.15h0" />
    <line fill="none" x1="7.2" y1="8.39" x2="7.2" y2="8.4" />
    <line fill="none" x1="6.02" y1="11.26" x2="6.02" y2="11.27" />
    <line fill="none" x1="6.45" y1="14.33" x2="6.45" y2="14.34" />
    <line fill="none" x1="8.34" y1="16.78" x2="8.34" y2="16.79" />
    <line fill="none" x1="11.22" y1="17.96" x2="11.22" y2="17.96" />
    <polyline fill="none" points="14.21 14.26 14.21 18 17.95 18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M9.72,6.44a6,6,0,1,1,4.49,11.15h0" />
    <line fill="none" x1="7.2" y1="8.39" x2="7.2" y2="8.4" />
    <line fill="none" x1="6.02" y1="11.26" x2="6.02" y2="11.27" />
    <line fill="none" x1="6.45" y1="14.33" x2="6.45" y2="14.34" />
    <line fill="none" x1="8.34" y1="16.78" x2="8.34" y2="16.79" />
    <line fill="none" x1="11.22" y1="17.96" x2="11.22" y2="17.96" />
    <polyline fill="none" points="14.21 14.26 14.21 18 17.95 18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.72,6.44a6,6,0,1,1,4.49,11.15h0" />
    <line fill="none" strokeOpacity=".2" x1="7.2" y1="8.39" x2="7.2" y2="8.4" />
    <line
      fill="none"
      strokeOpacity=".2"
      x1="6.02"
      y1="11.26"
      x2="6.02"
      y2="11.27"
    />
    <line
      fill="none"
      strokeOpacity=".2"
      x1="6.45"
      y1="14.33"
      x2="6.45"
      y2="14.34"
    />
    <line
      fill="none"
      strokeOpacity=".2"
      x1="8.34"
      y1="16.78"
      x2="8.34"
      y2="16.79"
    />
    <line
      fill="none"
      strokeOpacity=".2"
      x1="11.22"
      y1="17.96"
      x2="11.22"
      y2="17.96"
    />
    <polyline fill="none" points="14.21 14.26 14.21 18 17.95 18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M9.72,6.44a6,6,0,1,1,4.49,11.15h0" />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="7.2"
      y1="8.39"
      x2="7.2"
      y2="8.4"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="6.02"
      y1="11.26"
      x2="6.02"
      y2="11.27"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="6.45"
      y1="14.33"
      x2="6.45"
      y2="14.34"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="8.34"
      y1="16.78"
      x2="8.34"
      y2="16.79"
    />
    <line
      fill="none"
      stroke={secondaryColor}
      x1="11.22"
      y1="17.96"
      x2="11.22"
      y2="17.96"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="14.21 14.26 14.21 18 17.95 18"
    />
  </Fragment>
);

const RotateClockwise2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RotateClockwise2;
