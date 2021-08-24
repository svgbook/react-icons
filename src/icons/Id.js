import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.67" width="12" height="10.67" rx="2" />
    <circle fill="none" cx="10" cy="10.67" r="1.33" />
    <line x1="14" y1="9.33" x2="15.33" y2="9.33" />
    <line x1="14" y1="12" x2="15.33" y2="12" />
    <line x1="8.67" y1="14.67" x2="15.33" y2="14.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16,6.17H8a2.5,2.5,0,0,0-2.5,2.5v6.66A2.5,2.5,0,0,0,8,17.83h8a2.5,2.5,0,0,0,2.5-2.5V8.67A2.5,2.5,0,0,0,16,6.17ZM10,8.83a1.84,1.84,0,1,1-1.83,1.84A1.84,1.84,0,0,1,10,8.83Zm5.33,6.34H8.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6.66a.5.5,0,0,1,.5.5A.5.5,0,0,1,15.33,15.17Zm0-2.67H14a.5.5,0,0,1,0-1h1.33a.5.5,0,0,1,0,1Zm0-2.67H14a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.33a.5.5,0,0,1,.5.5A.5.5,0,0,1,15.33,9.83Z"
    />
    <path
      stroke="none"
      d="M10.83,10.67a.83.83,0,1,1-1.66,0,.83.83,0,1,1,1.66,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6.67" width="12" height="10.67" rx="2" />
    <circle fill="none" cx="10" cy="10.67" r="1.33" />
    <line x1="14" y1="9.33" x2="15.33" y2="9.33" />
    <line x1="14" y1="12" x2="15.33" y2="12" />
    <line x1="8.67" y1="14.67" x2="15.33" y2="14.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="6.67"
      width="12"
      height="10.67"
      rx="2"
    />
    <circle fill="none" cx="10" cy="10.67" r="1.33" />
    <line x1="14" y1="9.33" x2="15.33" y2="9.33" />
    <line x1="14" y1="12" x2="15.33" y2="12" />
    <line x1="8.67" y1="14.67" x2="15.33" y2="14.67" />
  </Fragment>
);

const Id2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Id2;
