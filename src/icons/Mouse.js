import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="8" y="6" width="8" height="12" rx="2.67" />
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M13.33,5.5H10.67A3.17,3.17,0,0,0,7.5,8.67v6.66a3.17,3.17,0,0,0,3.17,3.17h2.66a3.17,3.17,0,0,0,3.17-3.17V8.67A3.17,3.17,0,0,0,13.33,5.5Zm-.83,5.83a.5.5,0,0,1-1,0V8.67a.5.5,0,0,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="8" y="6" width="8" height="12" rx="2.67" />
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="8" y="6" width="8" height="12" rx="2.67" />
    <line x1="12" y1="8.67" x2="12" y2="11.33" />
  </Fragment>
);

const Mouse = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mouse;
