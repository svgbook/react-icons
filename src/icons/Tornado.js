import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="6.67" x2="6" y2="6.67" />
    <line x1="12.67" y1="14.67" x2="8.67" y2="14.67" />
    <line x1="11.33" y1="17.33" x2="14" y2="17.33" />
    <line x1="8" y1="9.33" x2="17.33" y2="9.33" />
    <line x1="6.67" y1="12" x2="14.67" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="6.67" x2="6" y2="6.67" />
    <line x1="12.67" y1="14.67" x2="8.67" y2="14.67" />
    <line x1="11.33" y1="17.33" x2="14" y2="17.33" />
    <line x1="8" y1="9.33" x2="17.33" y2="9.33" />
    <line x1="6.67" y1="12" x2="14.67" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="18" y1="6.67" x2="6" y2="6.67" />
    <line strokeOpacity=".2" x1="12.67" y1="14.67" x2="8.67" y2="14.67" />
    <line x1="11.33" y1="17.33" x2="14" y2="17.33" />
    <line strokeOpacity=".2" x1="8" y1="9.33" x2="17.33" y2="9.33" />
    <line x1="6.67" y1="12" x2="14.67" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="18" y1="6.67" x2="6" y2="6.67" />
    <line x1="12.67" y1="14.67" x2="8.67" y2="14.67" />
    <line stroke={secondaryColor} x1="11.33" y1="17.33" x2="14" y2="17.33" />
    <line x1="8" y1="9.33" x2="17.33" y2="9.33" />
    <line stroke={secondaryColor} x1="6.67" y1="12" x2="14.67" y2="12" />
  </Fragment>
);

const Tornado = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tornado;
