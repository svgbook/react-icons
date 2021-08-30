import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="12.6" width="11.68" height="5.19" rx="1.3" />
    <line x1="15.08" y1="15.19" x2="15.08" y2="15.2" />
    <line x1="12.49" y1="15.19" x2="12.49" y2="15.2" />
    <line x1="13.78" y1="12.6" x2="13.78" y2="11.3" />
    <path fill="none" d="M11.68,9.84a2.57,2.57,0,0,1,4.21,0" />
    <path fill="none" d="M9.57,8.38a5.19,5.19,0,0,1,8.43,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.38,12.1h-2.1v-.8a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5v.8h-6a1.8,1.8,0,0,0-1.8,1.79v2.6a1.8,1.8,0,0,0,1.8,1.79h9.08a1.8,1.8,0,0,0,1.8-1.79v-2.6A1.8,1.8,0,0,0,16.38,12.1ZM13,15.2a.51.51,0,0,1-.5.5.51.51,0,1,1,.5-.51Zm2.59,0a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z"
    />
    <path
      stroke="none"
      d="M15.89,10.34a.48.48,0,0,1-.4-.21A2.18,2.18,0,0,0,15,9.65a2.11,2.11,0,0,0-2.93.48.5.5,0,1,1-.81-.58,3.09,3.09,0,0,1,4.32-.71,3,3,0,0,1,.71.71.5.5,0,0,1-.12.7A.52.52,0,0,1,15.89,10.34Z"
    />
    <path
      stroke="none"
      d="M18,8.88a.49.49,0,0,1-.41-.21,4.77,4.77,0,0,0-1.07-1.08A4.71,4.71,0,0,0,10,8.67a.49.49,0,0,1-.69.12.5.5,0,0,1-.12-.7A5.7,5.7,0,0,1,17.1,6.78a5.62,5.62,0,0,1,1.31,1.31.5.5,0,0,1-.12.7A.52.52,0,0,1,18,8.88Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect
      fillOpacity=".2"
      x="6"
      y="12.6"
      width="11.68"
      height="5.19"
      rx="1.3"
    />
    <line x1="15.08" y1="15.19" x2="15.08" y2="15.2" />
    <line x1="12.49" y1="15.19" x2="12.49" y2="15.2" />
    <line x1="13.78" y1="12.6" x2="13.78" y2="11.3" />
    <path fill="none" d="M11.68,9.84a2.57,2.57,0,0,1,4.21,0" />
    <path fill="none" d="M9.57,8.38a5.19,5.19,0,0,1,8.43,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="12.6"
      width="11.68"
      height="5.19"
      rx="1.3"
    />
    <line x1="15.08" y1="15.19" x2="15.08" y2="15.2" />
    <line x1="12.49" y1="15.19" x2="12.49" y2="15.2" />
    <line x1="13.78" y1="12.6" x2="13.78" y2="11.3" />
    <path fill="none" d="M11.68,9.84a2.57,2.57,0,0,1,4.21,0" />
    <path fill="none" d="M9.57,8.38a5.19,5.19,0,0,1,8.43,0" />
  </Fragment>
);

const Router = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Router;
