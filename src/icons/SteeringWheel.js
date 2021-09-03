import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <circle fill="none" cx="12" cy="12" r="1.33" />
    <line x1="12" y1="13.33" x2="12" y2="18" />
    <line x1="10.67" y1="12" x2="6.17" y2="10.67" />
    <line x1="13.33" y1="12" x2="17.83" y2="10.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="1.33" />
    <line x1="12" y1="13.33" x2="12" y2="18" />
    <line x1="10.67" y1="12" x2="6.17" y2="10.67" />
    <line x1="13.33" y1="12" x2="17.83" y2="10.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="12" y1="13.33" x2="12" y2="18" />
    <line x1="10.67" y1="12" x2="6.17" y2="10.67" />
    <line x1="13.33" y1="12" x2="17.83" y2="10.67" />
    <circle fill="none" cx="12" cy="12" r="6" />
    <circle fillOpacity=".2" cx="12" cy="12" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="12" y1="13.33" x2="12" y2="18" />
    <line x1="10.67" y1="12" x2="6.17" y2="10.67" />
    <line x1="13.33" y1="12" x2="17.83" y2="10.67" />
    <circle fill="none" stroke={secondaryColor} cx="12" cy="12" r="6" />
    <circle fill={secondaryColor} cx="12" cy="12" r="1.33" />
  </Fragment>
);

const SteeringWheel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SteeringWheel;
