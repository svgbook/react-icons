import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="10.59" y="6.01" width="2.82" height="2.82" rx="0.7" />
    <rect fill="none" x="5.66" y="15.17" width="2.82" height="2.82" rx="0.7" />
    <rect fill="none" x="15.52" y="15.17" width="2.82" height="2.82" rx="0.7" />
    <line x1="8.12" y1="15.24" x2="11.65" y2="8.83" />
    <line x1="15.88" y1="15.24" x2="12.35" y2="8.83" />
    <line x1="8.48" y1="16.58" x2="15.52" y2="16.58" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.12" y1="15.24" x2="11.65" y2="8.83" />
    <line x1="15.88" y1="15.24" x2="12.35" y2="8.83" />
    <line x1="8.48" y1="16.58" x2="15.52" y2="16.58" />
    <rect x="10.59" y="6.01" width="2.82" height="2.82" rx="0.7" />
    <rect x="5.66" y="15.17" width="2.82" height="2.82" rx="0.7" />
    <rect x="15.52" y="15.17" width="2.82" height="2.82" rx="0.7" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="8.12" y1="15.24" x2="11.65" y2="8.83" />
    <line x1="15.88" y1="15.24" x2="12.35" y2="8.83" />
    <line x1="8.48" y1="16.58" x2="15.52" y2="16.58" />
    <rect
      fillOpacity=".2"
      x="10.59"
      y="6.01"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
    <rect
      fillOpacity=".2"
      x="5.66"
      y="15.17"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
    <rect
      fillOpacity=".2"
      x="15.52"
      y="15.17"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.12" y1="15.24" x2="11.65" y2="8.83" />
    <line x1="15.88" y1="15.24" x2="12.35" y2="8.83" />
    <line x1="8.48" y1="16.58" x2="15.52" y2="16.58" />
    <rect
      fill={secondaryColor}
      x="10.59"
      y="6.01"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
    <rect
      fill={secondaryColor}
      x="5.66"
      y="15.17"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
    <rect
      fill={secondaryColor}
      x="15.52"
      y="15.17"
      width="2.82"
      height="2.82"
      rx="0.7"
    />
  </Fragment>
);

const VectorTriangle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default VectorTriangle;
