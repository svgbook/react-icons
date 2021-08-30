import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,18H9.13l8.22-8.22a2.21,2.21,0,0,0-3.13-3.13L6,14.87V18"
    />
    <line x1="13.44" y1="7.43" x2="16.57" y2="10.56" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.56,11.27,9.48,18.35a.47.47,0,0,1-.35.15H6a.5.5,0,0,1-.5-.5V14.87a.47.47,0,0,1,.15-.35l7.08-7.08,3.13,3.13Z"
    />
    <path
      stroke="none"
      d="M17.71,10.13l-.44.43L13.44,6.73l.43-.44a2.72,2.72,0,0,1,3.84,3.84Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,18H9.13l8.22-8.22a2.21,2.21,0,0,0-3.13-3.13L6,14.87V18"
    />
    <line x1="13.44" y1="7.43" x2="16.57" y2="10.56" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,18H9.13l8.22-8.22a2.21,2.21,0,0,0-3.13-3.13L6,14.87V18"
    />
    <line x1="13.44" y1="7.43" x2="16.57" y2="10.56" />
  </Fragment>
);

const Pencil = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pencil;
