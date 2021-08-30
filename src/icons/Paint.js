import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6.33" y="6" width="9.33" height="4" rx="1.33" />
    <path
      fill="none"
      d="M15.67,8h.66a1.34,1.34,0,0,1,1.34,1.33,3.35,3.35,0,0,1-3.34,3.34H11V14"
    />
    <rect fill="none" x="9.67" y="14" width="2.67" height="4" rx="0.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6.33" y="6" width="9.33" height="4" rx="1.33" />
    <path
      fill="none"
      d="M15.67,8h.66a1.34,1.34,0,0,1,1.34,1.33,3.35,3.35,0,0,1-3.34,3.34H11V14"
    />
    <rect x="9.67" y="14" width="2.67" height="4" rx="0.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6.33" y="6" width="9.33" height="4" rx="1.33" />
    <path
      fill="none"
      d="M15.67,8h.66a1.34,1.34,0,0,1,1.34,1.33,3.35,3.35,0,0,1-3.34,3.34H11V14"
    />
    <rect fillOpacity=".2" x="9.67" y="14" width="2.67" height="4" rx="0.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6.33"
      y="6"
      width="9.33"
      height="4"
      rx="1.33"
    />
    <path
      fill="none"
      d="M15.67,8h.66a1.34,1.34,0,0,1,1.34,1.33,3.35,3.35,0,0,1-3.34,3.34H11V14"
    />
    <rect
      fill={secondaryColor}
      x="9.67"
      y="14"
      width="2.67"
      height="4"
      rx="0.67"
    />
  </Fragment>
);

const Paint = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Paint;
