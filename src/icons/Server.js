import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.67" width="12" height="5.33" rx="2" />
    <rect fill="none" x="6" y="12" width="12" height="5.33" rx="2" />
    <line x1="8.67" y1="9.33" x2="8.67" y2="9.34" />
    <line x1="8.67" y1="14.67" x2="8.67" y2="14.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.5,10V8.67A2.5,2.5,0,0,0,16,6.17H8a2.5,2.5,0,0,0-2.5,2.5V10a2.49,2.49,0,0,0,1,2,2.49,2.49,0,0,0-1,2v1.33A2.5,2.5,0,0,0,8,17.83h8a2.5,2.5,0,0,0,2.5-2.5V14a2.49,2.49,0,0,0-1-2A2.49,2.49,0,0,0,18.5,10ZM8.67,8.84a.5.5,0,0,1,.5.49h0a.5.5,0,0,1-.5.5.5.5,0,1,1,0-1Zm0,6.33a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6.67" width="12" height="5.33" rx="2" />
    <rect fillOpacity=".2" x="6" y="12" width="12" height="5.33" rx="2" />
    <line x1="8.67" y1="9.33" x2="8.67" y2="9.34" />
    <line x1="8.67" y1="14.67" x2="8.67" y2="14.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="6.67"
      width="12"
      height="5.33"
      rx="2"
    />
    <rect fill={secondaryColor} x="6" y="12" width="12" height="5.33" rx="2" />
    <line x1="8.67" y1="9.33" x2="8.67" y2="9.34" />
    <line x1="8.67" y1="14.67" x2="8.67" y2="14.67" />
  </Fragment>
);

const Server = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Server;
