import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="12" y1="12" x2="16.2" y2="16.2" />
    <line x1="12" y1="12" x2="7.8" y2="16.2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M11.5,5.52V11.8L7.78,15.52l-.71.7A6.43,6.43,0,0,1,5.5,12,6.52,6.52,0,0,1,11.5,5.52Z"
    />
    <path
      stroke="none"
      d="M18.5,12a6.43,6.43,0,0,1-1.57,4.22l-.71-.7L12.5,11.8V5.52A6.52,6.52,0,0,1,18.5,12Z"
    />
    <path stroke="none" d="M16.22,16.93a6.4,6.4,0,0,1-3.72,1.55V13.2l3,3Z" />
    <path stroke="none" d="M11.5,13.2v5.28a6.4,6.4,0,0,1-3.72-1.55l.7-.71Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="12" y1="12" x2="16.2" y2="16.2" />
    <line x1="12" y1="12" x2="7.8" y2="16.2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="12" y1="12" x2="16.2" y2="16.2" />
    <line x1="12" y1="12" x2="7.8" y2="16.2" />
  </Fragment>
);

const Peace = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Peace;
