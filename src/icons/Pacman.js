import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.41,7.76a6,6,0,0,1,8.49,0,4.14,4.14,0,0,1,.44.5L13.6,12l3.74,3.75A6,6,0,0,1,8,8.25C8.11,8.08,8.26,7.91,8.41,7.76Z"
    />
    <circle cx="12.32" cy="9" r="0.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M14.3,12l3.4-3.39a.52.52,0,0,0,0-.67c-.16-.18-.32-.37-.49-.54a6.51,6.51,0,0,0-9.19,0,6.17,6.17,0,0,0-.48.54A6.5,6.5,0,0,0,12.65,18.5a6.06,6.06,0,0,0,.73,0,6.42,6.42,0,0,0,4.35-2.4.5.5,0,0,0,0-.67Zm-2-1.83A1.17,1.17,0,1,1,13.49,9,1.18,1.18,0,0,1,12.32,10.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M8.41,7.76a6,6,0,0,1,8.49,0,4.14,4.14,0,0,1,.44.5L13.6,12l3.74,3.75A6,6,0,0,1,8,8.25C8.11,8.08,8.26,7.91,8.41,7.76Z"
    />
    <circle cx="12.32" cy="9" r="0.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M8.41,7.76a6,6,0,0,1,8.49,0,4.14,4.14,0,0,1,.44.5L13.6,12l3.74,3.75A6,6,0,0,1,8,8.25C8.11,8.08,8.26,7.91,8.41,7.76Z"
    />
    <circle cx="12.32" cy="9" r="0.67" />
  </Fragment>
);

const Pacman = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pacman;
