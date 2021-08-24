import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.55,10.12a2.67,2.67,0,1,0,0,3.77h0A6.86,6.86,0,0,0,12,12a6.67,6.67,0,0,1,1.45-1.88,2.67,2.67,0,1,1,0,3.77h0A6.86,6.86,0,0,1,12,12a6.67,6.67,0,0,0-1.45-1.88"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10.55,10.12a2.67,2.67,0,1,0,0,3.77h0A6.86,6.86,0,0,0,12,12a6.67,6.67,0,0,1,1.45-1.88,2.67,2.67,0,1,1,0,3.77h0A6.86,6.86,0,0,1,12,12a6.67,6.67,0,0,0-1.45-1.88"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10.55,10.12a2.67,2.67,0,1,0,0,3.77h0A6.86,6.86,0,0,0,12,12a6.67,6.67,0,0,1,1.45-1.88,2.67,2.67,0,1,1,0,3.77h0A6.86,6.86,0,0,1,12,12a6.67,6.67,0,0,0-1.45-1.88"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10.55,10.12a2.67,2.67,0,1,0,0,3.77h0A6.86,6.86,0,0,0,12,12a6.67,6.67,0,0,1,1.45-1.88,2.67,2.67,0,1,1,0,3.77h0A6.86,6.86,0,0,1,12,12a6.67,6.67,0,0,0-1.45-1.88"
    />
  </Fragment>
);

const Infinity = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Infinity;
