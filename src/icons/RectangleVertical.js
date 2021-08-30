import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="7.33" y="6" width="9.33" height="12" rx="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="7.33" y="6" width="9.33" height="12" rx="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="7.33"
      y="6"
      width="9.33"
      height="12"
      rx="1.33"
    />
  </Fragment>
);

const RectangleVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RectangleVertical;
