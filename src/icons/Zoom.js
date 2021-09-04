import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.67" cy="10.67" r="4.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="10.67" cy="10.67" r="4.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.67" cy="10.67" r="4.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.67" cy="10.67" r="4.67" />
    <line x1="18" y1="18" x2="14" y2="14" />
  </Fragment>
);

const Zoom = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Zoom;
