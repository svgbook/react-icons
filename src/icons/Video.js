import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z"
    />
    <rect fill="none" x="6" y="8" width="8" height="8" rx="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z" />
    <rect x="6" y="8" width="8" height="8" rx="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z"
    />
    <rect fillOpacity=".2" x="6" y="8" width="8" height="8" rx="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z"
    />
    <rect fill={secondaryColor} x="6" y="8" width="8" height="8" rx="1.33" />
  </Fragment>
);

const Video = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Video;
