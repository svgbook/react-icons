import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.29" cy="13.71" r="4.29" />
    <line x1="18" y1="6" x2="13.37" y2="10.63" />
    <line x1="18" y1="6" x2="13.71" y2="6" />
    <line x1="18" y1="6" x2="18" y2="10.29" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="10.29" cy="13.71" r="4.29" />
    <line x1="18" y1="6" x2="13.37" y2="10.63" />
    <line x1="18" y1="6" x2="13.71" y2="6" />
    <line x1="18" y1="6" x2="18" y2="10.29" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.29" cy="13.71" r="4.29" />
    <line x1="18" y1="6" x2="13.37" y2="10.63" />
    <line x1="18" y1="6" x2="13.71" y2="6" />
    <line x1="18" y1="6" x2="18" y2="10.29" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.29" cy="13.71" r="4.29" />
    <line x1="18" y1="6" x2="13.37" y2="10.63" />
    <line x1="18" y1="6" x2="13.71" y2="6" />
    <line x1="18" y1="6" x2="18" y2="10.29" />
  </Fragment>
);

const Mars = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mars;
