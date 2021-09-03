import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="14.4 6 17.6 6 17.6 9.2" />
    <line x1="14.2" y1="10.2" x2="17.6" y2="6" />
    <line x1="6.4" y1="18" x2="9.6" y2="14.8" />
    <polyline fill="none" points="14.4 18 17.6 18 17.6 14.8" />
    <line x1="6.4" y1="6.8" x2="17.6" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="14.4 6 17.6 6 17.6 9.2" />
    <line x1="14.2" y1="10.2" x2="17.6" y2="6" />
    <line x1="6.4" y1="18" x2="9.6" y2="14.8" />
    <polyline fill="none" points="14.4 18 17.6 18 17.6 14.8" />
    <line x1="6.4" y1="6.8" x2="17.6" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fill="none" strokeOpacity=".2" points="14.4 6 17.6 6 17.6 9.2" />
    <line strokeOpacity=".2" x1="14.2" y1="10.2" x2="17.6" y2="6" />
    <line strokeOpacity=".2" x1="6.4" y1="18" x2="9.6" y2="14.8" />
    <polyline fill="none" points="14.4 18 17.6 18 17.6 14.8" />
    <line x1="6.4" y1="6.8" x2="17.6" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="14.4 6 17.6 6 17.6 9.2" />
    <line x1="14.2" y1="10.2" x2="17.6" y2="6" />
    <line x1="6.4" y1="18" x2="9.6" y2="14.8" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="14.4 18 17.6 18 17.6 14.8"
    />
    <line stroke={secondaryColor} x1="6.4" y1="6.8" x2="17.6" y2="18" />
  </Fragment>
);

const Switch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Switch;
