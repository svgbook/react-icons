import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="6" x2="12" y2="14" />
    <line x1="14.67" y1="11.33" x2="12" y2="14" />
    <line x1="9.33" y1="11.33" x2="12" y2="14" />
    <circle fill="none" cx="12" cy="17.33" r="0.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="6" x2="12" y2="14" />
    <line x1="14.67" y1="11.33" x2="12" y2="14" />
    <line x1="9.33" y1="11.33" x2="12" y2="14" />
    <circle cx="12" cy="17.33" r="0.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="12" y1="6" x2="12" y2="14" />
    <line x1="14.67" y1="11.33" x2="12" y2="14" />
    <line x1="9.33" y1="11.33" x2="12" y2="14" />
    <circle fill="none" strokeOpacity=".2" cx="12" cy="17.33" r="0.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="12" y1="6" x2="12" y2="14" />
    <line stroke={secondaryColor} x1="14.67" y1="11.33" x2="12" y2="14" />
    <line stroke={secondaryColor} x1="9.33" y1="11.33" x2="12" y2="14" />
    <circle fill="none" cx="12" cy="17.33" r="0.67" />
  </Fragment>
);

const StepIn = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default StepIn;
