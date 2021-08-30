import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M16.5,9a3,3,0,0,1-3,3h-6V6h6A3,3,0,0,1,16.5,9Z" />
    <line x1="7.5" y1="18" x2="7.5" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.5,9a3,3,0,0,1-3,3h-6V6h6A3,3,0,0,1,16.5,9Z" />
    <line x1="7.5" y1="18" x2="7.5" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M16.5,9a3,3,0,0,1-3,3h-6V6h6A3,3,0,0,1,16.5,9Z" />
    <line x1="7.5" y1="18" x2="7.5" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.5,9a3,3,0,0,1-3,3h-6V6h6A3,3,0,0,1,16.5,9Z"
    />
    <line x1="7.5" y1="18" x2="7.5" y2="12" />
  </Fragment>
);

const Parking = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Parking;
