import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M11.67,6a7.46,7.46,0,0,0-1.56,10.44A7.21,7.21,0,0,0,11.67,18"
    />
    <path
      fill="none"
      d="M12.33,6a7.46,7.46,0,0,1,1.56,10.44A7.21,7.21,0,0,1,12.33,18"
    />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M10,6.87a8,8,0,0,0-.31,9.87l.31.39h0a7.69,7.69,0,0,0,1.34,1.27.42.42,0,0,0,.13.07h0a6.5,6.5,0,0,1,0-13h0a.42.42,0,0,0-.13.07A7.78,7.78,0,0,0,10,6.87Z"
    />
    <path
      stroke="none"
      d="M18.5,12a6.52,6.52,0,0,1-6,6.48h0a.42.42,0,0,0,.13-.07A8.13,8.13,0,0,0,14,17.13l.31-.39A8,8,0,0,0,14,6.87,7.78,7.78,0,0,0,12.63,5.6a.42.42,0,0,0-.13-.07h0A6.52,6.52,0,0,1,18.5,12Z"
    />
    <path
      stroke="none"
      d="M11.5,6.78V17.22a6.69,6.69,0,0,1-1-1.07A7,7,0,0,1,11.5,6.78Z"
    />
    <path
      stroke="none"
      d="M13.49,16.15a6.69,6.69,0,0,1-1,1.07V6.78A7,7,0,0,1,13.49,16.15Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M11.67,6a7.46,7.46,0,0,0-1.56,10.44A7.21,7.21,0,0,0,11.67,18"
    />
    <path
      fill="none"
      d="M12.33,6a7.46,7.46,0,0,1,1.56,10.44A7.21,7.21,0,0,1,12.33,18"
    />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <path
      fill="none"
      d="M11.67,6a7.46,7.46,0,0,0-1.56,10.44A7.21,7.21,0,0,0,11.67,18"
    />
    <path
      fill="none"
      d="M12.33,6a7.46,7.46,0,0,1,1.56,10.44A7.21,7.21,0,0,1,12.33,18"
    />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

const WorldLongitude = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default WorldLongitude;
