import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,17.34l.87-2.6A5,5,0,0,1,8.92,7.43a6.42,6.42,0,0,1,8.22,1.82,5,5,0,0,1-2.05,7.31,6.62,6.62,0,0,1-6,.11L6,17.34"
    />
    <line x1="12" y1="12.01" x2="12" y2="12.01" />
    <line x1="9.33" y1="12.01" x2="9.33" y2="12.01" />
    <line x1="14.66" y1="12.01" x2="14.66" y2="12.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.56,9A6.94,6.94,0,0,0,8.68,7a5.84,5.84,0,0,0-3,3.74,5.3,5.3,0,0,0,.66,4.08l-.79,2.37a.49.49,0,0,0,.1.49.48.48,0,0,0,.37.17h.1l3-.64A7.17,7.17,0,0,0,15.33,17a5.85,5.85,0,0,0,3-3.74A5.29,5.29,0,0,0,17.56,9ZM9.33,12.51a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.5.5,0,0,1,0,1Zm2.67,0a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm2.66,0a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.5.5,0,0,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,17.34l.87-2.6A5,5,0,0,1,8.92,7.43a6.42,6.42,0,0,1,8.22,1.82,5,5,0,0,1-2.05,7.31,6.62,6.62,0,0,1-6,.11L6,17.34"
    />
    <line x1="12" y1="12.01" x2="12" y2="12.01" />
    <line x1="9.33" y1="12.01" x2="9.33" y2="12.01" />
    <line x1="14.66" y1="12.01" x2="14.66" y2="12.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,17.34l.87-2.6A5,5,0,0,1,8.92,7.43a6.42,6.42,0,0,1,8.22,1.82,5,5,0,0,1-2.05,7.31,6.62,6.62,0,0,1-6,.11L6,17.34"
    />
    <line x1="12" y1="12.01" x2="12" y2="12.01" />
    <line x1="9.33" y1="12.01" x2="9.33" y2="12.01" />
    <line x1="14.66" y1="12.01" x2="14.66" y2="12.01" />
  </Fragment>
);

const Message = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Message;
