import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="8.67" />
    <line x1="12" y1="18" x2="12" y2="16" />
    <line x1="6" y1="12" x2="8.67" y2="12" />
    <line x1="18" y1="12" x2="16" y2="12" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="8.67" />
    <line x1="12" y1="18" x2="12" y2="16" />
    <line x1="6" y1="12" x2="8.67" y2="12" />
    <line x1="18" y1="12" x2="16" y2="12" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="8.67" />
    <line x1="12" y1="18" x2="12" y2="16" />
    <line x1="6" y1="12" x2="8.67" y2="12" />
    <line x1="18" y1="12" x2="16" y2="12" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="12" y1="6" x2="12" y2="8.67" />
    <line x1="12" y1="18" x2="12" y2="16" />
    <line x1="6" y1="12" x2="8.67" y2="12" />
    <line x1="18" y1="12" x2="16" y2="12" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </Fragment>
);

const ViewFinder = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ViewFinder;
