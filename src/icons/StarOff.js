import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6.6" y1="6.89" x2="17.41" y2="17.71" />
    <path fill="none" d="M10.81,8.7,12,6.29l1.85,3.76,4.15.6-2.66,2.59" />
    <polygon
      fill="none"
      points="15.35 15.65 15.7 17.7 12 15.76 8.3 17.7 9.01 13.57 6 10.65 9.8 10.1 15.35 15.65"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6.6" y1="6.89" x2="17.41" y2="17.71" />
    <path fill="none" d="M10.81,8.7,12,6.29l1.85,3.76,4.15.6-2.66,2.59" />
    <polygon points="15.35 15.65 15.7 17.7 12 15.76 8.3 17.7 9.01 13.57 6 10.65 9.8 10.1 15.35 15.65" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6.6" y1="6.89" x2="17.41" y2="17.71" />
    <path fill="none" d="M10.81,8.7,12,6.29l1.85,3.76,4.15.6-2.66,2.59" />
    <polygon
      fillOpacity=".2"
      points="15.35 15.65 15.7 17.7 12 15.76 8.3 17.7 9.01 13.57 6 10.65 9.8 10.1 15.35 15.65"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6.6" y1="6.89" x2="17.41" y2="17.71" />
    <path fill="none" d="M10.81,8.7,12,6.29l1.85,3.76,4.15.6-2.66,2.59" />
    <polygon
      fill={secondaryColor}
      points="15.35 15.65 15.7 17.7 12 15.76 8.3 17.7 9.01 13.57 6 10.65 9.8 10.1 15.35 15.65"
    />
  </Fragment>
);

const StarOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default StarOff;
