import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <rect fill="none" x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect fill="none" x="15.33" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect
      fill="none"
      x="15.33"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect fill="none" x="6" y="15.33" width="2.67" height="2.67" rx="0.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <rect x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect x="15.33" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect x="15.33" y="15.33" width="2.67" height="2.67" rx="0.67" />
    <rect x="6" y="15.33" width="2.67" height="2.67" rx="0.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <rect fillOpacity=".2" x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect
      fillOpacity=".2"
      x="15.33"
      y="6"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect
      fillOpacity=".2"
      x="15.33"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect
      fillOpacity=".2"
      x="6"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="7.33" y1="8.67" x2="7.33" y2="15.33" />
    <line x1="16.67" y1="8.67" x2="16.67" y2="15.33" />
    <line x1="8.67" y1="7.33" x2="15.33" y2="7.33" />
    <line x1="8.67" y1="16.67" x2="15.33" y2="16.67" />
    <rect
      fill={secondaryColor}
      x="6"
      y="6"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect
      fill={secondaryColor}
      x="15.33"
      y="6"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect
      fill={secondaryColor}
      x="15.33"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <rect
      fill={secondaryColor}
      x="6"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
  </Fragment>
);

const Vector = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Vector;
