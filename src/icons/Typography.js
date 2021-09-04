import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="17.65" x2="8.12" y2="17.65" />
    <line x1="8.05" y1="14.12" x2="12.92" y2="14.12" />
    <polygon
      fill="none"
      points="17.29 17.65 14.47 17.65 10.35 7.92 10.94 6.35 12.35 6.35 17.29 17.65"
    />
    <line x1="10.35" y1="7.92" x2="6.71" y2="17.65" />
    <line x1="13.06" y1="17.65" x2="18" y2="17.65" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="17.65" x2="8.12" y2="17.65" />
    <line x1="8.05" y1="14.12" x2="12.92" y2="14.12" />
    <polygon points="17.29 17.65 14.47 17.65 10.35 7.92 10.94 6.35 12.35 6.35 17.29 17.65" />
    <line x1="10.35" y1="7.92" x2="6.71" y2="17.65" />
    <line x1="13.06" y1="17.65" x2="18" y2="17.65" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="17.65" x2="8.12" y2="17.65" />
    <line x1="8.05" y1="14.12" x2="12.92" y2="14.12" />
    <polygon
      fillOpacity=".2"
      points="17.29 17.65 14.47 17.65 10.35 7.92 10.94 6.35 12.35 6.35 17.29 17.65"
    />
    <line x1="10.35" y1="7.92" x2="6.71" y2="17.65" />
    <line x1="13.06" y1="17.65" x2="18" y2="17.65" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="17.65" x2="8.12" y2="17.65" />
    <line x1="8.05" y1="14.12" x2="12.92" y2="14.12" />
    <polygon
      fill={secondaryColor}
      points="17.29 17.65 14.47 17.65 10.35 7.92 10.94 6.35 12.35 6.35 17.29 17.65"
    />
    <line x1="10.35" y1="7.92" x2="6.71" y2="17.65" />
    <line x1="13.06" y1="17.65" x2="18" y2="17.65" />
  </Fragment>
);

const Typography = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Typography;
