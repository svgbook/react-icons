import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="7.5" x2="9.75" y2="7.5" />
    <line x1="18" y1="12" x2="12.75" y2="12" />
    <line x1="18" y1="16.5" x2="9.75" y2="16.5" />
    <path fill="none" d="M6,9l3,3L6,15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="7.5" x2="9.75" y2="7.5" />
    <line x1="18" y1="12" x2="12.75" y2="12" />
    <line x1="18" y1="16.5" x2="9.75" y2="16.5" />
    <path fill="none" d="M6,9l3,3L6,15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="18" y1="7.5" x2="9.75" y2="7.5" />
    <line strokeOpacity=".2" x1="18" y1="12" x2="12.75" y2="12" />
    <line strokeOpacity=".2" x1="18" y1="16.5" x2="9.75" y2="16.5" />
    <path fill="none" d="M6,9l3,3L6,15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="18" y1="7.5" x2="9.75" y2="7.5" />
    <line x1="18" y1="12" x2="12.75" y2="12" />
    <line x1="18" y1="16.5" x2="9.75" y2="16.5" />
    <path fill="none" stroke={secondaryColor} d="M6,9l3,3L6,15" />
  </Fragment>
);

const IndentIncrease = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default IndentIncrease;
