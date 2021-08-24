import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="6" x2="18" y2="18" />
    <rect fill="none" x="6" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="6" x2="18" y2="18" />
    <rect x="6" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="18" y1="6" x2="18" y2="18" />
    <rect fillOpacity=".2" x="6" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="18" y1="6" x2="18" y2="18" />
    <rect
      fill={secondaryColor}
      x="6"
      y="9.75"
      width="9"
      height="4.5"
      rx="1.5"
    />
  </Fragment>
);

const AlignRight2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default AlignRight2;
