import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="9.2" y1="7.2" x2="18" y2="7.2" />
    <line x1="9.2" y1="12" x2="18" y2="12" />
    <line x1="9.2" y1="16.8" x2="18" y2="16.8" />
    <line x1="6" y1="7.2" x2="6" y2="7.2" />
    <line x1="6" y1="12" x2="6" y2="12" />
    <line x1="6" y1="16.8" x2="6" y2="16.8" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="9.2" y1="7.2" x2="18" y2="7.2" />
    <line x1="9.2" y1="12" x2="18" y2="12" />
    <line x1="9.2" y1="16.8" x2="18" y2="16.8" />
    <line x1="6" y1="7.2" x2="6" y2="7.2" />
    <line x1="6" y1="12" x2="6" y2="12" />
    <line x1="6" y1="16.8" x2="6" y2="16.8" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="9.2" y1="7.2" x2="18" y2="7.2" />
    <line x1="9.2" y1="12" x2="18" y2="12" />
    <line x1="9.2" y1="16.8" x2="18" y2="16.8" />
    <line strokeOpacity=".2" x1="6" y1="7.2" x2="6" y2="7.2" />
    <line strokeOpacity=".2" x1="6" y1="12" x2="6" y2="12" />
    <line strokeOpacity=".2" x1="6" y1="16.8" x2="6" y2="16.8" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="9.2" y1="7.2" x2="18" y2="7.2" />
    <line x1="9.2" y1="12" x2="18" y2="12" />
    <line x1="9.2" y1="16.8" x2="18" y2="16.8" />
    <line stroke={secondaryColor} x1="6" y1="7.2" x2="6" y2="7.2" />
    <line stroke={secondaryColor} x1="6" y1="12" x2="6" y2="12" />
    <line stroke={secondaryColor} x1="6" y1="16.8" x2="6" y2="16.8" />
  </Fragment>
);

const List2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default List2;
