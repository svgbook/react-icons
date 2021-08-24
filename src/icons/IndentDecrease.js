import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="7.5" x2="12.75" y2="7.5" />
    <line x1="18" y1="12" x2="11.25" y2="12" />
    <line x1="18" y1="16.5" x2="12.75" y2="16.5" />
    <path fill="none" d="M9,9,6,12l3,3" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="7.5" x2="12.75" y2="7.5" />
    <line x1="18" y1="12" x2="11.25" y2="12" />
    <line x1="18" y1="16.5" x2="12.75" y2="16.5" />
    <path fill="none" d="M9,9,6,12l3,3" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="18" y1="7.5" x2="12.75" y2="7.5" />
    <line strokeOpacity=".2" x1="18" y1="12" x2="11.25" y2="12" />
    <line strokeOpacity=".2" x1="18" y1="16.5" x2="12.75" y2="16.5" />
    <path fill="none" d="M9,9,6,12l3,3" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="18" y1="7.5" x2="12.75" y2="7.5" />
    <line x1="18" y1="12" x2="11.25" y2="12" />
    <line x1="18" y1="16.5" x2="12.75" y2="16.5" />
    <path fill="none" stroke={secondaryColor} d="M9,9,6,12l3,3" />
  </Fragment>
);

const IndentDecrease = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default IndentDecrease;
