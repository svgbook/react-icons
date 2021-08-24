import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="9.75" y2="12" />
    <line x1="14.25" y1="12" x2="18" y2="12" />
    <rect fill="none" x="9.75" y="7.5" width="4.5" height="9" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="12" x2="9.75" y2="12" />
    <line x1="14.25" y1="12" x2="18" y2="12" />
    <rect x="9.75" y="7.5" width="4.5" height="9" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="9.75" y2="12" />
    <line x1="14.25" y1="12" x2="18" y2="12" />
    <rect fillOpacity=".2" x="9.75" y="7.5" width="4.5" height="9" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="6" y1="12" x2="9.75" y2="12" />
    <line stroke={secondaryColor} x1="14.25" y1="12" x2="18" y2="12" />
    <rect
      fill={secondaryColor}
      x="9.75"
      y="7.5"
      width="4.5"
      height="9"
      rx="1.5"
    />
  </Fragment>
);

const AlignMiddle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default AlignMiddle;
