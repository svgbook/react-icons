import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect fill="none" x="13.5" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect fill="none" x="6" y="13.5" width="4.5" height="4.5" rx="0.75" />
    <path fill="none" d="M13.5,15.75H18M15.75,13.5V18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect x="13.5" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect x="6" y="13.5" width="4.5" height="4.5" rx="0.75" />
    <path fill="none" d="M13.5,15.75H18M15.75,13.5V18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect fillOpacity=".2" x="13.5" y="6" width="4.5" height="4.5" rx="0.75" />
    <rect fillOpacity=".2" x="6" y="13.5" width="4.5" height="4.5" rx="0.75" />
    <path fill="none" d="M13.5,15.75H18M15.75,13.5V18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6"
      y="6"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <rect
      fill={secondaryColor}
      x="13.5"
      y="6"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <rect
      fill={secondaryColor}
      x="6"
      y="13.5"
      width="4.5"
      height="4.5"
      rx="0.75"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.5,15.75H18M15.75,13.5V18"
    />
  </Fragment>
);

const GridAdd = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default GridAdd;
