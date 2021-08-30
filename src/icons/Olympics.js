import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8" cy="10" r="2" />
    <circle fill="none" cx="16" cy="10" r="2" />
    <circle fill="none" cx="12" cy="10" r="2" />
    <circle fill="none" cx="10" cy="14" r="2" />
    <circle fill="none" cx="14" cy="14" r="2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle stroke="none" cx="8" cy="10" r="2" />
    <circle stroke="none" cx="16" cy="10" r="2" />
    <circle stroke="none" cx="12" cy="10" r="2" />
    <circle stroke="none" cx="10" cy="14" r="2" />
    <circle stroke="none" cx="14" cy="14" r="2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="8" cy="10" r="2" />
    <circle fillOpacity=".2" cx="16" cy="10" r="2" />
    <circle fillOpacity=".2" cx="12" cy="10" r="2" />
    <circle fillOpacity=".2" cx="10" cy="14" r="2" />
    <circle fillOpacity=".2" cx="14" cy="14" r="2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="8" cy="10" r="2" />
    <circle fill={secondaryColor} cx="16" cy="10" r="2" />
    <circle fill={secondaryColor} cx="12" cy="10" r="2" />
    <circle fill={secondaryColor} cx="10" cy="14" r="2" />
    <circle fill={secondaryColor} cx="14" cy="14" r="2" />
  </Fragment>
);

const Olympics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Olympics;
