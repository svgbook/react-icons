import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="7.33" r="1.33" />
    <circle fill="none" cx="7.33" cy="16.67" r="1.33" />
    <circle fill="none" cx="16.67" cy="16.67" r="1.33" />
    <path fill="none" d="M8.33,15.67l3.67-3,3.67,3" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="7.33" r="1.33" />
    <circle cx="7.33" cy="16.67" r="1.33" />
    <circle cx="16.67" cy="16.67" r="1.33" />
    <path fill="none" d="M8.33,15.67l3.67-3,3.67,3" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="7.33" r="1.33" />
    <circle fillOpacity=".2" cx="7.33" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="16.67" cy="16.67" r="1.33" />
    <path fill="none" d="M8.33,15.67l3.67-3,3.67,3" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="7.33" r="1.33" />
    <circle fill={secondaryColor} cx="7.33" cy="16.67" r="1.33" />
    <circle fill={secondaryColor} cx="16.67" cy="16.67" r="1.33" />
    <path fill="none" d="M8.33,15.67l3.67-3,3.67,3" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

const Hierarchy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Hierarchy;
