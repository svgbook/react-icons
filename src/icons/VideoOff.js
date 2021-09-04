import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,11.33v-.66l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.68.68,0,0,1-.45.64"
    />
    <path fill="none" d="M10.67,8h2A1.34,1.34,0,0,1,14,9.33v2" />
    <path
      fill="none"
      d="M14,14v.67A1.34,1.34,0,0,1,12.67,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14,11.33v-.66l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.68.68,0,0,1-.45.64"
    />
    <path fill="none" d="M10.67,8h2A1.34,1.34,0,0,1,14,9.33v2" />
    <path d="M14,14v.67A1.34,1.34,0,0,1,12.67,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14,11.33v-.66l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.68.68,0,0,1-.45.64"
    />
    <path fill="none" d="M10.67,8h2A1.34,1.34,0,0,1,14,9.33v2" />
    <path
      fillOpacity=".2"
      d="M14,14v.67A1.34,1.34,0,0,1,12.67,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M14,11.33v-.66l3-1.52a.67.67,0,0,1,.89.3.6.6,0,0,1,.07.3v4.5a.68.68,0,0,1-.45.64"
    />
    <path fill="none" d="M10.67,8h2A1.34,1.34,0,0,1,14,9.33v2" />
    <path
      fill={secondaryColor}
      d="M14,14v.67A1.34,1.34,0,0,1,12.67,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const VideoOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default VideoOff;
