import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="15" y1="7" x2="17" y2="9" />
    <line x1="17" y1="7" x2="15" y2="9" />
    <line x1="8" y1="6.67" x2="8" y2="9.33" />
    <line x1="6.67" y1="8" x2="9.33" y2="8" />
    <line x1="16" y1="14.67" x2="16.01" y2="14.67" />
    <line x1="16" y1="17.33" x2="16.01" y2="17.33" />
    <line x1="6.67" y1="16" x2="9.33" y2="16" />
    <line x1="14.67" y1="16" x2="17.33" y2="16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="15" y1="7" x2="17" y2="9" />
    <line x1="17" y1="7" x2="15" y2="9" />
    <line x1="8" y1="6.67" x2="8" y2="9.33" />
    <line x1="6.67" y1="8" x2="9.33" y2="8" />
    <line x1="16" y1="14.67" x2="16.01" y2="14.67" />
    <line x1="16" y1="17.33" x2="16.01" y2="17.33" />
    <line x1="6.67" y1="16" x2="9.33" y2="16" />
    <line x1="14.67" y1="16" x2="17.33" y2="16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="12" x2="18" y2="12" />
    <line strokeOpacity=".2" x1="12" y1="6" x2="12" y2="18" />
    <line x1="15" y1="7" x2="17" y2="9" />
    <line x1="17" y1="7" x2="15" y2="9" />
    <line x1="8" y1="6.67" x2="8" y2="9.33" />
    <line x1="6.67" y1="8" x2="9.33" y2="8" />
    <line x1="16" y1="14.67" x2="16.01" y2="14.67" />
    <line x1="16" y1="17.33" x2="16.01" y2="17.33" />
    <line x1="6.67" y1="16" x2="9.33" y2="16" />
    <line x1="14.67" y1="16" x2="17.33" y2="16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="6" y1="12" x2="18" y2="12" />
    <line stroke={secondaryColor} x1="12" y1="6" x2="12" y2="18" />
    <line x1="15" y1="7" x2="17" y2="9" />
    <line x1="17" y1="7" x2="15" y2="9" />
    <line x1="8" y1="6.67" x2="8" y2="9.33" />
    <line x1="6.67" y1="8" x2="9.33" y2="8" />
    <line x1="16" y1="14.67" x2="16.01" y2="14.67" />
    <line x1="16" y1="17.33" x2="16.01" y2="17.33" />
    <line x1="6.67" y1="16" x2="9.33" y2="16" />
    <line x1="14.67" y1="16" x2="17.33" y2="16" />
  </Fragment>
);

const MathSymbols = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MathSymbols;
