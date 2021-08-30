import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6.16" y1="6" x2="17.84" y2="17.69" />
    <path fill="none" d="M14,11.2A2,2,0,0,0,12,9.25" />
    <path fill="none" d="M9.44,6.68a5.19,5.19,0,0,1,7.08,7.08" />
    <path
      fill="none"
      d="M10.34,10.18A1.95,1.95,0,0,0,13,12.86l2.33,2.33-2.43,2.43a1.3,1.3,0,0,1-1.84,0L8.33,14.87a5.19,5.19,0,0,1-.31-7Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6.16" y1="6" x2="17.84" y2="17.69" />
    <path fill="none" d="M14,11.2A2,2,0,0,0,12,9.25" />
    <path fill="none" d="M9.44,6.68a5.19,5.19,0,0,1,7.08,7.08" />
    <path d="M10.34,10.18A1.95,1.95,0,0,0,13,12.86l2.33,2.33-2.43,2.43a1.3,1.3,0,0,1-1.84,0L8.33,14.87a5.19,5.19,0,0,1-.31-7Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10.34,10.18A1.95,1.95,0,0,0,13,12.86l2.33,2.33-2.43,2.43a1.3,1.3,0,0,1-1.84,0L8.33,14.87a5.19,5.19,0,0,1-.31-7Z"
    />
    <line x1="6.16" y1="6" x2="17.84" y2="17.69" />
    <path fill="none" d="M14,11.2A2,2,0,0,0,12,9.25" />
    <path fill="none" d="M9.44,6.68a5.19,5.19,0,0,1,7.08,7.08" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10.34,10.18A1.95,1.95,0,0,0,13,12.86l2.33,2.33-2.43,2.43a1.3,1.3,0,0,1-1.84,0L8.33,14.87a5.19,5.19,0,0,1-.31-7Z"
    />
    <line x1="6.16" y1="6" x2="17.84" y2="17.69" />
    <path fill="none" d="M14,11.2A2,2,0,0,0,12,9.25" />
    <path fill="none" d="M9.44,6.68a5.19,5.19,0,0,1,7.08,7.08" />
  </Fragment>
);

const MapPinOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MapPinOff;
