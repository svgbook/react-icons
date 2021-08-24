import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="8" x2="12" y2="6" />
    <line x1="14.83" y1="9.17" x2="16.27" y2="7.73" />
    <line x1="16" y1="12" x2="18" y2="12" />
    <line x1="14.83" y1="14.83" x2="16.27" y2="16.27" />
    <line x1="12" y1="16" x2="12" y2="18" />
    <line x1="9.17" y1="14.83" x2="7.73" y2="16.27" />
    <line x1="8" y1="12" x2="6" y2="12" />
    <line x1="9.17" y1="9.17" x2="7.73" y2="7.73" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="8" x2="12" y2="6" />
    <line x1="14.83" y1="9.17" x2="16.27" y2="7.73" />
    <line x1="16" y1="12" x2="18" y2="12" />
    <line x1="14.83" y1="14.83" x2="16.27" y2="16.27" />
    <line x1="12" y1="16" x2="12" y2="18" />
    <line x1="9.17" y1="14.83" x2="7.73" y2="16.27" />
    <line x1="8" y1="12" x2="6" y2="12" />
    <line x1="9.17" y1="9.17" x2="7.73" y2="7.73" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="12" y1="8" x2="12" y2="6" />
    <line strokeOpacity=".2" x1="14.83" y1="9.17" x2="16.27" y2="7.73" />
    <line x1="16" y1="12" x2="18" y2="12" />
    <line strokeOpacity=".2" x1="14.83" y1="14.83" x2="16.27" y2="16.27" />
    <line x1="12" y1="16" x2="12" y2="18" />
    <line strokeOpacity=".2" x1="9.17" y1="14.83" x2="7.73" y2="16.27" />
    <line x1="8" y1="12" x2="6" y2="12" />
    <line strokeOpacity=".2" x1="9.17" y1="9.17" x2="7.73" y2="7.73" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="12" y1="8" x2="12" y2="6" />
    <line stroke={secondaryColor} x1="14.83" y1="9.17" x2="16.27" y2="7.73" />
    <line x1="16" y1="12" x2="18" y2="12" />
    <line stroke={secondaryColor} x1="14.83" y1="14.83" x2="16.27" y2="16.27" />
    <line x1="12" y1="16" x2="12" y2="18" />
    <line stroke={secondaryColor} x1="9.17" y1="14.83" x2="7.73" y2="16.27" />
    <line x1="8" y1="12" x2="6" y2="12" />
    <line stroke={secondaryColor} x1="9.17" y1="9.17" x2="7.73" y2="7.73" />
  </Fragment>
);

const Loader = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Loader;
