import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="6" y2="12" />
    <line x1="8.67" y1="12" x2="15.33" y2="12" />
    <line x1="18" y1="12" x2="18" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="12" x2="6" y2="12" />
    <line x1="8.67" y1="12" x2="15.33" y2="12" />
    <line x1="18" y1="12" x2="18" y2="12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="6" y2="12" />
    <line strokeOpacity=".2" x1="8.67" y1="12" x2="15.33" y2="12" />
    <line x1="18" y1="12" x2="18" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="12" x2="6" y2="12" />
    <line stroke={secondaryColor} x1="8.67" y1="12" x2="15.33" y2="12" />
    <line x1="18" y1="12" x2="18" y2="12" />
  </Fragment>
);

const Separator = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Separator;
