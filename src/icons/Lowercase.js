import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8.33" cy="12" r="2.33" />
    <path d="M10.67,9.67v4.66" />
    <circle fill="none" cx="15.67" cy="12" r="2.33" />
    <path d="M18,9.67v4.66" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="8.33" cy="12" r="2.33" />
    <path d="M10.67,9.67v4.66" />
    <circle cx="15.67" cy="12" r="2.33" />
    <path d="M18,9.67v4.66" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="8.33" cy="12" r="2.33" />
    <path d="M10.67,9.67v4.66" />
    <circle fillOpacity=".2" cx="15.67" cy="12" r="2.33" />
    <path d="M18,9.67v4.66" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="8.33" cy="12" r="2.33" />
    <path d="M10.67,9.67v4.66" />
    <circle fill={secondaryColor} cx="15.67" cy="12" r="2.33" />
    <path d="M18,9.67v4.66" />
  </Fragment>
);

const Lowercase = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Lowercase;
