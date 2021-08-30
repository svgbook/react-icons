import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon
      fill="none"
      points="17.61 9.87 14.52 12.97 13.35 16.06 12.19 17.23 6.78 11.81 7.94 10.65 11.03 9.48 14.13 6.39 17.61 9.87"
    />
    <line x1="9.48" y1="14.52" x2="6" y2="18" />
    <line x1="13.74" y1="6" x2="18" y2="10.26" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon points="17.61 9.87 14.52 12.97 13.35 16.06 12.19 17.23 6.78 11.81 7.94 10.65 11.03 9.48 14.13 6.39 17.61 9.87" />
    <line x1="9.48" y1="14.52" x2="6" y2="18" />
    <line x1="13.74" y1="6" x2="18" y2="10.26" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="17.61 9.87 14.52 12.97 13.35 16.06 12.19 17.23 6.78 11.81 7.94 10.65 11.03 9.48 14.13 6.39 17.61 9.87"
    />
    <line x1="9.48" y1="14.52" x2="6" y2="18" />
    <line x1="13.74" y1="6" x2="18" y2="10.26" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="17.61 9.87 14.52 12.97 13.35 16.06 12.19 17.23 6.78 11.81 7.94 10.65 11.03 9.48 14.13 6.39 17.61 9.87"
    />
    <line x1="9.48" y1="14.52" x2="6" y2="18" />
    <line x1="13.74" y1="6" x2="18" y2="10.26" />
  </Fragment>
);

const Pin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pin;
