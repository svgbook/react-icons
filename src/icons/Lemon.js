import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.94,6A7,7,0,0,1,6,15.94L15.94,6" />
    <path fill="none" d="M7.74,14.2A4.57,4.57,0,0,0,14.2,7.74h0" />
    <path fill="none" d="M11,11,14.2,14.2" />
    <path fill="none" d="M11,11v4.47" />
    <path fill="none" d="M11,11h4.47" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M15.94,15.94a7,7,0,0,1-9.94,0L7.74,14.2A4.57,4.57,0,0,0,14.2,7.74L15.94,6A7,7,0,0,1,15.94,15.94Z" />
    <polyline fill="none" points="14.2 7.74 10.97 10.97 7.74 14.2" />
    <path fill="none" d="M11,11,14.2,14.2" />
    <path fill="none" d="M11,11v4.47" />
    <path fill="none" d="M11,11h4.47" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M15.94,6A7,7,0,0,1,6,15.94L15.94,6" />
    <path fill="none" d="M7.74,14.2A4.57,4.57,0,0,0,14.2,7.74h0" />
    <path fill="none" d="M11,11,14.2,14.2" />
    <path fill="none" d="M11,11v4.47" />
    <path fill="none" d="M11,11h4.47" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M15.94,6A7,7,0,0,1,6,15.94L15.94,6" />
    <path fill="none" d="M7.74,14.2A4.57,4.57,0,0,0,14.2,7.74h0" />
    <path fill="none" d="M11,11,14.2,14.2" />
    <path fill="none" d="M11,11v4.47" />
    <path fill="none" d="M11,11h4.47" />
  </Fragment>
);

const Lemon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Lemon;
