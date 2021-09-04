import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="16.02" r="0.67" />
    <path
      fill="none"
      d="M6,10l3.67,3.67a3.33,3.33,0,0,1,4.66,0L18,10A8,8,0,0,0,6,10"
    />
    <line x1="12" y1="16.02" x2="10.53" y2="7.49" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle fill="none" cx="12" cy="16.02" r="0.67" />
    <path d="M6,10l3.67,3.67a3.33,3.33,0,0,1,4.66,0L18,10A8,8,0,0,0,6,10" />
    <line x1="12" y1="16.02" x2="10.53" y2="7.49" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="16.02" r="0.67" />
    <path
      fillOpacity=".2"
      d="M6,10l3.67,3.67a3.33,3.33,0,0,1,4.66,0L18,10A8,8,0,0,0,6,10"
    />
    <line x1="12" y1="16.02" x2="10.53" y2="7.49" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="12" cy="16.02" r="0.67" />
    <path
      fill={secondaryColor}
      d="M6,10l3.67,3.67a3.33,3.33,0,0,1,4.66,0L18,10A8,8,0,0,0,6,10"
    />
    <line x1="12" y1="16.02" x2="10.53" y2="7.49" />
  </Fragment>
);

const Wiper = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wiper;
