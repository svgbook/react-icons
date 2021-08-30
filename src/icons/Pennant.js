import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M9.67,6.67l6,2.66L9.67,12Z" />
    <line x1="8.33" y1="18" x2="11" y2="18" />
    <line x1="9.67" y1="18" x2="9.67" y2="6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.67,6.67l6,2.66L9.67,12Z" />
    <line x1="8.33" y1="18" x2="11" y2="18" />
    <line x1="9.67" y1="18" x2="9.67" y2="6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M9.67,6.67l6,2.66L9.67,12Z" />
    <line x1="8.33" y1="18" x2="11" y2="18" />
    <line x1="9.67" y1="18" x2="9.67" y2="6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M9.67,6.67l6,2.66L9.67,12Z" />
    <line x1="8.33" y1="18" x2="11" y2="18" />
    <line x1="9.67" y1="18" x2="9.67" y2="6" />
  </Fragment>
);

const Pennant = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pennant;
