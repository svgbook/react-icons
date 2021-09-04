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
    <line x1="8.67" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.38,9.22a1.19,1.19,0,0,0-.68-.58,1.15,1.15,0,0,0-.89.06L14.5,9.86V9.33A1.83,1.83,0,0,0,12.67,7.5H7.33A1.83,1.83,0,0,0,5.5,9.33v5.34A1.83,1.83,0,0,0,7.33,16.5h5.34a1.83,1.83,0,0,0,1.83-1.83v-.53l2.31,1.16a1.17,1.17,0,0,0,1.69-1.05V9.75A1.18,1.18,0,0,0,18.38,9.22Zm-7,3.28H8.67a.5.5,0,0,1,0-1h2.66a.5.5,0,0,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z"
    />
    <rect fillOpacity=".2" x="6" y="8" width="8" height="8" rx="1.33" />
    <line x1="8.67" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14,10.67l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.67.67,0,0,1-.67.67.59.59,0,0,1-.29-.07l-3-1.52Z"
    />
    <rect fill={secondaryColor} x="6" y="8" width="8" height="8" rx="1.33" />
    <line x1="8.67" y1="12" x2="11.33" y2="12" />
  </Fragment>
);

const VideoMinus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default VideoMinus;
