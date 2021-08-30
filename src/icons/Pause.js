import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6.86" y="6" width="3.43" height="12" rx="0.86" />
    <rect fill="none" x="13.71" y="6" width="3.43" height="12" rx="0.86" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6.86" y="6" width="3.43" height="12" rx="0.86" />
    <rect x="13.71" y="6" width="3.43" height="12" rx="0.86" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6.86" y="6" width="3.43" height="12" rx="0.86" />
    <rect fillOpacity=".2" x="13.71" y="6" width="3.43" height="12" rx="0.86" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x="6.86"
      y="6"
      width="3.43"
      height="12"
      rx="0.86"
    />
    <rect
      fill={secondaryColor}
      x="13.71"
      y="6"
      width="3.43"
      height="12"
      rx="0.86"
    />
  </Fragment>
);

const Pause = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pause;
