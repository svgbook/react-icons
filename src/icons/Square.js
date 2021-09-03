import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
  </Fragment>
);

const Square = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Square;
