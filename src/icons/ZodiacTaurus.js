import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8,6a4,4,0,0,0,8,0" />
    <circle fill="none" cx="12" cy="14" r="4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8,6a4,4,0,0,0,8,0" />
    <circle cx="12" cy="14" r="4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M8,6a4,4,0,0,0,8,0" />
    <circle fillOpacity=".2" cx="12" cy="14" r="4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M8,6a4,4,0,0,0,8,0" />
    <circle fill={secondaryColor} cx="12" cy="14" r="4" />
  </Fragment>
);

const ZodiacTaurus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacTaurus;
