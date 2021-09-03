import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="3" rx="0.75" />
    <rect fill="none" x="6" y="12" width="4.5" height="6" rx="0.75" />
    <line x1="13.5" y1="12" x2="18" y2="12" />
    <line x1="13.5" y1="15" x2="18" y2="15" />
    <line x1="13.5" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6" width="12" height="3" rx="0.75" />
    <rect x="6" y="12" width="4.5" height="6" rx="0.75" />
    <line x1="13.5" y1="12" x2="18" y2="12" />
    <line x1="13.5" y1="15" x2="18" y2="15" />
    <line x1="13.5" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="3" rx="0.75" />
    <rect fillOpacity=".2" x="6" y="12" width="4.5" height="6" rx="0.75" />
    <line x1="13.5" y1="12" x2="18" y2="12" />
    <line x1="13.5" y1="15" x2="18" y2="15" />
    <line x1="13.5" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="3" rx="0.75" />
    <rect fill={secondaryColor} x="6" y="12" width="4.5" height="6" rx="0.75" />
    <line x1="13.5" y1="12" x2="18" y2="12" />
    <line x1="13.5" y1="15" x2="18" y2="15" />
    <line x1="13.5" y1="18" x2="18" y2="18" />
  </Fragment>
);

const Template = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Template;
