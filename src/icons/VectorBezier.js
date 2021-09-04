import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.8,9.9a3.61,3.61,0,0,0-3,3.3" />
    <path fill="none" d="M13.2,9.9a3.61,3.61,0,0,1,3,3.3" />
    <line x1="10.8" y1="9.6" x2="7.2" y2="9.6" />
    <line x1="16.8" y1="9.6" x2="13.2" y2="9.6" />
    <rect fill="none" x="6.6" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect fill="none" x="15" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect fill="none" x="10.8" y="8.4" width="2.4" height="2.4" rx="0.6" />
    <circle fill="none" cx="6.6" cy="9.6" r="0.6" />
    <circle fill="none" cx="17.4" cy="9.6" r="0.6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M10.8,9.9a3.61,3.61,0,0,0-3,3.3" />
    <path fill="none" d="M13.2,9.9a3.61,3.61,0,0,1,3,3.3" />
    <line x1="10.8" y1="9.6" x2="7.2" y2="9.6" />
    <line x1="16.8" y1="9.6" x2="13.2" y2="9.6" />
    <rect x="6.6" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect x="15" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect x="10.8" y="8.4" width="2.4" height="2.4" rx="0.6" />
    <circle cx="6.6" cy="9.6" r="0.6" />
    <circle cx="17.4" cy="9.6" r="0.6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.8,9.9a3.61,3.61,0,0,0-3,3.3" />
    <path fill="none" d="M13.2,9.9a3.61,3.61,0,0,1,3,3.3" />
    <line x1="10.8" y1="9.6" x2="7.2" y2="9.6" />
    <line x1="16.8" y1="9.6" x2="13.2" y2="9.6" />
    <rect fillOpacity=".2" x="6.6" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect fillOpacity=".2" x="15" y="13.2" width="2.4" height="2.4" rx="0.6" />
    <rect fillOpacity=".2" x="10.8" y="8.4" width="2.4" height="2.4" rx="0.6" />
    <circle fillOpacity=".2" cx="6.6" cy="9.6" r="0.6" />
    <circle fillOpacity=".2" cx="17.4" cy="9.6" r="0.6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M10.8,9.9a3.61,3.61,0,0,0-3,3.3" />
    <path fill="none" d="M13.2,9.9a3.61,3.61,0,0,1,3,3.3" />
    <line x1="10.8" y1="9.6" x2="7.2" y2="9.6" />
    <line x1="16.8" y1="9.6" x2="13.2" y2="9.6" />
    <rect
      fill={secondaryColor}
      x="6.6"
      y="13.2"
      width="2.4"
      height="2.4"
      rx="0.6"
    />
    <rect
      fill={secondaryColor}
      x="15"
      y="13.2"
      width="2.4"
      height="2.4"
      rx="0.6"
    />
    <rect
      fill={secondaryColor}
      x="10.8"
      y="8.4"
      width="2.4"
      height="2.4"
      rx="0.6"
    />
    <circle fill={secondaryColor} cx="6.6" cy="9.6" r="0.6" />
    <circle fill={secondaryColor} cx="17.4" cy="9.6" r="0.6" />
  </Fragment>
);

const VectorBezier = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default VectorBezier;
