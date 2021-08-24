import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="6" y2="18" />
    <rect fill="none" x="9" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="6" x2="6" y2="18" />
    <rect x="9" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="6" y2="18" />
    <rect fillOpacity=".2" x="9" y="9.75" width="9" height="4.5" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="6" y1="6" x2="6" y2="18" />
    <rect
      fill={secondaryColor}
      x="9"
      y="9.75"
      width="9"
      height="4.5"
      rx="1.5"
    />
  </Fragment>
);

const AlignLeft2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default AlignLeft2;
