import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.67" cy="10.67" r="4.67" />
    <line x1="8.67" y1="10.67" x2="12.67" y2="10.67" />
    <line x1="10.67" y1="8.67" x2="10.67" y2="12.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.35,17.65,14.65,14a5.1,5.1,0,0,0,1.18-3.28,5.17,5.17,0,1,0-5.16,5.16A5.1,5.1,0,0,0,14,14.65l3.7,3.7a.48.48,0,0,0,.7,0A.48.48,0,0,0,18.35,17.65Zm-5.68-6.48h-1.5v1.5a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5H8.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5V8.67a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v1.5h1.5a.5.5,0,0,1,.5.5A.51.51,0,0,1,12.67,11.17Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.67" cy="10.67" r="4.67" />
    <line x1="8.67" y1="10.67" x2="12.67" y2="10.67" />
    <line x1="10.67" y1="8.67" x2="10.67" y2="12.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.67" cy="10.67" r="4.67" />
    <line x1="8.67" y1="10.67" x2="12.67" y2="10.67" />
    <line x1="10.67" y1="8.67" x2="10.67" y2="12.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

const ZoomIn = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZoomIn;
