import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="9.75" y="6" width="4.5" height="9" rx="1.5" />
    <line x1="6" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="9.75" y="6" width="4.5" height="9" rx="1.5" />
    <line x1="6" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="9.75" y="6" width="4.5" height="9" rx="1.5" />
    <line x1="6" y1="18" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="9.75"
      y="6"
      width="4.5"
      height="9"
      rx="1.5"
    />
    <line stroke={secondaryColor} x1="6" y1="18" x2="18" y2="18" />
  </Fragment>
);

const AlignBottom = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default AlignBottom;
