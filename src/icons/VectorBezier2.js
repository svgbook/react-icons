import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.67" y1="7.33" x2="13.33" y2="7.33" />
    <line x1="10.67" y1="16.67" x2="15.33" y2="16.67" />
    <path
      fill="none"
      d="M8.67,7.67C10.51,7.67,12,9.61,12,12s1.49,4.33,3.33,4.33"
    />
    <rect fill="none" x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect
      fill="none"
      x="15.33"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <circle fill="none" cx="10" cy="16.67" r="0.67" />
    <circle fill="none" cx="14" cy="7.33" r="0.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.67" y1="7.33" x2="13.33" y2="7.33" />
    <line x1="10.67" y1="16.67" x2="15.33" y2="16.67" />
    <path
      fill="none"
      d="M8.67,7.67C10.51,7.67,12,9.61,12,12s1.49,4.33,3.33,4.33"
    />
    <rect x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect x="15.33" y="15.33" width="2.67" height="2.67" rx="0.67" />
    <circle cx="10" cy="16.67" r="0.67" />
    <circle cx="14" cy="7.33" r="0.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="8.67" y1="7.33" x2="13.33" y2="7.33" />
    <line x1="10.67" y1="16.67" x2="15.33" y2="16.67" />
    <path
      fill="none"
      d="M8.67,7.67C10.51,7.67,12,9.61,12,12s1.49,4.33,3.33,4.33"
    />
    <rect fillOpacity=".2" x="6" y="6" width="2.67" height="2.67" rx="0.67" />
    <rect
      fillOpacity=".2"
      x="15.33"
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <circle fillOpacity=".2" cx="10" cy="16.67" r="0.67" />
    <circle fillOpacity=".2" cx="14" cy="7.33" r="0.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.67" y1="7.33" x2="13.33" y2="7.33" />
    <line x1="10.67" y1="16.67" x2="15.33" y2="16.67" />
    <path
      fill="none"
      d="M8.67,7.67C10.51,7.67,12,9.61,12,12s1.49,4.33,3.33,4.33"
    />
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
      y="15.33"
      width="2.67"
      height="2.67"
      rx="0.67"
    />
    <circle fill={secondaryColor} cx="10" cy="16.67" r="0.67" />
    <circle fill={secondaryColor} cx="14" cy="7.33" r="0.67" />
  </Fragment>
);

const VectorBezier2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default VectorBezier2;
