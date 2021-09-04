import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.33,6a14,14,0,0,1,0,12" />
    <path fill="none" d="M16.67,6a14,14,0,0,0,0,12" />
    <line x1="7.33" y1="12" x2="16.67" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7.33,6a14,14,0,0,1,0,12" />
    <path fill="none" d="M16.67,6a14,14,0,0,0,0,12" />
    <line x1="7.33" y1="12" x2="16.67" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M7.33,6a14,14,0,0,1,0,12" />
    <path fill="none" strokeOpacity=".2" d="M16.67,6a14,14,0,0,0,0,12" />
    <line x1="7.33" y1="12" x2="16.67" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M7.33,6a14,14,0,0,1,0,12" />
    <path fill="none" d="M16.67,6a14,14,0,0,0,0,12" />
    <line stroke={secondaryColor} x1="7.33" y1="12" x2="16.67" y2="12" />
  </Fragment>
);

const ZodiacPisces = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacPisces;
