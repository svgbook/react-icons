import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
    <rect fill="none" x="9" y="11.25" width="6" height="3.75" rx="0.75" />
    <path fill="none" d="M10.5,11.25V9.75a1.5,1.5,0,0,1,3,0v1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
    <rect x="9" y="11.25" width="6" height="3.75" rx="0.75" />
    <path fill="none" d="M10.5,11.25V9.75a1.5,1.5,0,0,1,3,0v1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
    <rect fillOpacity=".2" x="9" y="11.25" width="6" height="3.75" rx="0.75" />
    <path fill="none" d="M10.5,11.25V9.75a1.5,1.5,0,0,1,3,0v1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9" />
    <path fill="none" d="M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9" />
    <path fill="none" d="M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9" />
    <path fill="none" d="M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15" />
    <rect
      fill={secondaryColor}
      x="9"
      y="11.25"
      width="6"
      height="3.75"
      rx="0.75"
    />
    <path fill="none" d="M10.5,11.25V9.75a1.5,1.5,0,0,1,3,0v1.5" />
  </Fragment>
);

const LockAccess = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LockAccess;
